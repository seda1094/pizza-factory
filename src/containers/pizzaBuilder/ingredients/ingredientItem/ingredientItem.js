import React from 'react';
import './ingredientItem.css';

const IngredientItem = ({ings, setStateOfPizza}) => {
    return (
        <div className="ing_item_block" onClick = {()=>setStateOfPizza(ings.imgOnPizza)}>
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