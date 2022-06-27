import React from "react";
// import Countries from "../countries/countries.jsx";
import {useState} from "react"
import { useDispatch} from "react-redux";
import {getCountry} from "../../redux/action";
import "./Search.css"
// import CountryCard from "../Country/countryCard";
// import { Link,Route } from "react-router-dom";



const Search = () => {
    let [input, setInput] = useState("")    


    const handleChange = (e) =>{
        // console.log(e.target.value)
        setInput(e.target.value)
    }
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(getCountry(input))
        setInput('')
    }


    
    return(
        <div>
            <form>
                <input type="text"  placeholder="paises..." 
                onChange={(e) => handleChange(e)} value={input} />
                <button id="busqueda" type='submit' onClick={(e) => handleSubmit(e)} >BUSCAR</button>
            </form>
        </div>
    )
}



export default Search;