import React from 'react';
import './pizza.css';

const Pizza = ({stateOfPizza}) => {
    return (
        <div className="pizza_block">
            <div className="pizza">
                {stateOfPizza.map(imageState => <img src={imageState.imgOnPizza} alt="" key = {imageState} className="ss" /> )}
            </div>
        </div>
    );
}

export default Pizza;