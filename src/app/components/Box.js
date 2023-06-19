"use client";
import './Box.css'

function Box({value, handleClick}){
    return <button className="box" onClick={handleClick} value={value} >{value}</button>
}

export default Box;