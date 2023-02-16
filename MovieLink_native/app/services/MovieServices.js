const baseURL = "http://192.168.100.127:8080"

export const getAllMovies = (setMovies) => {
    return fetch(baseURL + "/movies")
        .then (res => res.json())
        .then((moviesData) => {
            setMovies(moviesData);
        })
        .catch((err) => console.error(err))
    }

 export const getMoviesRegion=(setMovies,region1id,region2id,provider1ids,provider2ids) => {
    const platformListA = provider1ids.map(id => {
        return {"region":  region1id+ id-1}
    
    })
    
    const platformListB = provider2ids.map(id => {
        return {"region":  region2id+ id-1}
    
    })
   
    const userObject = {user1: platformListA, user2: platformListB}
    const jsonObject = JSON.stringify(userObject)
    
        return fetch(baseURL +"/movies/search", {method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: jsonObject})
        .then(res => res.json())
        .then((moviesData) => setMovies(moviesData))
        .catch((err) => console.error(err))
    }

 export const getRandomMovie=(setMovie) => {
        return fetch(baseURL +"/movies/random")
        .then(res => res.json())
        .then((moviesData) => setMovie(moviesData))
        .catch((err) => console.error(err))
    }


        

