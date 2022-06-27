import React from "react";
import { NavLink } from "react-router-dom";
// import "./images.png"
import Search from "../search/search";
// import Countries from "../countries/countries.jsx"
import brujula from "./norte.png";
import FilterContinent from './../Countries/FilterContinent'
import './NavBar.css';


const NavBar = ()=>{
    return(
        <div className='container-nav'>
            <NavLink to="/">
            {/* <span className="navbar-brand">
          <img  src={brujula} width="50" height="50"  className="d-inline-block align-top radius-20px" alt="" />
        </span> */}
        <div id="logo">
            <img src={brujula} width="50" height="50" alt="" />
        </div>
            </NavLink>
            <FilterContinent/>
            <NavLink to="/countries" className="links">COUNTRIES</NavLink>
            <NavLink to="/activity" className="links">ACTIVITY</NavLink>
            <NavLink to = "/activity/create" className="links">CREATE ACTIVITY</NavLink>
            <div id="search">
            <Search/>
            </div>
        </div>
    )
}
export default NavBar;