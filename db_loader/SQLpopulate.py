# import unofficial api for justwatch
# and pymongo to use MongoDB client 
# and psycopg to connect to postgres
from justwatch import JustWatch
from pymongo import MongoClient
import psycopg2
import requests

# connect to MongoDB endpoint
client = MongoClient("mongodb://127.0.0.1:27017")
# connect to postgres database
conn = psycopg2.connect("dbname=films user=user") # change to username
cur = conn.cursor()
# create a list to store our page numbers
# ordered for GB-amp, GB-dnp, GB-nfx, US-amp, ... AU-nfx
pages = [66,63,66,66,44,66,1,64,66]
# create a list of platform codes
platforms = ['amp', 'dnp', 'nfx']
platform_names = ['Amazon Prime', 'Disney Plus', 'Netflix']

# prepare our justwatch regions for API calls
just_watch_gb = JustWatch(country='GB')
just_watch_us = JustWatch(country='US')
just_watch_au = JustWatch(country='AU')
# then we create a list of these
regions = [just_watch_gb,just_watch_us,just_watch_au]
region_names = ['Great Britain', 'United States', 'Australia']

# give our database name
db = client["films"]
# give our database collections names
# first for amazon prime
amazon_prime_gb = db["amazon_prime_gb"]
amazon_prime_us = db["amazon_prime_us"]
amazon_prime_au = db["amazon_prime_au"]
# then disney plus
disney_plus_gb = db["disney_plus_gb"]
disney_plus_us = db["disney_plus_us"]
disney_plus_au = db["disney_plus_au"]
# then netflix
netflix_gb = db["netflix_gb"]
netflix_us = db["netflix_us"]
netflix_au = db["netflix_au"]
# create a list of all the collections
collections = [amazon_prime_gb,
    amazon_prime_us,amazon_prime_au,
    disney_plus_gb,disney_plus_us,
    disney_plus_au,netflix_gb,
    netflix_us,netflix_au
    ]

def filter_res(id, region, platform, item):
    imdb_index = None
    if item.get("scoring"):
        imdb_index = next((index for (index, d) in enumerate(item["scoring"]) if d["provider_type"] == "imdb:score"), None)
    obj = {
        "title": item["title"],
        "poster": item["poster"] if item.get("poster") else "",
        "score": item["scoring"][imdb_index]["value"] if imdb_index else 0,
        "regions": [{
            "id": id,
            "regionName": region,
            "platform": platform
        }]
    }
    return obj

index = 0
# iterate over the regions
for i in range(3):
    region = regions[i]
    # iterate over the platforms
    for j in range(3):
        platform = platforms[j]
        # itterate over the pages
        for k in range(pages[index]):
            results = region.search_for_item(
                providers=[platform], 
                content_types=['movie'],
                page=k+1)
            
            f = lambda lst: filter_res(index+1, region_names[i], platform_names[j], lst)
            filtered = map(f, results["items"])

            for item in filtered:
                cur.execute("SELECT id FROM movies Where title=%s;",[item["title"]])
                if (table_id := cur.fetchone()):
                    url = f'http://localhost:8080/movies/{table_id[0]}'
                    requests.put(url, json=item)
                else:
                    url = 'http://localhost:8080/movies'
                    requests.post(url, json=item)
            
            #result = db.collection[index].insert_many(filtered)
        #this index is for itirating thruogh the page numbers and collections
        index+=1


# make changes permanant
conn.commit()
# Close communication with database
cur.close()
conn.close()