import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
  Button,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import SearchBar from "./SearchBarComponent";
import axios from "axios";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
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
      signUpform:{
        name:"",
        email:"",
        password:"",
        confirm_password:""
      },
      verifyOtp:{otp:0},
      user_id:"",
      loginForm:{
        email:"",
        password:""
      }
      // successMessage: false
    };
    this.dropdownToggle = this.dropdownToggle.bind(this);
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

  signupHandler = (e,val) => {
    e.preventDefault()
    console.log(this.state.signUpform);

    axios
    .post("http://localhost:4000/auth/signup",this.state.signUpform)
    .then((res) => {
     console.log(res);
     //this.showModal.bind(this, "otp")
     this.setState({
      otp: true,
      user_id:res.data.user_id
    });
    })
    .catch((err) => {
     console.log(err,"error");
    });
  }
  loginHandler = (e,val) => {
    e.preventDefault()
    console.log(this.state.signUpform);

    axios
    .post("http://localhost:4000/auth/login",this.state.loginForm)
    .then((res) => {
     console.log(res);
     alert("login sussesful")
     return res
    })
    .catch((err) => {
     console.log(err,"error");
     alert(`${err.errors.error}`)
    });
  }
  verifyOtpHandler = (e,val) => {
    e.preventDefault()
    console.log(this.state.otp);

    axios
    .post(`http://localhost:4000/auth/verifyotp/${this.state.user_id}`,this.state.verifyOtp)
    .then((res) => {
     console.log(res);
    })
    .catch((err) => {
     console.log(err,"error");
    });
  }
  onChangeHandler=(e,formName)=>{
    let {name,value}=e.target;
    this.setState({
      [formName]: {
        ...this.state[formName],
        [name]:value
      },
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
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav
              className="justify-content-around align-items-center mr-auto mx-auto"
              navbar
            >
              <NavItem className="me-2">
                <SearchBar placeholder="Search for products" />
              </NavItem>
              <div className="nav-btns">
                <div>
                  <NavItem className="vendor my-1 me-2">
                    <select name="vendor" id="">
                      <option value="#" default selected>
                        Select Vendor
                      </option>
                      <option value="Retail">Retail</option>
                      <option value="Wholesaler">Wholesaler</option>
                    </select>
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
                            type="submit"
                            onClick={this.showModal.bind(this, "signup")}
                          >
                            Signup with Email
                          </Button>
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
                          <Form onSubmit={(e) => {
                            this.loginHandler(e,"hello")
                          }}>
                            {/* Login Form */}
                            <FormGroup className="text-left">
                              <Label for="exampleEmail" className="text-left">
                                Email
                              </Label>
                              <Input
                                type="email"
                                name="email"  value={this.state.loginForm.email} onChange={(e)=>{this.onChangeHandler(e,"loginForm")}}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label
                                for="examplePassword"
                                className="text-left"
                              >
                                Password
                              </Label>
                              <Input
                                type="password"
                                name="password"  value={this.state.loginForm.password} onChange={(e)=>{this.onChangeHandler(e,"loginForm")}}
                              />
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" /> Remember Me
                              </Label>
                            </FormGroup>
                            <Button
                              className="m-3"
                             type="submit"
                            >
                              Login
                            </Button>
                            <br />

                            <Button
                              className="forget"
                              type="button"
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
                          <Form className="signupForm" onSubmit={(e) => {
                            this.signupHandler(e,"hello")
                          }}>
                            <FormGroup>
                              <Label for="Name">Name</Label>
                              <Input type="text"id="Name"  name="name"  value={this.state.signUpform.name} onChange={(e)=>{this.onChangeHandler(e,"signUpform")}} />
                            </FormGroup>
                            <FormGroup>
                              <Label for="Email">Email</Label>
                              <Input type="email" name="email" id="Email" value={this.state.signUpform.email} onChange={(e)=>{this.onChangeHandler(e,"signUpform")}} />
                            </FormGroup>
                            <FormGroup>
                              <Label for="Password">Password</Label>
                              <Input
                                type="password"
                                name="password"
                                id="Password"
                                value={this.state.signUpform.password} onChange={(e)=>{this.onChangeHandler(e,"signUpform")}}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="ConfirmPassword">
                                Confirm Password
                              </Label>
                              <Input
                                type="password"
                                name="confirm_password"
                                id="confPassword"
                                value={this.state.signUpform.confirm_password} onChange={(e)=>{this.onChangeHandler(e,"signUpform")}}
                              />
                            </FormGroup>
                            {/* this.showModal.bind(this, "otp") */}
                            <Button type="submit" >
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
                          <Form  onSubmit={(e) => {
                            this.verifyOtpHandler(e)
                          }}>
                            <FormGroup>
                              <Label for="OTP"  >Enter OTP</Label>
                              <Input type="number"  name="otp"  value={this.state.verifyOtp.otp} onChange={(e)=>{this.onChangeHandler(e,"verifyOtp")}} id="OTP" />
                            </FormGroup>
                            <Button type="submit">Submit</Button>
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
                              <Input type="password" name="newPass" id="OTP" />
                            </FormGroup>
                            <FormGroup>
                              <Label for="OTP">Confirm Password</Label>
                              <Input
                                type="password"
                                name="confiPass"
                                id="OTP"
                              />
                            </FormGroup>
                            <Button>Reset Password</Button>
                          </Form>
                        </ModalBody>
                      </Modal>

                      {/* <Modal size='sm' aria-labelledby="contained-modal-title-vcenter" centered isOpen={this.state.successMessage} toggle={this.closeModal.bind(this, 'successMessage')}>
												<ModalBody>
													Success!!!!
												</ModalBody>
											</Modal> */}
                    </div>
                  </NavItem>
                </div>
                <div>
                  <NavItem className="me-2">
                    <NavLink href="#" className="px-md-5 my-1">
                      {" "}
                      Location<span className="fa fa-map-marker"></span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="me-2">
                    <NavLink href="#" className="px-md-5 my-1">
                      {" "}
                      Add to Cart<span className="fa fa-shopping-cart"></span>
                    </NavLink>
                  </NavItem>
                </div>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
