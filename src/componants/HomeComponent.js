import React from 'react';
import {Card , CardBody , CardImg , CardText , CardTitle , CardSubtitle} from 'reactstrap';

//This way we can directly use the propertis insted of using props.$$$
function RenderCard({item}){
    return(
        <Card>
            <CardImg src={item.image} alt={item.name}/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {/* ? means not null in typescript. it will return the value right to it if the left
                contition becomes not null.
                if that contidion becomes null, it will return the value right to the colen.
                (ex: var result = (condition) ? (value1) : (value2);) this wil work similer to if/then. */}
                {item.designation ?  <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props){
    return(
        <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.dish}/>
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.promotion}/>
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.leader}/>
                    </div>
                </div>
        </div>
    );
}

export default Home;