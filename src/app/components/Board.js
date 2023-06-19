"use client";

import { useState } from "react";
import Box from "./Box";

function Board({data}){
    const [value, setValue] = useState(null)

    const handleBoxClick = () => {
        setValue('X');
    }

    const renderedBox = data.map((value,index) => {
        return <Box key={index} value={index} handleClick={handleBoxClick}></Box>
    });
    return <div>{renderedBox}</div>
}

export default Board;