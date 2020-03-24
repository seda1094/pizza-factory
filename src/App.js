import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import PizzaBulder from './containers/pizzaBuilder/PizzaBuilder';
import ThankYou from './components/thankYou/ThankYou';


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
          imgSrc: 'https://pngimage.net/wp-content/uploads/2018/05/cheese-clipart-png.png',
          ingredients: [
            {
              id: '1',
              ingName: 'Mozzarella',
              price: 3,
              logo: 'https://salvo1968.co.uk/media/catalog/product/cache/2c83c4d31fd0090674a9637ee17e02e6/c/a/castelli_mozzarellacherryballs125g_main_image_1.jpg',
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
          label: 'vegetagle',
          imgSrc: 'https://c7.hotpng.com/preview/108/382/328/junk-food-vegetable-tooth-pathology-clip-art-vector-vegetables.jpg',
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
          imgSrc: 'https://aealbert.com/images/meat-clipart-2.png',
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
        },
        {
          id: '4',
          label: 'meat',
          imgSrc: 'https://www.pngkey.com/png/full/864-8640714_indian-cuisine-spice-herb-clip-art-star-spices.png',
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
        ,
        {
          id: '4',
          label: 'herbs',
          imgSrc: 'https://webstockreview.net/images/crops-clipart-herb-garden-2.png',
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
          <Route exact path="/" component={HomePage}/>
          <Route path="/pizzaBuilder" products={this.state.categories} component={PizzaBulder}/>
          <Route path="/thankYou" component={ThankYou}/>
        </Switch>
      </div>
     );
  }
}

export default App;
