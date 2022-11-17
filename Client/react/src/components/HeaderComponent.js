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
        console.log(res.data);
        const token = res.data.info.token;
        localStorage.setItem('token', token);
        alert(res.data.info.message);
      })
      .catch((err) => {
        alert("error");
        console.log(err);
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
                              <Input
                                type="password"
                                name="password"
                                id={"login_password" + this.props.id}
                                value={this.state.name}
                                onChange={(e) => this.onInputChange(e)}
                              />
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" /> Remember Me
                              </Label>
                            </FormGroup>
                            <Button
                              className="m-3"
                              disabled={
                                this.state.email == "" &&
                                this.state.password == ""
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
                              <Input
                                type="password"
                                name="password"
                                id="Password"
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="ConfirmPassword">
                                Confirm Password
                              </Label>
                              <Input
                                type="password"
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
