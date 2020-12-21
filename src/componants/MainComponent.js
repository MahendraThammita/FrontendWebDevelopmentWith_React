import React, {Component} from 'react';
import Menu from './MenuComponant';
import DishDetail from './DishdetailComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import {DISHES} from '../shared/dishes';

class Main extends Component{

  constructor(props) {
    super(props);
    this.state = {
      dishes : DISHES ,
      selectedDish : null 
    };
  }

    onDishSelect(dishId) {
        this.setState({selectedDish:dishId});
    }    


  render() {
    return (
    <div className="App">
      
      <Header/>
      {/* There onClick is a prop that pass into the menuComponant
      By the prop 'onClick' , it will pass an arrow function to the menuComponant  */}
      <Menu dishes = {this.state.dishes} onClick = {(dishId) => this.onDishSelect(dishId)} />

      {/* filter function goes through all the elements in an array and returns that passes a
       given function inside of the filter function */}
      <DishDetail dish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
       
      <Footer/>
      
    </div>
  );
  }

}


export default Main;
