const baseURL = "http://192.168.0.55:8080"

export const getAllRegions = () => {
    return fetch(baseURL + "/regions")
        .then (res => res.json())
}



    