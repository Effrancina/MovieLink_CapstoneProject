const baseURL = "http://192.168.0.55:8080"

export const getAllMovies = () => {
    return fetch(baseURL + "/movies")
        .then (res => res.json())
        
}
