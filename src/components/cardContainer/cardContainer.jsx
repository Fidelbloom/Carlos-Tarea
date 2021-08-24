import React from 'react';
import './cardContainer.css';

const CardContainer = (props) => {
    return (
        <div className="h-full w-full">
            <div className="absolute h-full w-full z-10">
                <div className="flex h-full w-full">
                    {
                        props.cards.map( (element, index) => {
                            return index < 4 ? element : null;
                        })
                    }
                </div>
                
            </div>

            <div className="absolute h-full w-full z-0">
                <div className="flex h-full w-full">
                    {
                        props.cards.map( (element, index) => {
                            return index > 3 ? element : null;
                        })
                    }
                </div>
            </div>
            {/* {
                props.cards.map( (element) => {
                    return element
                })
            } */}
        </div>
        
    )
}

export default CardContainer