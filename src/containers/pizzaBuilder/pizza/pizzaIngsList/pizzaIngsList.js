import React from 'react';
import './pizzaIngsList.css';


const PizzaIngsList = ({ingsOfPizza}) => {
    return ( 
        <div className="order_block_list">
                <ul>
                    {
                        ingsOfPizza.length ? ingsOfPizza.map(ing => <li><span>x{ing.count} </span>{ing.ingName}</li>) : <p>no ing</p>
                    }
                </ul>
              </div>
     );
}
 
export default PizzaIngsList;