import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavItem, NavLink, Button, Form, FormGroup, Label, Input, Modal, ModalBody } from 'reactstrap';

class Login extends Component{
    render(){
        return(
            <Modal size='sm' aria-labelledby="contained-modal-title-vcenter" centered >
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Enter Password" />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Remember Me
                            </Label>
                        </FormGroup>
                        <Button>Next</Button>

                        <NavItem className=''>
                            <NavLink href="#" className=''>Forget Password</NavLink>
                        </NavItem>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}

export default Login;