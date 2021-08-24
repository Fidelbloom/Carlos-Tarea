import React from 'react';
import './card.css'

const Card = (props) => {


    return (
        <div className="w-1/6 h-full bg-gray-200 ml-5 shadow-lg rounded-lg">
            {props.number}
        </div> 
    )
}

export default Card