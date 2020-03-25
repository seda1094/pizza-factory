import React from 'react'
import './HomePage.css';


const HomePage = (props) => {
    function goToPizzaBuilder(){
        props.history.push("/pizzaBuilder");
    }
    return (
        <div fluid className="main_block">
            <div className="app_title_block">
                <h1 className="app_title"><span className="genTitle">PIZZA</span><br/><span className="subTitle">FACTORY</span></h1>
            </div>
            <div className="app_image_block">
                <img className="app_image" src="https://i.ya-webdesign.com/images/pizza-clipart-pizaa-9.png"/>
            </div>
            <div className="app_create-button_block">
                <button onClick={goToPizzaBuilder}>make</button>
            </div>
        </div>
    );
}

export default HomePage;