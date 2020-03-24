import React, { Component } from 'react'
import './PizzaBuilder.css';
import Categories from './categories/categories/categories';
import Ingredients from './ingredients/ingredients/ingredients';

class PizzaBulder extends Component {
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
                    logo: 'https://sc01.alicdn.com/kf/UT8t9sSXwdXXXcUQpbXM.png',
                    imgOnPizza: 'https://i.ibb.co/BL6zXZh/Drawing-5.png'
                  },
                  {
                    id: '2',
                    ingName: 'Ricotta',
                    price: 4,
                    logo: 'https://menstrual-cycle-calculator.com/wp-content/uploads/2018/05/swiss-cheese-min.png',
                    imgOnPizza: 'https://i.ibb.co/Q694kgb/Drawing-1.png'
                  },
                  {
                    id: '3',
                    ingName: 'Rokfor',
                    price: 5,
                    logo: 'https://clipartart.com/images/blue-cheese-clipart-1.png',
                    imgOnPizza: 'https://i.ibb.co/Q694kgb/Drawing-1.png'
                  }
                ]
              },
              {
                id: '2',
                label: 'vegetagle',
                imgSrc: 'https://www.clipartqueen.com/image-files/lots-of-vegetables.png',
                ingredients: [
                  {
                    id: '1',
                    ingName: 'pepper',
                    price: 3,
                    logo: 'https://i.pinimg.com/originals/2d/77/c3/2d77c396afa27d5363678e04671ce97d.png',
                    imgOnPizza: 'https://i.ibb.co/RQfX5k5/peper.png'
                  },
                  {
                    id: '2',
                    ingName: 'mushroom',
                    price: 4,
                    logo: 'https://webstockreview.net/images/mushroom-clipart-edible-mushroom.png',
                    imgOnPizza: 'https://i.ibb.co/PCDtHBt/Drawing-4.png'
                  },
                  {
                    id: '3',
                    ingName: 'tomato',
                    price: 5,
                    logo: 'https://i.pinimg.com/originals/2d/77/c3/2d77c396afa27d5363678e04671ce97d.png',
                    imgOnPizza: 'https://i.ibb.co/PCDtHBt/Drawing-4.png'
                  },
                  {
                    id: '4',
                    ingName: 'onion',
                    price: 5,
                    logo: 'https://clipartstation.com/wp-content/uploads/2018/10/onion-clipart-png-1.png',
                    imgOnPizza: 'https://i.ibb.co/VY0Zm8h/onion.png'
                  },
                  {
                    id: '5',
                    ingName: 'corn',
                    price: 5,
                    logo: 'https://i.pinimg.com/originals/7d/62/bc/7d62bc0e381590a40c13dafcdf7b6594.png',
                    imgOnPizza: 'https://i.ibb.co/PCDtHBt/Drawing-4.png'
                  },
                  {
                    id: '6',
                    ingName: 'olivie',
                    price: 5,
                    logo: 'https://lh3.googleusercontent.com/proxy/COLaL_xYKxO3rh0LVWCRazP_WeJsId6emOXqrvsQvov6-3b-4qZlNxGX73S4fCMOiVWJTuIho2hiBYNWJR6Ay_stOlF72aWco3A',
                    imgOnPizza: 'https://i.ibb.co/RQfX5k5/peper.png'
                  },
                  {
                    id: '7',
                    ingName: 'chili',
                    price: 5,
                    logo: 'https://clipartstation.com/wp-content/uploads/2017/11/chili-clipart.png',
                    imgOnPizza: 'https://i.ibb.co/PCDtHBt/Drawing-4.png'
                  },

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
                    logo: 'https://pngimage.net/wp-content/uploads/2018/05/bacon-clipart-png-1.png',
                    imgOnPizza: 'https://i.ibb.co/zVkL69R/Drawing-3.png'
                  },
                  {
                    id: '2',
                    ingName: 'pepperoni',
                    price: 4,
                    logo: 'https://lh3.googleusercontent.com/proxy/bnM9CXZQ4cdRU_aYcJ3Yt2o8V4enjqK8jzZElCcHstJI4-XBN3mnuKbe-F0lfbQyPEt0zdbNW1wX5KoSLhTnAbmKDMfgsE4',
                    imgOnPizza: 'https://i.ibb.co/zVkL69R/Drawing-3.png'
                  },
                  {
                    id: '3',
                    ingName: 'chicken',
                    price: 5,
                    logo: 'https://webstockreview.net/images/clipart-chicken-roasted-chicken-2.png',
                    imgOnPizza: 'https://i.ibb.co/zVkL69R/Drawing-3.png'
                  },
                  {
                    id: '4',
                    ingName: 'beef',
                    price: 5,
                    logo: 'https://webstockreview.net/images/beef-clipart.png',
                    imgOnPizza: 'https://i.ibb.co/DfswmdJ/beef.png'
                  },
                  {
                    id: '5',
                    ingName: 'ham',
                    price: 5,
                    logo: 'https://pngimage.net/wp-content/uploads/2018/06/ham-clipart-png-4.png',
                    imgOnPizza: 'https://i.ibb.co/zVkL69R/Drawing-3.png'
                  },
                  {
                    id: '6',
                    ingName: 'fish',
                    price: 5,
                    logo: 'https://lizzyfishandchips.co.uk/wp-content/uploads/2019/08/battered-fish.png',
                    imgOnPizza: 'https://i.ibb.co/DfswmdJ/beef.png'
                  }
                ]
              },
              {
                id: '4',
                label: 'spices',
                imgSrc: 'https://www.pngkey.com/png/full/864-8640714_indian-cuisine-spice-herb-clip-art-star-spices.png',
                ingredients: [
                  {
                    id: '1',
                    ingName: 'paper',
                    price: 3,
                    logo: 'https://www.ade-themes.com/wp-content/uploads/revslider/theButcherHome/spices.png',
                    imgOnPizza: 'https://i.ibb.co/p3M5pbt/black-paper.png'
                  },
                  {
                    id: '2',
                    ingName: 'anise',
                    price: 4,
                    logo: 'https://i.pinimg.com/originals/22/68/6f/22686f45be709b80b41b7546fedb06b3.png',
                    imgOnPizza: 'pepperoni.png'
                  },
                  {
                    id: '3',
                    ingName: 'peper',
                    price: 5,
                    logo: 'https://lh3.googleusercontent.com/proxy/xb43DYOuXshd5TG4SF2Y3w4s32yeslN_5u8uxa5wFPObDqU2vK8dCBmeUKLgYPiRNzfFHu1nRUUpI3c4kX5bi5W1GNfbRdlbH0aoWpTcZW80HJ7rP1nLclHhJg',
                    imgOnPizza: 'https://i.ibb.co/jg9g0Vx/redpepr.png'
                  },
                  {
                    id: '4',
                    ingName: 'southern',
                    price: 5,
                    logo: 'https://www.southernstylespices.com/wp-content/uploads/2019/02/turmeric-1-e1555245553854.png',
                    imgOnPizza: 'chicken.png'
                  }
                ]
              },
              {
                id: '5',
                label: 'herbs',
                imgSrc: 'https://webstockreview.net/images/crops-clipart-herb-garden-2.png',
                ingredients: [
                  {
                    id: '1',
                    ingName: 'dill',
                    price: 3,
                    logo: 'https://cdn1.iconfinder.com/data/icons/fruits-n-vegetables-colored-gradient/128/dill-512.png',
                    imgOnPizza: 'https://i.ibb.co/R92XhBJ/Drawing-2.png'
                  },
                  {
                    id: '2',
                    ingName: 'arugula',
                    price: 4,
                    logo: 'https://cdn.clipart.email/b7811a2839308633c61491df25186899_spinach-clipart-clip-art-picture-236126-spinach-clipart_304-300.png',
                    imgOnPizza: 'https://i.ibb.co/R92XhBJ/Drawing-2.png'
                  },
                ]
              }
            ],
            selectedCatIngs: {
                id: '1',
                label: 'chesse',
                imgSrc: 'https://pngimage.net/wp-content/uploads/2018/05/cheese-clipart-png.png',
                ingredients: [
                  {
                    id: '1',
                    ingName: 'Mozzarella',
                    price: 3,
                    logo: 'https://sc01.alicdn.com/kf/UT8t9sSXwdXXXcUQpbXM.png',
                    imgOnPizza: 'https://i.ibb.co/BL6zXZh/Drawing-5.png'
                  },
                  {
                    id: '2',
                    ingName: 'Ricotta',
                    price: 4,
                    logo: 'https://menstrual-cycle-calculator.com/wp-content/uploads/2018/05/swiss-cheese-min.png',
                    imgOnPizza: 'https://i.ibb.co/Q694kgb/Drawing-1.png'
                  },
                  {
                    id: '3',
                    ingName: 'Rokfor',
                    price: 5,
                    logo: 'https://clipartart.com/images/blue-cheese-clipart-1.png',
                    imgOnPizza: 'https://i.ibb.co/Q694kgb/Drawing-1.png'
                  }
                ]
            }
          }       
    }

    selectCat=(id)=>{
        const selectedCat = this.state.categories.filter(cat=>cat.id === id)
        this.setState(prState=>{
            console.log("Sdfsdf");
            // console.log(prState);
            // return {...prState, selectedCatIngs: selectedCat}
        })
    }

    render() {
        return (
            <div className="main_block">
                <div className="section section_options">
                    <Categories categories={this.state.categories} selectCat={this.selectCat}/>
                    <Ingredients selectedCatIngs={this.state.selectedCatIngs}/>
                </div>
                <div className="section section_pizza">
                    <div className="total_price_block">
                        <div className="total_price"></div>
                    </div>
                    <div className="main_pizza_block">
                        <div className="pizza_block">
                            <div className="pizza">
                                <img src="https://i.ibb.co/cLdL2JV/Drawing.png" alt="" className="ss"/>
                                <img src="https://i.ibb.co/PCDtHBt/Drawing-4.png" alt="ss" className="ss"/>
                                <img src="https://i.ibb.co/Q694kgb/Drawing-1.png" alt="" className="ss"/>
                                <img src="https://i.ibb.co/zVkL69R/Drawing-3.png" alt="" className="ss"/>
                                <img src="https://i.ibb.co/R92XhBJ/Drawing-2.png" alt="" className="ss"/>
                                <img src="https://i.ibb.co/BL6zXZh/Drawing-5.png" alt="" className="ss"/>

                            </div>
                        </div>
                        <div className="order_block">
                            <div className="order_block_item">
                            <p><span className="boldPrice">Price:</span><span className="price">13$</span></p>
                            <button>order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PizzaBulder;