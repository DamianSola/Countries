const axios = require('axios');
const {Country} = require('../db.js');


const getCountryApi = async() => {
    const urlInfo = await axios.get('https://restcountries.com/v2/all');
    const justcontry = await urlInfo.data.map(async e =>{
        return await Country.create({
            name: e.name,
            flag: e.flags.png,
            capital: e.capital?e.capital:"sin capital",
            area: e.area,
            population: e.population,
            continent: e.region,
            subregion: e.subregion,
            id: e.alpha3Code
        })
    })
    await Promise.all(justcontry)
    // console.log('se lleno la bd')
}


const getCountryDb= async() =>{
    return await Country.findAll()
}

// function convertir(name){
//     var firtsword = name[0].toUpperCase()
//     var rest = name.slice(1)
//     return firtsword+rest;
//   }
// const getAllCountries = async()=>{
//     const infoDb = await getCountryDb();
//     const infoApi = await getCountryApi();
//     return infoApi.concat(infoDb);
// }


module.exports = {
    getCountryApi,
    getCountryDb,
    
    // getAllCountries,
}

