import React from "react";
import './card.css'
import {NavLink} from "react-router-dom"

const CountryCard = ({name,flag,continent,capital,subregion,population,area,id}) =>{
    return(
        <div className="card">
            <img className="flag" src={`${flag}`} alt="bandera" />
            <NavLink to={`/countries/${id}`} className="name">
            <h3 >{name}</h3>
            </NavLink>
            <h5>{continent}</h5>
        </div>
    )
}

export default CountryCard;