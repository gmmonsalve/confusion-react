import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <DishDetail dish={dish}/>
            );
        else
            return(
                <div></div>
            );
    }
    
    
    renderComments(dish){
        if(dish != null){
            const months = ['January', 'February', 'March', 
            'April', 'May', 'June', 
            'July', 'August', 'September', 
            'October', 'November', 'December'];
            dish.comments.map(function date(commit){
            const dte = new Date(commit.date);
            commit.date = months[dte.getMonth()]+' '+dte.getDate()+', '+dte.getFullYear();
        });

        const commts = dish.comments.map((commit)=>{
                return(
                    
                    <ul className="list-unstyled">
                       
                        <li>{commit.comment}</li>
        
                        <li>-- {commit.author}, {commit.date}</li>
                    </ul>
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

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                  <div className="col-12 col-sm-12 col-md-5 m-1">
                  
                    {this.renderComments(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}

export default Menu;