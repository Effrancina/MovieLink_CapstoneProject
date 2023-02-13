const baseURL = "http://192.168.100.133:8080"

export const getAllRegions = (setRegions) => {
    return fetch(baseURL + "/regions")
        .then (res => res.json())
        .then((regionsData) => setRegions(regionsData))
       .catch((err) => console.error(err));
}



    