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
        country:"",
        id:""
    })
    
    
    
    let {countriesShow} = useSelector(state => state)
    const dispatch = useDispatch()
    
    function handleOnChange(event){
        setActivity({
            ...activity,
            [event.target.name] : event.target.value
        })
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createActivity(activity))
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
                <select name="country" onChange={handleOnChange} value={activity.country}>
                    {countriesShow.map(c => {
                        return <option key={c.id} value={c.id}>{c.name}</option>
                    })}
                </select>
                <button type="submit" id="agr">Agregar</button>
                </div>
            </form>
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