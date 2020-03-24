import React from 'react';
import './ingredients.css'
import IngredientItem from '../ingredientItem/ingredientItem';

const Ingredients = (props) => {
    console.log(props.selectedCatIngs);
    // let y = selectedCatIngs[0].ingredients
    // console.log(y);
    
    return (
        <div className="row row_ings">
            <div className="title_ing_block">
                <h1>ingredients</h1>
            </div>
            <div className="option_blocks">
                <div className="option_ings_blocks">
                    <div className="option_ings_blocks">
                        <div className="ing_block">
                            <div className="add_div">
                                {
                                  props.selectedCatIngs.length !== 0 ? props.selectedCatIngs.ingredients.map(ings=><IngredientItem key={ings.id} ings={ings} setStateOfPizza={props.setStateOfPizza}/>) : <h1>nooo</h1> 
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ingredients;