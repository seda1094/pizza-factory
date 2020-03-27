import React, { Component } from 'react'
import './PizzaBuilder.css';
import Categories from './categories/categories/categories';
import Ingredients from './ingredients/ingredients/ingredients';
import Pizza from './pizza/pizza';
import PizzaIngsList from './pizza/pizzaIngsList/pizzaIngsList';
import Order from './order/order';



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
              imgOnPizza: 'https://i.ibb.co/BL6zXZh/Drawing-5.png',
              count: 1
            },
            {
              id: '2',
              ingName: 'Ricotta',
              price: 4,
              logo: 'https://menstrual-cycle-calculator.com/wp-content/uploads/2018/05/swiss-cheese-min.png',
              imgOnPizza: 'https://i.ibb.co/Q694kgb/Drawing-1.png',
              count: 1
            },
            {
              id: '3',
              ingName: 'Rokfor',
              price: 5,
              logo: 'https://clipartart.com/images/blue-cheese-clipart-1.png',
              imgOnPizza: 'https://i.ibb.co/Q694kgb/Drawing-1.png',
              count: 1
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
              imgOnPizza: 'https://i.ibb.co/RQfX5k5/peper.png',
              count: 1
            },
            {
              id: '2',
              ingName: 'mushroom',
              price: 4,
              logo: 'https://webstockreview.net/images/mushroom-clipart-edible-mushroom.png',
              imgOnPizza: 'https://i.ibb.co/PCDtHBt/Drawing-4.png',
              count: 1
            },
            {
              id: '3',
              ingName: 'tomato',
              price: 5,
              logo: 'https://images.emojiterra.com/google/android-pie/512px/1f345.png',
              imgOnPizza: 'https://i.ibb.co/PCDtHBt/Drawing-4.png',
              count: 1
            },
            {
              id: '4',
              ingName: 'onion',
              price: 5,
              logo: 'https://clipartstation.com/wp-content/uploads/2018/10/onion-clipart-png-1.png',
              imgOnPizza: 'https://i.ibb.co/VY0Zm8h/onion.png',
              count: 1
            },
            {
              id: '5',
              ingName: 'corn',
              price: 5,
              logo: 'https://i.pinimg.com/originals/7d/62/bc/7d62bc0e381590a40c13dafcdf7b6594.png',
              imgOnPizza: 'https://i.ibb.co/PCDtHBt/Drawing-4.png',
              count: 1
            },
            {
              id: '6',
              ingName: 'olivie',
              price: 5,
              logo: 'https://static.wixstatic.com/media/2cd43b_1fe331521e634aa89c22a6e702a59755~mv2.png/v1/fill/w_320,h_275,fp_0.50_0.50/2cd43b_1fe331521e634aa89c22a6e702a59755~mv2.png',
              imgOnPizza: 'https://i.ibb.co/RQfX5k5/peper.png',
              count: 1
            },
            {
              id: '7',
              ingName: 'chili',
              price: 5,
              logo: 'https://clipartstation.com/wp-content/uploads/2017/11/chili-clipart.png',
              imgOnPizza: 'https://i.ibb.co/PCDtHBt/Drawing-4.png',
              count: 1
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
              imgOnPizza: 'https://i.ibb.co/zVkL69R/Drawing-3.png',
              count: 1
            },
            {
              id: '2',
              ingName: 'pepperoni',
              price: 4,
              logo: 'https://clipartstation.com/wp-content/uploads/2018/10/peperoni-clipart-1.png',
              imgOnPizza: 'https://i.ibb.co/zVkL69R/Drawing-3.png',
              count: 1
            },
            {
              id: '3',
              ingName: 'chicken',
              price: 5,
              logo: 'https://webstockreview.net/images/clipart-chicken-roasted-chicken-2.png',
              imgOnPizza: 'https://i.ibb.co/zVkL69R/Drawing-3.png',
              count: 1
            },
            {
              id: '4',
              ingName: 'beef',
              price: 5,
              logo: 'https://webstockreview.net/images/beef-clipart.png',
              imgOnPizza: 'https://i.ibb.co/DfswmdJ/beef.png',
              count: 1
            },
            {
              id: '5',
              ingName: 'ham',
              price: 5,
              logo: 'https://pngimage.net/wp-content/uploads/2018/06/ham-clipart-png-4.png',
              imgOnPizza: 'https://i.ibb.co/zVkL69R/Drawing-3.png',
              count: 1
            },
            {
              id: '6',
              ingName: 'fish',
              price: 5,
              logo: 'https://lizzyfishandchips.co.uk/wp-content/uploads/2019/08/battered-fish.png',
              imgOnPizza: 'https://i.ibb.co/DfswmdJ/beef.png',
              count: 1
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
              imgOnPizza: 'https://i.ibb.co/p3M5pbt/black-paper.png',
              count: 1
            },
            {
              id: '2',
              ingName: 'anise',
              price: 4,
              logo: 'https://i.pinimg.com/originals/22/68/6f/22686f45be709b80b41b7546fedb06b3.png',
              imgOnPizza: 'pepperoni.png',
              count: 1
            },
            {
              id: '3',
              ingName: 'peper',
              price: 5,
              logo: 'https://www.salebhai.com/content/images/thumbs/0039342_kusum-masala-red-chilli-powder-reshampatti-kashmiri-mast.png',
              imgOnPizza: 'https://i.ibb.co/jg9g0Vx/redpepr.png',
              count: 1
            },
            {
              id: '4',
              ingName: 'southern',
              price: 5,
              logo: 'https://www.southernstylespices.com/wp-content/uploads/2019/02/turmeric-1-e1555245553854.png',
              imgOnPizza: 'chicken.png',
              count: 1
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
              imgOnPizza: 'https://i.ibb.co/R92XhBJ/Drawing-2.png',
              count: 1
            },
            {
              id: '2',
              ingName: 'arugula',
              price: 4,
              logo: 'https://cdn.clipart.email/b7811a2839308633c61491df25186899_spinach-clipart-clip-art-picture-236126-spinach-clipart_304-300.png',
              imgOnPizza: 'https://i.ibb.co/R92XhBJ/Drawing-2.png',
              count: 1
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
            imgOnPizza: 'https://i.ibb.co/BL6zXZh/Drawing-5.png',
            count: 1
          },
          {
            id: '2',
            ingName: 'Ricotta',
            price: 4,
            logo: 'https://menstrual-cycle-calculator.com/wp-content/uploads/2018/05/swiss-cheese-min.png',
            imgOnPizza: 'https://i.ibb.co/Q694kgb/Drawing-1.png',
            count: 1
          },
          {
            id: '3',
            ingName: 'Rokfor',
            price: 5,
            logo: 'https://clipartart.com/images/blue-cheese-clipart-1.png',
            imgOnPizza: 'https://i.ibb.co/Q694kgb/Drawing-1.png',
            count: 1
          }
        ]
      },
      ingsOfPizza: [],
      totalPrice: 0
    }
  }
  //TODO: selectedCat[0] problem
  selectCat = (id) => {
    const selectedCat = this.state.categories.filter(cat => cat.id === id)
    this.setState((prev) => ({ ...prev, selectedCatIngs: selectedCat[0] }))
  }

  setIngsOfPizza = (ingredient) => {
    const newingsOfPizza = this.state.ingsOfPizza.concat()
    const indexIng = this.state.ingsOfPizza.findIndex((ing) => ing === ingredient)

    if (indexIng < 0) {
      this.setState((prev) => ({ ...prev, ingsOfPizza: [...prev.ingsOfPizza, ingredient] }))
    }
    else {
      newingsOfPizza[indexIng].count += 1
      this.setState((prev) => ({ ...prev, ingsOfPizza: newingsOfPizza }))
    }
    this.setPrice()
  }

  // setPrice = (ingPrice) => {
  //   const total = ingPrice + this.state.totalPrice
  //   this.setState((prev) => 
  //   ({ ...prev, totalPrice: total}))
  // } 

//TODO: borotsya s event loop
//potomuchto verkhnyaya functia rabotaet poeszechem setPrice,,i nechego pribavlyat'
  setPrice = () => {
    setTimeout(() => {
      let totPrice = 0
      this.state.ingsOfPizza.map(ing => {
        totPrice = totPrice + (ing.price * ing.count)
      })
      this.setState(prev => ({ ...prev, totalPrice: totPrice }))
    }, 0);
  }


  deleteIng = (ingredient) => {

    let newSelectedCatIngs = [...this.state.ingsOfPizza]
    const index = newSelectedCatIngs.findIndex(ing => ing === ingredient)
    if (newSelectedCatIngs[index].count === 1) {
      newSelectedCatIngs = newSelectedCatIngs.filter(ing => ing !== ingredient)
    }
    else{
      newSelectedCatIngs[index].count--
    }
    this.setState(prev => ({...prev, ingsOfPizza: newSelectedCatIngs}))
  }

  render() {
    return (
      <div className="main_block">
        <div className="section section_options">
          <Categories categories={this.state.categories} selectCat={this.selectCat} />
          <Ingredients
            selectedCatIngs={this.state.selectedCatIngs}
            setStateOfPizza={this.setIngsOfPizza}
            deleteIng={this.deleteIng}
            ingsOfPizza={this.state.ingsOfPizza}
          />
        </div>
        <div className="section section_pizza">
          <div className="main_pizza_block">
            <Pizza stateOfPizza={this.state.ingsOfPizza} />
            <div className="order_block">
              <div className="addBlock">
                {/* <h3>Your<br/>orders!</h3> */}
              </div>
              <PizzaIngsList ingsOfPizza={this.state.ingsOfPizza} />
              <Order totalPrice={this.state.totalPrice} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PizzaBulder;