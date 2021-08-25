import React from 'react';
import './card.css'

const Card = (props) => {


    return (
        <div className="relative w-1/6 h-1/3 bg-gray-200 m-2 shadow-lg rounded-lg">
            {props.number}
        </div> 
    )
}

export default Card