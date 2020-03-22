import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import PizzaBulder from './containers/pizzaBuilder/PizzaBuilder';
import ThankYou from './components/thankYou/thankYou';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {
        genTitle: "PIZZA FACTORY",
        genImg: "./assets/genImg.png",
        genColor: 'red'
      },
      categories: [
        {
          id: '1',
          label: 'chesse',
          imgSrc: 'chesse.png',
          ingredients: [
            {
              id: '1',
              ingName: 'Mozzarella',
              price: 3,
              logo: 'mozz.jpg',
              imgOnPizza: 'mozz.png'
            },
            {
              id: '2',
              ingName: 'SuliGuli',
              price: 4,
              logo: 'sulik.jpg',
              imgOnPizza: 'sulik.png'
            },
            {
              id: '3',
              ingName: 'Rokfor',
              price: 5,
              logo: 'rokfor.jpg',
              imgOnPizza: 'rokfor.png'
            }
          ]
        },

        {
          id: '2',
          label: 'veg',
          imgSrc: 'veg.png',
          ingredients: [
            {
              id: '1',
              ingName: 'pepper',
              price: 3,
              logo: 'pepper.jpg',
              imgOnPizza: 'pepper.png'
            },
            {
              id: '2',
              ingName: 'mush',
              price: 4,
              logo: 'mush.jpg',
              imgOnPizza: 'mush.png'
            },
            {
              id: '3',
              ingName: 'tomato',
              price: 5,
              logo: 'tomato.jpg',
              imgOnPizza: 'tomato.png'
            }
          ]
        },
        {
          id: '3',
          label: 'meat',
          imgSrc: 'meat.png',
          ingredients: [
            {
              id: '1',
              ingName: 'bacon',
              price: 3,
              logo: 'bacon.jpg',
              imgOnPizza: 'bacon.png'
            },
            {
              id: '2',
              ingName: 'pepperoni',
              price: 4,
              logo: 'pepperoni.jpg',
              imgOnPizza: 'pepperoni.png'
            },
            {
              id: '3',
              ingName: 'chicken',
              price: 5,
              logo: 'chicken.jpg',
              imgOnPizza: 'chicken.png'
            }
          ]
        }
      ]
    }
  }

  
  render() {
    return ( 
      <div className="main">
        <Switch>
          <Route path="/" component={HomePage}/>
          <Route path="/pizzaBuilder" component={PizzaBulder}/>
          <Route path="/thankYou" component={ThankYou}/>
        </Switch>
      </div>
     );
  }
}

export default App;
