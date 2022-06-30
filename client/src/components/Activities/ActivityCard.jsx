import React, { useState } from "react";
import "./card.css";
import { deleteActivity } from "../../redux/action";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ActivityCard = ({name,dificult,season,durations,country,id}) => {

    const dispatch = useDispatch()
    const [message, setMesagge] = useState(false)
    console.log(country)

    const openMessage = () => {
        setMesagge(true) 
    }
    const onClose = () =>{
        // console.log(id)
        dispatch(deleteActivity(id))
        setMesagge(false)
    }

    if(message){
        return(<div className="message">
            <p>seguro que desea eliminar esta actividad?</p>
            <button id="btn-delete" onClick={onClose}>delete</button>
        </div>)
    }

    return(
        <div className="cards">
            <div className="namee">
            <h3>{name}</h3>
            </div>
            <div className="one">

            <p>dificult: {dificult}</p>
            <p>season: {season}</p>
            <p>durations: {durations}</p>
            </div>
            <div className="fl">
            {
                country && country.map((e,i) => <Link  to={`/countries/${e.id}`} key={i}><img src={e.flag} height="30px" /></Link>)
            }
            </div>
            <button className="delete" onClick={openMessage}>delete</button>
        </div>
    )
}


export default ActivityCard;
// falta mostrar los paises que tiene la actividad