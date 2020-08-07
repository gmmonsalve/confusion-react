import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Media} from 'reactstrap';
import { render } from '@testing-library/react';



class DishDetail extends Component{
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    renderComments(dish){
        if(dish != null){
        const commts = dish.comments.map((commit)=>{
                return(
                    <div>
                        <li>{commit.comment}</li>
                        <li>-- {commit.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                        <br></br>
                    </div>
                        
                    );
                });
                return(
                    <div>
                        <h4>Comments</h4>
                        {commts}
                    </div>
                   
                    );
             }else{
                 return(
                 <div></div>
                 );
             }
    }
    render(){
        const SelectedDish = this.props.dish;
        return(
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-5 m-1">
                        {this.renderDish(SelectedDish)}
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 m-1">
                        
                        <ul className="list-unstyled">
                            {this.renderComments(SelectedDish)}
                        </ul>
                    </div>
                </div>
        );
    }
}

export default DishDetail;