import React from 'react';
import './ingredientItem.css';

const IngredientItem = ({ings, setStateOfPizza, setPrice}) => {
    console.log("Hello");
    
    function selectIngredient() {
        setStateOfPizza(ings)
        setPrice(ings.price)
    }
    return (
        <div className="ing_item_block">
            <div className="ing_image">
                {/* Resolve x-out from clickable zone */}
                <img src={ings.logo} alt="" onClick = {selectIngredient}/>
                <div className="close">
                    {/* TODO connect from assets */}
                    <img src="https://image.flaticon.com/icons/svg/1828/1828665.svg" alt=""/>
                </div>
            </div>

            <div className="ing_label" onClick = {selectIngredient}>
                <p className="label">{ings.ingName}</p>
                <p className="price">{ings.price}</p>
            </div>
        </div>
    );
}

export default IngredientItem;