import React from 'react';
import './cardContainer.css';

const CardContainer = (props) => {
    return (
        <div className="px-48 py-44">
            <div className="absolute flex h-screen w-full z-10 ">
                
                    {
                        props.cards.map( (element, index) => {
                            return index < 4 ? element : null;
                        })
                    }
                
            </div>

            <div className="absolute flex h-screen w-full z-0">
                
                    {
                        props.cards.map( (element, index) => {
                            return index > 3 ? element : null;
                        })
                    }
            
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