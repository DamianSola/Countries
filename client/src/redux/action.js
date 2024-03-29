const axios = require('axios')


export const getAllCountries = () => {
    return function (dispatch) {
        return axios.get('/countries')
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
        return axios.get(`/countries/?name=${name}`)
        .then((res) => { 
            dispatch({
                type: "GET_COUNTRY",
                payload: res.data
            })
        })
    }
}
// getCountry('argeNtina')

export const getCountryById =  (id) =>{
    return function (dispatch){
        axios.get(`/countries/${id}`)
        .then((res) => {
            dispatch({
                type:"GET_DETAIL",
                payload: res.data
            })
        })
    }
}

// getCountryById('ARG')
export const filterByContinent =  (continent) =>{
    return {
        type:'FILTER_BY_CONTINENT',
        payload: continent,
    }
}
// getCountryByContinent('Americas')

export const createActivity = (newActivity) => {
    return function(dispatch){
        axios.post("/activity",newActivity)
        .then(() => {
            dispatch({
                type: "CREATED",
                payload: "ready"
            })
        })
    }
}


export const getAllActivity = ()=>{
    return function(dispatch){
        axios.get("/activity")
        .then(res =>  { 
            dispatch({
                type: "GET_ALL_ACTIVITY",
                payload: res.data
            })
        })
    }
}


export const getActivity = async(id) => {
    return({
        type: "GET_ACTIVITY",
        payload: id
    })
}

export const deleteActivity = (id) => {
    axios.delete("/activity/"+id)
    return({
        type: "DELETE_ACTIVITY",
        payload: id
    })
}

export default (getAllCountries,getCountry,createActivity,getAllActivity,getActivity,deleteActivity,filterByContinent)