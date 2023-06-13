from justwatch import JustWatch

just_watch = JustWatch(country='GB')

results_by_multiple = just_watch.search_for_item(
    providers=['amp'], 
    content_types=['movie'])

print(results_by_multiple['items'])

results = just_watch.search_for_item(query='the matrix')

# print(results)