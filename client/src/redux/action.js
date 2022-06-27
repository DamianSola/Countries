const axios = require('axios')


export const getAllCountries = () => {
    return function (dispatch) {
        return axios.get('http://localhost:3001/countries')
        .then((res) => {
            dispatch({
                type: "GET_ALL_COUNTRIES",
                payload: res.data,
            })
        })
    }
}
// getAllCountries()

export const getCountry = (name) => {
    return function (dispatch){
        return axios.get(`http://localhost:3001/countries/?name=${name}`)
        .then((res) => { 
            dispatch({
                type: "GET_COUNTRY",
                payload: res.data
            })
        })
    }
}
// getCountry('argeNtina')

export const getCountryById = async (id) =>{
    const oneCountry = await axios.get(`http://localhost:3001/countries/${id}`)
    // console.log(oneCountry.data)
    return({
        type: "GET_COUNTRY",
        payload: oneCountry.data
    })
}

// getCountryById('ARG')
export const filterByContinent =  (continent) =>{
    return {
        type:'FILTER_BY_CONTINENT',
        payload: continent,
    }
}
// getCountryByContinent('Americas')
var id = 0

export const createActivity = ({name,dificult,season,durations,country}) => {
    id++
    return({
        type: "CREATE_ACTIVITY",
        payload: {name,dificult,season,durations,country,id:id}
    })
}


export const getAllActivity = ()=>{
    return {
        type:"GET_ALL_ACTIVITY",
    }
}


export const getActivity = async(id) => {
    return({
        type: "GET_ACTIVITY",
        payload: id
    })
}

export const deleteActivity = (id) => {
    return({
        type: "DELETE_ACTIVITY",
        payload: id
    })
}

export default (getAllCountries,getCountry,createActivity,getAllActivity,getActivity,deleteActivity,filterByContinent)