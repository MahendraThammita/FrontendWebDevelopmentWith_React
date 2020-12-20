import React from "react";
import {Card , CardBody , CardText , CardTitle , CardImg} from 'reactstrap';
import moment from 'moment';



function RenderDish({dish}){
    
    if(dish != null){
            return (
            
                <div className="row">
                <Card className="col-12 col-md-5 m-1">
                    <CardImg top src={dish.image} alt={dish.image}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments = {dish.comments}/>
                </div>
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
                <RenderDish dish = {props.dish} />
                <RenderComments comments = {props.comments}/>
            </div>
        );
    }


export default DishDetail;