import React from "react";
import "./Pagination.css"

export default function Paginacion({page,countriesPerPage,totalCountries}){
    const numPage = [];
    if(totalCountries <= 10){
        return (<div></div>)
    }else {
        for(let i=0; i<= Math.ceil(totalCountries/countriesPerPage); i++ ){
            numPage.push(i)
        }
        return  <nav>
            <ul>
                {numPage.map((arg) => {
                    return <button className="numbers" key={arg} onClick={() => page(arg)}>{arg}</button>
                })}
            </ul>
        </nav>
    }
}