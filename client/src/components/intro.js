import React from 'react'
import {Link} from "react-router-dom"
import "./intro.css"


const Intro = () => {
    return(
        <div className='cont-intro'>
            {/* <Link to="/countries" ><button id='btn'>ABRIR APP</button></Link> */}
            <div className='texto'>
                <Link to="/countries">
                    <img src="http://assets.stickpng.com/images/589c884e64b351149f22a84f.png"  id='btn' />
                </Link>
                <h4>Simple Page Aplication sobre paises y turismo.</h4>
                <p>Hola! Soy Damian Sola y esta es la mini app que hice para mi proyecto individual en Henry.</p>
                <p>Las app consiste en mostrar cualquiera de los 250 paises del mundo y crear una actividad turista sobre ellos.</p>
            </div>
        </div>
    )
}

export default Intro;