import React from 'react';
import SearchBar from './SearchBarComponent';
import CategoryNav from './ProductCategoryNavComponent';
import CategoryProducts from './CategoryProductsComponent';
// import ProductDetails from './ProductDetailComponent';
import UpperFooter from './UpperFooterComponent'
import Footer from './FooterComponent';
// import Cart from './CartComponent';
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button, Modal, ModalBody, Form, FormGroup, Label, Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class LoginHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };


    this.state = {
        dd1: false,
        Profile: false,
        SavedAddress: false,
        NewAddress: false,
        UpdateProfile: false,
        ChangePassword: false,
    };
    this.dropdownToggle = this.dropdownToggle.bind(this);


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
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          {/* BRAND LOGO  */}
          <NavbarBrand href="/"><img
              src="assets/images/Logo 1st.png"
              height="100"
              width="100"
              alt="haribhari"
            /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* SEARCH PRODUCTS  */}
              <NavItem className="me-2 my-3">
                <SearchBar placeholder="Search for products" />
              </NavItem>

              {/* <div className="nav-btns"> */}
                {/* VENDOR BUTTON  */}
                <NavItem>
                  <NavLink className='vendor my-2 me-2'>
                    <select name="vendor" id="">
                      <option value="#" default selected>
                        Select Vendor
                      </option>
                      <option value="Retail">Retail</option>
                      <option value="Wholesaler">Wholesaler</option>
                    </select>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className='me-3 my-3'> Account </DropdownToggle> 
                    <DropdownMenu className="text-center">
                      <DropdownItem onClick={this.showModal.bind(this, "Profile")}>Profile
                        <Modal className="white-background" size="md" aria-labelledby="contained-modal-title-vcenter" centered isOpen={this.state.Profile} toggle={this.closeModal.bind(this, "Profile")}>
                          <ModalBody>
                            <h2 className="text-center mb-3">Profile</h2>
                            <Form>
                              <FormGroup className="d-flex text-left align-items-center justify-content-around">
                              <Label>Name :</Label>
                              <Label>Subhrajit Roy Chowdhury</Label>
                              </FormGroup>
                              <FormGroup className="d-flex text-left align-items-center justify-content-around">
                              <Label>Email</Label>
                              <Label>subhrajit@gmail.com</Label>
                              </FormGroup>

                              <FormGroup className="d-flex text-left align-items-center justify-content-around">
                              <Label> Phone Number:</Label>
                              <Label>+91 9784561230</Label>
                              </FormGroup>

                              <FormGroup className="d-flex text-left align-items-center justify-content-around">
                              <Label>Alternative Phone Number:</Label>
                              <Label>+91 9712453675</Label>
                              </FormGroup>
                            </Form>
                            <Button className="signup" onClick={this.showModal.bind(this, "UpdateProfile")}>
                                Update Profile
                            </Button>
                            <Modal size="md" aria-labelledby="contained-modal-title-vcenter" centered isOpen={this.state.UpdateProfile} toggle={this.closeModal.bind(this, "UpdateProfile")}>
                              <ModalBody>
                                <Form>
                                  <FormGroup className="d-flex text-left align-items-center justify-content-around">
                                  <Label className="">Name :</Label>
                                  <Label>Subhrajit Roy Chowdhury</Label>
                                  </FormGroup>

                                  <FormGroup className="d-flex text-left align-items-center justify-content-around">
                                  <Label className="text-left">Email</Label>
                                  <Label>subhrajit@gmail.com</Label>
                                  </FormGroup>

                                    <FormGroup className="d-flex text-left align-items-center justify-content-around">
                                    <Label className="text-left"> Phone Number:</Label>
                                    <Label>+91 9784561230</Label>
                                    </FormGroup>

                                    <FormGroup className="d-flex text-left align-items-center justify-content-around">
                                    <Label className="text-left">Alternative Phone Number:</Label>
                                    <Label>+91 9712453675</Label>
                                    </FormGroup>
                                  </Form>
                                  <Button className="m-3">Done</Button>
                                </ModalBody>
                                </Modal>
                                <Button className="signup" onClick={this.showModal.bind(this, "ChangePassword")}>
                                    Change Password
                                </Button>
                                <Modal size="md" aria-labelledby="contained-modal-title-vcenter" centered isOpen={this.state.ChangePassword} toggle={this.closeModal.bind(this, "ChangePassword")}>
                                  <ModalBody>
                                    <Form className="signupForm">
                                      <FormGroup>
                                      <Label for="OTP">Old Password</Label>
                                      <Input type="password" name="newPass" id="OTP" />
                                      </FormGroup>
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
                                      <Button>Done</Button>
                                    </Form>
                                  </ModalBody>
                                </Modal>
                              </ModalBody>
                            </Modal>
                          </DropdownItem>


                        <DropdownItem><Link to="/order-list">My Orders</Link></DropdownItem>
                        
                        
                        <DropdownItem  onClick={this.showModal.bind(this, "SavedAddress")}>
                        Saved Addresses
                        <Modal className="SavedAddress white-background" size="lg" aria-labelledby="contained-modal-title-vcenter" centered isOpen={this.state.SavedAddress} toggle={this.closeModal.bind(this, "SavedAddress")}>
                            <ModalBody>
                            <Button  className="signup px-md-5 my-1 text-left" onClick={this.showModal.bind(this, "NewAddress")}>Add New Address</Button>
                            <h6>Home</h6>
                            <div className="add d-flex align-items-center justify-content-around">
                                <p>Subhrajeet Roy Chowdhury- 551/A, Talbagan, Kolkata</p>
                                <div className="action d-flex justify-content-between">
                                <Button className="signup">Edit</Button>
                                <Button className="signup">Delete</Button>
                                </div>
                            </div>
                            <h6>Office</h6>
                            <div className="add d-flex align-items-center justify-content-around">
                                <p>Subhrajeet Roy Chowdhury- 551/A, Talbagan, Kolkata</p>
                                <div className="action d-flex justify-content-between">
                                <Button className="signup">Edit</Button>
                                <Button className="signup">Delete</Button>
                                </div>
                            </div>



                            <Modal className="white-background" size="lg" aria-labelledby="contained-modal-title-vcenter" centered isOpen={this.state.NewAddress} toggle={this.closeModal.bind(this, "NewAddress")}>
                                <ModalBody>
                                <div className="newAddress d-flex align-items-center justify-content-between">
                                    <div className="new-address-img">
                                    <img className="location-image" src="assets/images/map.png" alt="" />
                                    <div className="loc d-flex text-center align-items-center justify-content-around">
                                        <img src="assets/images/icons/loc.png" alt="" />
                                        <h3>Your Location</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet. Ut velit nulla hic ullam dolor non dolorem voluptatem ea iure rerum et dolores deserunt eos perspiciatis quia. Sed nostrum pariatur et placeat vitae et esse quam id nobis accusamus.</p>
                                    </div>
                                    <Form className="signupForm">
                                    <h2>Enter Complete Address</h2>
                                    <p>This allow us to find you easily and give you timely delivery experience</p>
                                    <FormGroup>
                                        <Input type="text" name="name" id="" placeholder="Reaceiver's Name" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="text" name="address" id="" placeholder="Flate/House/Office No." />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="text" name="street/society/office-name" id="" placeholder="Street/Society/Office Name." />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="number" name="pin" id="" placeholder="Pin Number"/>
                                    </FormGroup>
                                    <FormGroup tag="fieldset" className="d-flex justify-content-around">
                                        <p>Save address as : &nbsp;</p>
                                        <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="address-type" /> Home&nbsp;&nbsp;
                                        </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="address-type" /> Office
                                        </Label>
                                        </FormGroup>
                                    </FormGroup>
                                    <Button className="btn SaveAddress">Save Address</Button>
                                    </Form>
                                </div>


                                </ModalBody>
                            </Modal>
                            <p></p>
                            <p></p>
                            
                            </ModalBody>
                        </Modal>
                        </DropdownItem>
                        <DropdownItem><Link to='/frequently-asked'>FAQ's</Link></DropdownItem>
                        <DropdownItem>Logout</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
              
                <NavItem className="me-2">
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className='me-2 my-3'>
                      Location &nbsp;<span className="fa fa-map-marker"></span>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <span className='fa fa-map-marker'></span>&nbsp;Kolkata, WestBengal, India
                      </DropdownItem>
                      <DropdownItem onClick={this.showModal.bind(this, "SavedAddress")}>
                      <span class="fa fa-map-marker"></span>&nbsp; Change Your Location

                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem> 
                <NavItem className="me-2">
                  <NavLink className="px-md-5 my-3">
                    <Link to="/cart-list">Cart &nbsp;<span className="fa fa-shopping-cart"></span></Link>
                  </NavLink>
                </NavItem>
              {/* </div> */}
            </Nav>
          </Collapse>
        </Navbar>
        {/* <Cart /> */}
        {/* <ProductDetails/> */}
        <CategoryNav/>
        <CategoryProducts/>
        <UpperFooter />
        <Footer />
      </div>
    );
  }
}
