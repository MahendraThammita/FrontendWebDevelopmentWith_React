import React from "react";
import {Card , CardBody , CardText , CardTitle , CardImg , Breadcrumb , BreadcrumbItem} from 'reactstrap';
import moment from 'moment';
import {Link} from 'react-router-dom'



function RenderDish({dish}){
    
    if(dish != null){
            return (
            
            <div className="row">
                <Card>
                    <CardImg top src={dish.image} alt={dish.image}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );

        }
        else{
            return(
                <div></div>
            );
        }
}

    function RenderComments({comments}){

        
        if (comments != null) {
            
        let commentsList = comments.map((comment) => {
            return(
                <ul ul className = "list-unstyled" >
                    <li>{comment['comment']}</li>
                    <li>-- {comment['author']} , {moment(comment['date']).format("MMM DD, YYYY")}</li>
                </ul>
            );
        });

        return (
            <div>
                <h4>Comments</h4>
                {commentsList}
            </div>
        );
        }
        else{
            return(
                <div></div>
            );
        }

    }

    const DishDetail = (props) => {
        return(
            <div className = "container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish = {props.dish} />
                    </div>
                    <div div className = "col-12 col-md-5 m-1" >
                        <RenderComments comments = {props.comments}/>
                    </div>
                </div>
            </div>
        );
    }


export default DishDetail;