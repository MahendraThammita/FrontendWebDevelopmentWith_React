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
    }

    

    render() {

        const menu = this.props.dishes.map((dish) => {
        return(
            <div className= "col-12 col-md-5 m-1">
                <Card key={dish.id}>
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
            </div>
        );
    }
}

export default Menu;