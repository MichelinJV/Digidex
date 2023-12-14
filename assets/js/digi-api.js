
const digiApi = {}

function convertDigiApiDetailToDigimon(digiDetail) {
    const digimon = new Digimon()    
    digimon.name = digiDetail.name
      
    digimon.level = digiDetail.level

    digimon.photo = digiDetail.img

    return digimon
}


digiApi.getDigimons = (offset = 0, limit = 5) => {
    const url = `https://digimon-api.vercel.app/api/digimon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody)
        .then((digimons) => digimons.map(convertDigiApiDetailToDigimon))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((digimonsDetails) => digimonsDetails)
}
