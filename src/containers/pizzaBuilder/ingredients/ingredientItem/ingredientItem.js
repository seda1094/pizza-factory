import React from 'react';
import './ingredientItem.css';

const IngredientItem = ({ings}) => {
    return (
        <div className="ing_item_block">
            <div className="ing_image">
                <img src={ings.logo} alt="" />
            </div>
            <div className="ing_label">
                <p className="label">{ings.ingName}</p>
                <p className="price">{ings.price}</p>
            </div>
        </div>
    );
}

export default IngredientItem;