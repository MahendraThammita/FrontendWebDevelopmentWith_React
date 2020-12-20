import React , {Component} from 'react';
import {Card ,CardTitle , CardImg , CardImgOverlay} from 'reactstrap';


class Menu extends Component {
    constructor(props){
        //props are properties that are recieving as parameters to a componant.
        super(props);
        
    }

    componentDidMount(){
        console.log("This is componentDidMount Method of MenuComponanta Componant");
    }

    render() {

        console.log("This is render method of MenuComponanta Componant");

        const menu = this.props.dishes.map((dish) => {
        return(
            <div className= "col-12 col-md-5 m-1">
                <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
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