import React from 'react';
import {Card ,CardTitle , CardImg , CardImgOverlay} from 'reactstrap';


    // This is a functional componant. this is a one way of creating functional componants
    function RenderMenuItem({dish , onClick}) {
        return(
            <Card key={dish.id} onClick={() => onClick(dish.id)}>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    // This is a functional componant. this is another way of creating functional componants
    //if you know what are the props they can be passed like the functional componant above
    //othervice they can be passed as in here.
    const Menu = (props) => {

        const menu = props.dishes.map((dish) => {
        return(
            <div className= "col-12 col-md-5 m-1">
                <RenderMenuItem dish = {dish} onClick = {props.onClick} />
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


export default Menu;