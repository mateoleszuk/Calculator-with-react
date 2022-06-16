import React from "react";
import '../stylesheet/botonClear.css'

const BotonClear = (props) =>(
    <div className='boton-Clear'
    onClick ={props.manejarClear}>
        {props.children}
    </div>
)

export default BotonClear;