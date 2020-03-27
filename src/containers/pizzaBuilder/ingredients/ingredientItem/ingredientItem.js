import React, { useState, useEffect, Component } from 'react';
import './ingredientItem.css';
import desableClose from '../../../../assets/img/disClose.png'
import activeClose from '../../../../assets/img/close.png'
// { ings, setStateOfPizza, deleteIng, ingsOfPizza }
class IngredientItem extends Component {

    selectIngredient = () => {
        this.props.setStateOfPizza(this.props.ings)
    }

    render() {
        return (
            <div className="ing_item_block">
                <div className="ing_image">
                    {/* Resolve x-out from clickable zone */}
                    <img src={this.props.ings.logo} alt="" onClick={this.selectIngredient} />
                    {
                        this.props.ingsOfPizza.length ?
                            this.props.ingsOfPizza.map(ingred => {
                                if (ingred === this.props.ings) {
                                    return (<div className="close">
                                        <img src="https://image.flaticon.com/icons/svg/1828/1828665.svg" onClick={() => this.props.deleteIng(this.props.ings)} alt="" />
                                    </div>)
                                }

                            }) : null
                    }

                </div>
                <div className="ing_label" onClick={this.props.selectIngredient}>
                    <p className="label">{this.props.ings.ingName}</p>
                    <p className="price">{this.props.ings.price}$</p>
                </div>
            </div>
        );
    }
}

export default IngredientItem;