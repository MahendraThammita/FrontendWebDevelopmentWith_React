import React , {Component} from 'react';
import {Card ,CardTitle , CardImg , CardImgOverlay} from 'reactstrap';
import DishDetail from './DishdetailComponent'

class Menu extends Component {
    constructor(props){
        //props are properties that are recieving as parameters to a componant.
        super(props);
        
        //state is used to define object specific variables.
        this.state = {
            selectedDish: null
        };
        console.log("This is constructor of MenuComponanta Componant");
    }

    componentDidMount(){
        console.log("This is componentDidMount Method of MenuComponanta Componant");
    }


    onDishSelect(dish){
        this.setState({selectedDish:dish});
    }    

    render() {

        console.log("This is render method of MenuComponanta Componant");

        const menu = this.props.dishes.map((dish) => {
        return(
            <div className= "col-12 col-md-5 m-1">
                <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    });

        return(
            <div className="container">
                <div className= "row">
                        {menu}
                </div>
                {/* Insted of renderDish function DishDetaill component directly called and 'null'
                scenario will handle in the render method of the DishDetail component */}
                <DishDetail details={this.state.selectedDish}/>
            </div>
        );
    }
}

export default Menu;