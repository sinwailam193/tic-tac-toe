"use client";
import './Box.css'

function Box({value, handleClick}){
    const style = value === 'X' ? "box x" : "box o"
    return <button className={style} onClick={handleClick} value={value} >{value}</button>
}

export default Box;