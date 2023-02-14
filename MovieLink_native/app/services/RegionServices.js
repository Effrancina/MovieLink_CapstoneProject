const baseURL = "http://192.168.1.128:8080"

export const getAllRegions = (setRegions) => {
    return fetch(baseURL + "/regions")
        .then (res => res.json())
        .then((regionsData) => setRegions(regionsData))
       .catch((err) => console.error(err));
}

export const getRegionById = (setRegion,id) => {
    return fetch(baseURL + "/regions/"+id)
        .then (res => res.json())
        .then((regionsData) => setRegion(regionsData))
       .catch((err) => console.error(err));
}



    