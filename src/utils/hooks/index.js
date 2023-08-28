const urlDataAll =  "./data.json"

const getAll = async () => {
    let response
    let data

    try {
        response = await fetch(urlDataAll)
        data = await response.json()

    } catch (err) {
        throw new Error('Erreur lors de la requete API :' + err)
    }

    return data
};


const getBySearch = async (string) => {
    let response
    let allData
    let data

    try {
        response = await fetch(urlDataAll)
        allData = await response.json()
        data = allData.filter(searchProduct => searchProduct.name.contain(string))

    } catch (err) {
        throw new Error('Erreur lors de la requete API :' + err)
    }

    return data
};

const DataService = {
    getAll,
    getBySearch
};
export default DataService;