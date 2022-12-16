import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar, NavItem, NavbarToggler, Collapse, Nav, NavbarBrand, Button, Modal, ModalBody, Form, FormGroup, Label, Input} from "reactstrap";
import SearchBar from "./SearchBarComponent";
import axios from "axios";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggle = this.toggle.bind(this);

    this.state = {
      hidden: false,
      // password: '',
    };
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);

    this.state = {
      isOpen: false
    };
  
  

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      dd1: false,
      login: false,
      login1: false,
      signup: false,
      forget: false,
      otp: false,
      newPass: false,
      email: null,
      password: null,
      // successMessage: false
    };
    this.dropdownToggle = this.dropdownToggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // handlePasswordChange(e){
  //   this.setState({ password: e.target.value });
  // }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  componentDidMount(){
    if(this.props.password){
      this.setState({ password: this.props.password });
    }
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login = () => {
    axios
      .post("http://localhost:4000/auth/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        const token = res.data.info.token;
        localStorage.setItem('token', token);
        alert(res.data.info.message);
      })
      .catch((err) => {
        alert(err.response.data.errors.error);
      });
  };

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  dropdownToggle() {
    this.setState({
      dd1: !this.state.dd1,
    });
  }
  closeModal(tabId) {
    this.setState({
      [tabId]: false,
    });
  }
  showModal(modal) {
    this.setState({
      [modal]: true,
    });
  }

  render() {
    return (
      <div
        style={{
          display: "block",
          padding: 30,
        }}
      >
      <Navbar color="white fixed-top" light expand="md">
        <NavbarBrand href="/">
          <img
            src="assets/images/Logo 1st.png"
            height="100"
            width="100"
            alt="haribhari"
          />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
        <Collapse className="main-header" isOpen={this.state.isNavOpen} navbar>
          <Nav
            className="justify-content-between align-items-center mr-auto mx-auto"
            navbar
          >
          <NavItem className="me-2">
            <SearchBar placeholder="Search for products" />
          </NavItem>
            <NavItem className="me-2">
              <div>
                <Button
                  className="px-md-5 my-1"
                  onClick={this.showModal.bind(this, "login")}
                >
                  Login
                </Button>

                <Modal
                  size="sm"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  isOpen={this.state.login}
                  toggle={this.closeModal.bind(this, "login")}
                >
                  <ModalBody>
                    <Button onClick={this.showModal.bind(this, "login1")}>
                      Login
                    </Button>

                    <div className="or">
                      <span></span>
                      <p>or</p>
                      <span></span>
                    </div>
                    <Button
                      className="signup"
                      onClick={this.showModal.bind(this, "signup")}
                    >Signup with Email</Button>
                  </ModalBody>
                </Modal>

                <Modal
                  size="md"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  isOpen={this.state.login1}
                  toggle={this.closeModal.bind(this, "login1")}
                >
                  <ModalBody>
                    <Form>
                      {/* Login Form */}
                      <FormGroup className="text-left">
                        <Label for="exampleEmail" className="text-left">
                          Email
                        </Label>
                        <Input
                          type="email"
                          name="email"
                          id={"login_email" + this.props.id}
                          value={this.state.name}
                          onChange={(e) => this.onInputChange(e)}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label
                          for="examplePassword"
                          className="text-left"
                        >
                          Password
                        </Label>
                        <div className="password d-flex">

                          <Input
                            type={this.state.hidden ? 'text' : 'password'}
                            name="password"
                            id={"login_password" + this.props.id}
                            value={this.state.password}
                            onChange={(e) => this.onInputChange(e)} 
                          />
                          <i className="fa fa-eye" onClick={this.toggleShow} />
                        </div>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" /> Remember Me
                        </Label>
                      </FormGroup>
                      <Button
                        className="m-3"
                        disabled={
                          this.state.email === "" &&
                          this.state.password === ""
                        }
                        onClick={this.login}
                      >
                        Login
                      </Button>
                      <br />
                      <Button
                        className="forget"
                        onClick={this.showModal.bind(this, "forget")}
                      >
                        Forget Password
                      </Button>
                    </Form>
                  </ModalBody>
                </Modal>

                <Modal
                  size="md"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  isOpen={this.state.signup}
                  toggle={this.closeModal.bind(this, "signup")}
                >
                  <ModalBody>
                    <Form className="signupForm">
                      <FormGroup>
                        <Label for="Name">Name</Label>
                        <Input type="text" name="name" id="Name" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="email" name="email" id="Email" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="Password">Password</Label>
                        <div className="password d-flex">
                          <Input
                            type={this.state.hidden ? 'text' : 'password'}
                            name="password"
                            id={"login_password" + this.props.id}
                            value={this.state.password}
                            onChange={(e) => this.onInputChange(e)} 
                          />
                          <i className="fa fa-eye" onClick={this.toggleShow} />
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label for="ConfirmPassword">
                          Confirm Password
                        </Label>
                        <Input
                          type="text"
                          name="confPassword"
                          id="confPassword"
                        />
                      </FormGroup>

                      <Button onClick={this.showModal.bind(this, "otp")}>
                        Next
                      </Button>
                    </Form>
                  </ModalBody>
                </Modal>

                <Modal
                  className="forgetPassword"
                  size="md"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  isOpen={this.state.forget}
                  toggle={this.closeModal.bind(this, "forget")}
                >
                  <ModalBody>
                    <Form>
                      <FormGroup>
                        <Label for="Email">Enter Your Email</Label>
                        <Input type="email" name="email" id="Email" />
                      </FormGroup>
                      <Button onClick={this.showModal.bind(this, "otp")}>
                        Send OTP
                      </Button>
                    </Form>
                  </ModalBody>
                </Modal>

                <Modal
                  className="OTPpage"
                  size="sm"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  isOpen={this.state.otp}
                  toggle={this.closeModal.bind(this, "otp")}
                >
                  <ModalBody>
                    <Form>
                      <FormGroup>
                        <Label for="OTP">Enter OTP</Label>
                        <Input type="number" name="otp" id="OTP" />
                      </FormGroup>
                      <Button>Submit</Button>
                    </Form>
                  </ModalBody>
                </Modal>

                <Modal
                  size="sm"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  isOpen={this.state.newPass}
                  toggle={this.closeModal.bind(this, "newPass")}
                >
                  <ModalBody>
                    <Form>
                      <FormGroup>
                        <Label for="OTP">New Password</Label>
                        <div className="password d-flex">
                          <Input
                            type={this.state.hidden ? 'text' : 'password'}
                            name="password"
                            id={"login_password" + this.props.id}
                            value={this.state.password}
                            onChange={(e) => this.onInputChange(e)} 
                          />
                          <i className="fa fa-eye" onClick={this.toggleShow} />
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label for="OTP">Confirm Password</Label>
                        <Input
                          type="text"
                          name="confiPass"
                          id="OTP"
                        />
                      </FormGroup>
                      <Button>Reset Password</Button>
                    </Form>
                  </ModalBody>
                </Modal>

                <Modal size='sm' aria-labelledby="contained-modal-title-vcenter" centered isOpen={this.state.successMessage} toggle={this.closeModal.bind(this, 'successMessage')}>
									<ModalBody>
										Success!!!!
									</ModalBody>
								</Modal>
              </div>
            </NavItem>  
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
}

export default Header;
