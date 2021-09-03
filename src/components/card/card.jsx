import React from 'react';
import './card.css'

const Card = (props) => {


    return (
        <div className="relative w-1/6 h-1/3 m-2 shadow-lg rounded-lg bg-purple-100">
            {props.number}
        </div> 
    )
}

export default Card