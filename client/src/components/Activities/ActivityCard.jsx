import React, { useState } from "react";
import "./card.css";
import { deleteActivity } from "../../redux/action";
import {useDispatch} from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ActivityCard = ({name,dificult,season,durations,country,id}) => {

    const dispatch = useDispatch()


    const onClose = (id) => {
        dispatch(deleteActivity(id))
        console.log(id)
    }


    // useEffect(()=>{
    //     dispatch(get)
    // })
    

    return(
        <div className="cards">
            <button onClick={() => onClose(id)}>X</button>
            <h3>{name}</h3>
            <p>dificult: {dificult}</p>
            <p>season: {season}</p>
            <p>durations: {durations}</p>
            <Link to={`/countries/${country}`}><p>{country}</p></Link>
        </div>
    )
}


export default ActivityCard;
// falta mostrar los paises que tiene la actividad