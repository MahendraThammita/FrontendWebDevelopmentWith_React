import React , {Component} from 'react';
import {Card , CardBody , CardText , CardTitle , CardImg , CardImgOverlay} from 'reactstrap';

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
    renderDish(dish){
        if (dish != null) {
            return(
                    <Card>
                        <CardImg top src={dish.image} alt={dish.image}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
            );
        } else {
            return ( 
                <div> </div>
            );
        }
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
                <div className= "row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;