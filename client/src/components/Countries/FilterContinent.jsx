import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {filterByContinent} from "./../../redux/action"
import "./FilterCont.css"

const FilterContinent = () => {

    const dispatch = useDispatch();

    const onChangeContinent = (e) => {
        dispatch(filterByContinent(e.target.value))
    }

    return(
        <div>
            <select onChange={(e) => onChangeContinent(e)} className="container-filter">
                <option value='all' className="container-filter">Continent</option>
                <option value='Africa' className="container-filter">Africa</option>
                <option value='Americas' className="container-filter">America</option>
                <option value='Asia' className="container-filter">Asia</option>
                <option value='Europe' className="container-filter">Europa</option>
                <option value='Oceania' className="container-filter">Oceania</option>
                <option value='Polar' className="container-filter">Polo</option>
            </select>
        </div>
       
    )
}

export default FilterContinent;