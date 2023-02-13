const baseURL = "http://192.168.100.133:8080"

export const getAllMovies = () => {
    return fetch(baseURL + "/movies")
        .then (res => res.json())
    }

 export const getMoviesRegion1=(setMovies1,id1) => {
        return fetch(baseURL +"/movies?region=" + id1)
        .then(res => res.json())
        .then((moviesData) => setMovies1(moviesData))
        .catch((err) => console.error(err))
    }

 export const getMoviesRegion2=(setMovies2,id2) => {
        return fetch(baseURL +"/movies?region=" + id2)
        .then(res => res.json())
        .then((moviesData) => setMovies2(moviesData))
        .catch((err) => console.error(err))
    }


        

