import React, { useEffect, useState } from "react";
import { getActivity, getCountryById } from "../../redux/action";
import { useParams } from 'react-router-dom';
// import {connect} from "react-redux"
import './Country.css'
import { connect, useSelector } from "react-redux";
import ActivityCard from "../Activities/ActivityCard";


const Country = () => {
    let [counId, setCountId] = useState([])
    const {id} = useParams()

    let {activities} = useSelector(state => state)
    activities = activities.filter(e => e.country === id)



    const onGetCountry = async (countryId) => {
        console.log(countryId)
        const count = await getCountryById(countryId)
        // console.log(count.payload)
        setCountId(count.payload)
    }

    useEffect(() => onGetCountry(id),[])
   
    return(
        <div>
        <div className="container">
             <img className="flagg" src={`${counId.flag}`} alt="bandera" />
             <h2 className="el">{counId.name}</h2>
             <h3 className="el">Capital: {counId.capital}</h3>
             <h4 className="el">Continent: {counId.continent}</h4>
             <h4 className="el">Subregion: {counId.subregion}</h4>
             <h4 className="el">Population: {counId.population}</h4>
             <h4 className="el">Area: {counId.area}</h4>
             <h3 className="el">{counId.id}</h3>
        </div>
        <div>
        {activities && activities.map(a => {
                return <ActivityCard
                id={a.id}
                name = {a.name}
                durations = {a.durations}
                dificult = {a.dificult}
                season = {a.season}
                country = {a.country}
                key={a.id}
                />
            })}
        </div>
        </div>
    )
}

// const mapDispatchToProps = (dispatch) =>{
//     return {getCountryById : (e) => dispatch(getCountryById(e))}
// }


export default Country;