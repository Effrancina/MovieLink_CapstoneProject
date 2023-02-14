const baseURL = "http://192.168.1.128:8080"

export const getAllMovies = (setMovies) => {
    return fetch(baseURL + "/movies")
        .then (res => res.json())
        .then((moviesData) => {
            setMovies(moviesData);
        })
        .catch((err) => console.error(err))
    }

// export const getAllMoviesForFilter = (setMovies, setMovies2) => {
//     return fetch(baseURL + "/movies")
//         .then (res => res.json())
//         .then((moviesData) => { 
//             setMovies(moviesData);
//             setMovies2(moviesData)
//         })
//         .catch((err) => console.error(err))
//         }

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

 export const getRandomMovie=(setMovie) => {
        return fetch(baseURL +"/movies/random")
        .then(res => res.json())
        .then((moviesData) => setMovie(moviesData))
        .catch((err) => console.error(err))
    }


        

