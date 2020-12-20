import React , {Component} from "react";
import {Card , CardBody , CardText , CardTitle , CardImg} from 'reactstrap';
import moment from 'moment';



class DishDetail extends Component{

    constructor(props){
        super(props);

    }

    componentDidMount() {
        console.log("This is componentDidMount Method of DishDetail Componant");
    }

    componentDidUpdate() {
        console.log("This is componentDidUpdate Method of DishDetail Componant");
    }

    renderComments(dish){

        
        if (dish != null) {
            
        let commentsList = dish.comments.map((comment) => {
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

    render(){

        console.log("This is render Method of DishDetail Componant");
        let dish = this.props.dish;
        if(dish != null){
            return (
            <div className="container">
                <div className="row">
                <Card className="col-12 col-md-5 m-1">
                    <CardImg top src={dish.image} alt={dish.image}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(dish)}
                </div>
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

}

export default DishDetail;