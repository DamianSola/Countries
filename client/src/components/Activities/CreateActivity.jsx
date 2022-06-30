import React, { useEffect, useState } from "react";
import { createActivity, getAllCountries } from "../../redux/action";
import { connect, useDispatch, useSelector } from "react-redux"; 
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./CreatedActivity.css"



const CreateActivity = () =>{

    const [activity, setActivity] = useState({
        name:"",
        dificult:"",
        durations:"",
        season:"",
        country:[],
        id:""
    })

    const [onlyCountries, setOnlyCountries] = useState([])
    const {countries} = useSelector(state => state)
    // console.log(countries[0])
    
    
    let {countriesShow} = useSelector(state => state)
    const dispatch = useDispatch()

    
    function handleOnChange(event){
        console.log(event.target.value)
        if(event.target.name === "country"){
            if(!activity.country.includes(event.target.value)){
            const filt = countries.find(e => e.id === event.target.value)
            setActivity({
                ...activity,
                [event.target.name]: activity.country.concat(event.target.value)
            })
            setOnlyCountries([...onlyCountries, filt])}
            console.log(onlyCountries)
        }else{
            setActivity({
                ...activity,
                [event.target.name] : event.target.value
            })
        }
        console.log(activity.country)
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createActivity(activity))
        alert("nueva actividad creada")
        setActivity({})
    }

    const deleteCountry = (e) => {
        let id = e.target.value
        console.log(onlyCountries.map(e => e.id))
        setOnlyCountries([...onlyCountries.filter(e => e.id !== id)])
        setActivity({
            ...activity,
            country: [...activity.country.filter(e => e !== id)]
        })
        console.log(onlyCountries)
    }


    useEffect(()=>{
        if(countriesShow.length < 250) dispatch(getAllCountries());
    },[])
    
    
    
    return(
        <div className="contt">
            <div><NavBar/></div>
            <div className="container-creator">
            <form onSubmit={handleSubmit}>
                <div className="elemet">
                <label htmlFor="">activity: </label>
                <input type="text" name="name" onChange={handleOnChange} value={activity.name}/>
                </div>
                <div className="elemet">
                <label htmlFor="">durations: </label>
                <input type="text" name="durations" onChange={handleOnChange} value={activity.durations}/>
                </div>
                <div className="elemet">
                <label htmlFor="">dificult: </label>
                <input type="integer" name="dificult" onChange={handleOnChange} value={activity.dificult}/>
                </div>
                <div className="elemet">
                <label htmlFor="">season: </label>
                <input type="text" name="season" onChange={handleOnChange} value={activity.season}/>
                </div>
                <div className="elemet">
                <label>Elegir Pais: </label>
                {/* <input list="paises" /> */}
                <select name="country" onChange={handleOnChange} value={activity.country} multiple>
                    {countriesShow.map(c => {
                        return <option key={c.id} value={c.id}>{c.name}</option>
                    })}
                </select>
                <button type="submit" id="agr">Agregar</button>
                </div>
            </form>
            <div className="showcountry">

            {onlyCountries && onlyCountries.map(e => {
                return(
                    <div key={e.id} className="show">
                        <img src={e.flag} width="70px" />
                        <button id="delete-count" onClick={deleteCountry} value={e.id}>x</button>  
                    </div>
                )
            })}
            </div>
            </div>
        </div>
    )
}


// const mapStateToProps = (state) =>{
//     return  {
//         activities : state.activities
//     }
// } 


// 
export default (CreateActivity);