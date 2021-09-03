import React from 'react';
import './cardContainer.css';

const CardContainer = (props) => {
    return (
        <div className="px-48 py-44" >
            <div className="absolute flex h-80 w-full z-10 rotate-45">
                
                    {
                        props.cards.map( (element, index) => {
                            return index < 4 ? element : null;
                        })
                    }
                <button class="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none ... z-10">
                Hover me
            </button>

            </div>
            <div className="absolute flex h-80 w-full z-0 ">
                
                    {
                        props.cards.map( (element, index) => {
                            return index > 3 ? element : null;
                        })
                    }
            
            </div>
            
        </div>
        
    )
}

export default CardContainer
