import React, {Component} from 'react';
import Menu from './MenuComponant';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import {Switch , Route ,Redirect} from 'react-router-dom';


class Main extends Component{

  constructor(props) {
    super(props);
    this.state = {
      dishes : DISHES ,
      comments : COMMENTS,
      leaders : LEADERS,
      promotions : PROMOTIONS
    };
  }

  

  render() {

    const HomeComponent = () => {
      return(
        <Home
        //filter method goes each dish one by one. then the arrow function inside it will check the 
        //dishes that are featured property is True and and returns that list.
          dish = {this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion = {this.state.promotions.filter((promotion) => promotion.featured)[0]}
          leader = {this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const dishWithId = ({match}) =>{
      return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId , 10))[0]}
      comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId , 10))}/>
      );
    };

    return (
    <div className="App">
      
      <Header/>
      
      <Switch>
        {/* we can add the componant along with the route.also this allows us to pass the props to the 
        componants like in the second line below */}
          <Route path="/home" component={HomeComponent}/>
          <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>}/>
          <Route path="/menu/:dishId" component={dishWithId}/>
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to="/home"/>
      </Switch>
       
      <Footer/>
      
    </div>
  );
  }

}


export default Main;
