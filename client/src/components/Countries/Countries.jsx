import React, { useState } from "react";
import {getAllCountries,getCountryByContinent} from "../../redux/action.js";
import CountryCard from "../Country/countryCard";
import { useEffect } from "react";
import './countries.css'
import Loading from "./Loading.jsx";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar.jsx";
import Paginacion from "./Paginacion.jsx";


export const Countries = () =>{

    // getAllcountries();
    // const [count, setCount] = useState([])
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch() 
    const {countriesShow} = useSelector(state => state)
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(10)

    const indexUltCountry = currentPage*countriesPerPage;
    const indexPrimerCountry = indexUltCountry-countriesPerPage;
    const currentCountry = countriesShow.slice(indexPrimerCountry,indexUltCountry);

    const page = (numPage) =>{
        setCurrentPage(numPage)
    }  
    console.log(currentCountry)



    useEffect(() => {
        setLoading(false)
        dispatch(getAllCountries())
    },[dispatch])


    
    return (
        <div>
            <NavBar/>
            {loading && <Loading/>}
            <Paginacion 
            countriesPerPage= {countriesPerPage}
            totalCountries= {countriesShow.length}
            page = {page}/>
            {/* <div><input type="text" placeholder="Buscar Pais..." value={search} onChange={onSearchChange}/></div> */}
            <div className="countries-container">
            { currentCountry && currentCountry.map(c => {
                return <CountryCard
                    flag= {c.flag}
                    name= {c.name}
                    continent= {c.continent}
                    capital= {c.capital}
                    subregion= {c.subregion}
                    population= {c.population}
                    area= {c.area}
                    id={c.id}
                    key= {c.id?c.id:"NNN"}
                />
            })}
            </div>
            <Paginacion 
            countriesPerPage= {countriesPerPage}
            totalCountries= {countriesShow.length}
            page = {page}/>
            {/* {loading && <Loading/>} */}
        </div>
    )   

   
}



export default Countries;