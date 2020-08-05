import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Media} from 'reactstrap';
import { render } from '@testing-library/react';



class DishDetail extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        const SelectedDish = this.props.dish;
        return(
                <Card>
                    <CardImg top src={SelectedDish.image} alt={SelectedDish.name} />
                    <CardBody>
                      <CardTitle>{SelectedDish.name}</CardTitle>
                      <CardText>{SelectedDish.description}</CardText>
                    </CardBody>
                </Card>
        );
    }
}

export default DishDetail;