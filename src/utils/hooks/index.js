import  data  from '../../data.json'
const urlDataAll =  data

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


const getById = async (id) => {
    let response
    let allData
    let data

    try {
        response = await fetch(urlDataAll)
        allData = await response.json()
        data = allData.filter(housing => housing.id === id)[0]

    } catch (err) {
        throw new Error('Erreur lors de la requete API :' + err)
    }

    return data
};

const DataService = {
    getAll,
    getById
};
export default DataService;