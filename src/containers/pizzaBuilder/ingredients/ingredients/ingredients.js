import React from 'react';
import './ingredients.css'
import IngredientItem from '../ingredientItem/ingredientItem';

const Ingredients = ({selectedCatIngs}) => {
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
                                    selectedCatIngs.ingredients.map(ings=><IngredientItem key={ings.id} ings={ings}/>)
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