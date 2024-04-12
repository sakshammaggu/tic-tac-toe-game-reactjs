import React from 'react'
import { useState } from 'react'

// passing value as prop
const SquareBoard = () => {
    const [value, setValue]=useState(null);

    const handleClick=()=>{
        setValue("X");
    }

    return (
        <button className="square" onClick={handleClick}>{value}</button>
    )
}

export default SquareBoard;