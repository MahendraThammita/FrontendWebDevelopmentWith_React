import React from 'react';
import { Link } from 'react-router-dom';
import {Card ,CardTitle , CardImg , CardImgOverlay , Breadcrumb , BreadcrumbItem} from 'reactstrap';


    // This is a functional componant. this is a one way of creating functional componants
    function RenderMenuItem({dish}) {
        return(
            <Card >
                {/* this will specify the link in js format.make sure to use the back quotation mark that
                is located on the top left corner of the keyboard. */}
                <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
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
                <RenderMenuItem dish = {dish}/>
            </div>
        );
    });

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr/>
                    </div>
                </div>
                <div className= "row">
                        {menu}
                </div>
            </div>
        );
        
    }


export default Menu;