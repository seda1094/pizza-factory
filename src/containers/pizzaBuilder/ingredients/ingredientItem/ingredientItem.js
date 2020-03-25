import React from 'react';
import './ingredientItem.css';

const IngredientItem = ({ings, setStateOfPizza}) => {
    function blbl() {
        console.log("bblblb");
        
    }
    return (
        <div className="ing_item_block">
            <div className="ing_image">
                <img src={ings.logo} alt="" onClick = {()=>setStateOfPizza(ings)}/>
                <div className="close" onClick = {blbl}>
                    {/* TODO connect from assets */}
                    <img src="https://image.flaticon.com/icons/svg/1828/1828665.svg" alt=""/>
                </div>
            </div>

            <div className="ing_label" onClick = {()=>setStateOfPizza(ings)}>
                <p className="label">{ings.ingName}</p>
                <p className="price">{ings.price}</p>
            </div>
        </div>
    );
}

export default IngredientItem;