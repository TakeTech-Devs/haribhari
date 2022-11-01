import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalBody } from 'reactstrap';

class OTP extends Component{
    render(){
        return(
            <Modal size='sm' aria-labelledby="contained-modal-title-vcenter" centered isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="OTP">OTP</Label>
                            <Input type="number" name="otp" id="OTP" placeholder="Enter OTP" />
                        </FormGroup>
                        <Button>Next</Button>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}

export default OTP;