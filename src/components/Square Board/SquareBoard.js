import React from 'react'
import { useState } from 'react'

// passing value as prop
const SquareBoard = ({value, onClick}) => {
    return (
        <button className="square" onClick={onClick}>{value}</button>   /* onClick={handleClick} */
    )
}

export default SquareBoard;