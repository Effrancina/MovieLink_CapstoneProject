const baseURL = "http://192.168.100.127:8080"

export const getAllRegions = () => {
    return fetch(baseURL + "/regions")
        .then (res => res.json())
}



    