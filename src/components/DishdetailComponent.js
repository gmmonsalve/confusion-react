import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader,Row,Col, Form, Input,Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isActive: false,
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal} type="button">
                <i className="fa fa-pencil mr-2"/>Submit Comment
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader>
                    Submit Comment
                </ModalHeader>
                <ModalBody>
                <LocalForm>
                    <div className="container">
                    <Row className="form-group">
                    <Col md={12}>
                            <Label htmlFor="rate">Rating</Label>
                            <Control.select model=".rate" className="form-control" name="rate">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={12}>
                            <Label htmlFor="name">
                            Your name
                            </Label>
                            <Control.text model=".name" name="name" 
                            placeholder="Your name" 
                            type="text" 
                            className="form-control"
                            style={{width: "100%"}}/>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={12}>
                            <Label htmlFor="comment">
                                Comment
                            </Label>
                            <Control.textarea model=".comment" 
                            name="comment" 
                            type="textarea" rows="5"
                            className="form-control" />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={12}>
                            <Control.button model=".submit" type="button" className="btn btn-primary">
                                Submit
                            </Control.button>
                        </Col>   
                    </Row>
                    </div>
                </LocalForm>
                </ModalBody>
            </Modal>
            </div>
            
        );
        
    };

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
}



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
        const commts = comments.map((commit)=>{
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
                        <CommentForm />
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
        return (
            <div className="container">
                <div className="row">
                     <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
}

export default DishDetail;