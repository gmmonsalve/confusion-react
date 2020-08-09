import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

    function RenderDish({dish})  {
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
    function RenderComments({comments}) {
        if(comments){
        const commts = comments.comments.map((commit)=>{
                return(
                    <div>
                        <li>{commit.comment}</li>
                        <li>-- {commit.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commit.date)))}</li>
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

    const  DishDetail = (props) => {
        const SelectedDish = props.dish;
        return(
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-5 m-1">
                        <RenderDish dish={SelectedDish}/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 m-1">
                        
                        <ul className="list-unstyled">
                            <RenderComments comments={SelectedDish}/>
                        </ul>
                    </div>
                </div>
        );
    }

export default DishDetail;