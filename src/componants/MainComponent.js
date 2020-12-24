import React, {Component} from 'react';
import Menu from './MenuComponant';
import DishDetail from './DishdetailComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent';
import {DISHES} from '../shared/dishes';
import {Switch , Route ,Redirect} from 'react-router-dom'

class Main extends Component{

  constructor(props) {
    super(props);
    this.state = {
      dishes : DISHES ,
      selectedDish : null 
    };
  }

  

  render() {

    const HomeComponent = () => {
      return(
        <Home/>
      );
    }

    return (
    <div className="App">
      
      <Header/>
      
      <Switch>
        {/* we can add the componant along with the route.also this allows us to pass the props to the 
        componants like in the second line below */}
          <Route path="/home" component={HomeComponent}/>
          <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>}/>
          <Redirect to="/home"/>
      </Switch>
       
      <Footer/>
      
    </div>
  );
  }

}


export default Main;
