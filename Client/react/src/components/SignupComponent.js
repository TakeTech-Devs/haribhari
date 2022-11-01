import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalBody } from 'reactstrap';

class Signup extends Component{
    render(){
        return(
            <Modal size='sm' aria-labelledby="contained-modal-title-vcenter" centered isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="Name">Name</Label>
                            <Input type="text" name="name" id="Name" placeholder="Enter Name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Email">Email</Label>
                            <Input type="email" name="email" id="Email" placeholder="Enter Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Password">Password</Label>
                            <Input type="password" name="password" id="Password" placeholder="Enter Password" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="ConfirmPassword">Password</Label>
                            <Input type="password" name="confPassword" id="confPassword" placeholder="Confirm Password" />
                        </FormGroup>
                        
                        <Button>Next</Button>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}

export default Signup;