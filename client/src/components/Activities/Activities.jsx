import React, { useEffect} from "react";
import { deleteActivity, getAllActivity } from "../../redux/action";
import ActivityCard from "./ActivityCard"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import './Activities.css';

const Activities = () =>{

    // const [activity, setActivity] = useState([])

    const dispatch = useDispatch()
    const {activities} = useSelector(state => state)


    useEffect(()=>{
        dispatch(getAllActivity())
    },[dispatch])


    if(activities.length !== 0){
        return(
            <div className="container">
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
        )
    }else return (
        <div>
            <h1>No hay actividades turisticas</h1>
            <NavLink to = "/activity/create"><button>Crear actividad</button></NavLink>
        </div>
    )
}

export default Activities;