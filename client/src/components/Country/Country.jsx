import React, { useEffect, useState } from "react";
import { getAllActivity, getCountryById } from "../../redux/action";
import { useParams } from 'react-router-dom';
// import {connect} from "react-redux"
import './Country.css'
import { connect, useDispatch, useSelector } from "react-redux";
import ActivityCard from "../Activities/ActivityCard";


const Country = () => {
    const {id} = useParams()
    console.log(id)

    let [counId, setCountId] = useState([])
    const {activities} = useSelector(state => state)
    const {detail} = useSelector(state => state)

    console.log(detail.tourims)
 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountryById(id))
        dispatch(getAllActivity())
    },[])
   
    return(
        <div className="all-container">
        <div className="container">
             <img className="flagg" src={`${detail.flag}`} alt="bandera" />
             <h2 className="el">{detail.name}</h2>
             <h3 className="el">Capital: {detail.capital}</h3>
             <h4 className="el">Continent: {detail.continent}</h4>
             <h4 className="el">Subregion: {detail.subregion}</h4>
             <h4 className="el">Population: {detail.population}</h4>
             <h4 className="el">Area: {detail.area}</h4>
             <h3 className="el">{detail.id}</h3>
        </div>
        <div>
        {detail.tourims && detail.tourims.length>0 ? detail.tourims.map(a => {
                return <ActivityCard
                id={a.id}
                name = {a.name}
                durations = {a.durations}
                dificult = {a.dificult}
                season = {a.season}
                country = {[detail]}
                key={a.id}
                />
            }): <h1 >Sin activididades</h1>}
           
        </div>
        </div>
    )
}

// const mapDispatchToProps = (dispatch) =>{
//     return {getCountryById : (e) => dispatch(getCountryById(e))}
// }


export default Country;