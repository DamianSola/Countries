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

export const getCountryById =  (id) =>{
    return function (dispatch){
        axios.get(`http://localhost:3001/countries/${id}`)
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
    axios.post(`http://localhost:3001/activity`,newActivity)
    // return({
    //     type: "CREATE_ACTIVITY",
    //     payload: newActivity
    // })
}


export const getAllActivity = ()=>{
    return function(dispatch){
        axios.get("http://localhost:3001/activity")
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
    axios.delete("http://localhost:3001/activity/"+id)
    return({
        type: "DELETE_ACTIVITY",
        payload: id
    })
}

export default (getAllCountries,getCountry,createActivity,getAllActivity,getActivity,deleteActivity,filterByContinent)