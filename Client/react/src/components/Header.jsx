import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar, NavItem, NavbarToggler, Collapse, Nav, NavbarBrand, Button, Modal, ModalBody, Form, FormGroup, Label, Input, UncontrolledDropdown, DropdownToggle, DropdownItem, NavLink, DropdownMenu
} from "reactstrap";
import { useAuth } from '../context/AuthContex';
import SearchBarComponent from './SearchBarComponent';

function Header() {
    const [loginUser, setIsLoginUser] = useState(false);
    const [formState, setFormState] = useState({
        values: {}
    });
    const [mymodal, setmyModal] = useState({
        firstModal: false,
        loginModal: false,
        registerModal: false,
        otpModal: false,
        forgetPassModal: false,
        showEye: false,
    });
    const {
        onAddProduct,
        onRemoveProduct,
        cartItems,
        setCartItems,
        handelLogout,
        handleRefresh
    } = useAuth()
    const handleChange = (event) => {
        console.log(event.target.files, event.target.name)

        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === 'checkbox'
                        ? event.target.checked
                        : event.target.value
            }

        }));
    }
    const toggle = () => setmyModal({ loginModal: false, otpModal: false, registerModal: false, firstModal: false, forgetPassModal: false });
    const handleLogin = () => {
        toggle()
        setmyModal({ ...mymodal, loginModal: true })
    };
    const handleFirst = () => {
        toggle()
        setmyModal({ ...mymodal, firstModal: true })
    };
    const handleRegister = () => {
        toggle()
        setmyModal({ ...mymodal, registerModal: true })
    };
    const handleOtpVer = () => {
        axios.post('http://localhost:4000/auth/signup', formState.values, {

        }).then(res => {
            // setcategories(res.data.info)
            toggle()
            setmyModal({ ...mymodal, otpModal: true })
        })

    };
    const handleForgetPass = () => {
        toggle()
        setmyModal({ ...mymodal, forgetPassModal: true })
    };

    const handleLoginApi = (e) => {
        e.preventDefault();
        console.log(formState, "fomg")
        axios.post('http://localhost:4000/auth/login', formState.values, {

        }).then(res => {
            // setcategories(res.data.info)
            localStorage.setItem('token', JSON.stringify(res.data.info.token))
            console.log(res, "fsd")
            toggle()
            handleRefresh()
        })
    }

    const handleApiSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:4000/auth/verifyotp/${formState.values.otp}`, formState.values, {

        }).then(res => {
            // setcategories(res.data.info)
            // localStorage.setItem('token', JSON.stringify(res.data.info.token))
            // console.log(res, "fsd")
            toggle()
            handleRefresh()
        })
    }
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setIsLoginUser(true)
        }
    }, [])
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <>
            <div
                style={{
                    display: "block",
                    padding: 30,
                }}
            >
                <Navbar color="white fixed-top" light expand="md">
                    <Link to="/">
                        <img
                            src="assets/images/Logo 1st.png"
                            height="100"
                            width="100"
                            alt="haribhari"
                        />
                    </Link>
                    <NavbarToggler onClick={toggleNavbar} />
                    <Collapse isOpen={!collapsed} className="main-header" navbar>
                        <Nav
                            className={loginUser?"ml-auto":"justify-content-between align-items-center mr-auto mx-auto"}
                            navbar
                        >
                            <NavItem className="me-2 my-3">
                                <SearchBarComponent placeholder="Search for products" />
                            </NavItem>

                            {!loginUser ? <NavItem className="me-2">
                                <div>
                                    <Button
                                        className="px-md-5 my-1"
                                        onClick={handleFirst}
                                    >
                                        Login
                                    </Button>
                                    <Modal
                                        size="sm"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered
                                        isOpen={mymodal.firstModal}
                                        toggle={toggle}
                                    >
                                        <ModalBody>
                                            <Button onClick={handleLogin}>
                                                Login
                                            </Button>

                                            <div className="or">
                                                <span></span>
                                                <p>or</p>
                                                <span></span>
                                            </div>
                                            <Button
                                                className="signup"
                                                onClick={handleRegister}

                                            >Signup with Email</Button>
                                        </ModalBody>
                                    </Modal>
                                    <Modal
                                        size="md"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered
                                        isOpen={mymodal.registerModal}
                                        toggle={toggle}
                                    >
                                        <ModalBody>
                                            <Form className="signupForm">
                                                <FormGroup>
                                                    <Label for="Name">Name</Label>
                                                    <Input onChange={handleChange} type="text" name="name" id="Name" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="Email">Email</Label>
                                                    <Input type="email" onChange={handleChange} name="email" id="Email" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="Password">Password</Label>
                                                    <div className="password d-flex">
                                                        <Input
                                                            type={'password'}
                                                            name="password"
                                                            onChange={handleChange}
                                                        // id={"login_password" + this.props.id}
                                                        // value={this.state.password}
                                                        // onChange={(e) => this.onInputChange(e)}
                                                        />
                                                        {/* <i className="fa fa-eye" onClick={this.toggleShow} /> */}
                                                    </div>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="ConfirmPassword">
                                                        Confirm Password
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        name="confirm_password"
                                                        onChange={handleChange}
                                                        id="confirm_password"
                                                    />
                                                </FormGroup>

                                                <Button onClick={handleOtpVer}>
                                                    Next
                                                </Button>
                                            </Form>
                                        </ModalBody>
                                    </Modal>


                                    <Modal
                                        className="OTPpage"
                                        size="sm"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered
                                        isOpen={mymodal.otpModal}
                                        toggle={toggle}
                                    >
                                        <ModalBody>
                                            <Form onSubmit={handleApiSubmit}>
                                                <FormGroup>
                                                    <Label for="OTP"  >Enter OTP</Label>
                                                    <Input type="number" onChange={handleChange} name="otp" id="OTP" />
                                                </FormGroup>
                                                <Button type="submit">Submit</Button>
                                            </Form>
                                        </ModalBody>
                                    </Modal>

                                    <Modal
                                        size="md"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered
                                        isOpen={mymodal.loginModal}
                                        toggle={toggle}
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
                                                        onChange={handleChange}
                                                    // id={"login_email" + this.props.id}
                                                    // value={this.state.name}
                                                    // onChange={(e) => this.onInputChange(e)}
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
                                                            onChange={handleChange}
                                                            type={mymodal.showEye ? 'text' : 'password'}
                                                            name="password"
                                                        // id={"login_password" + this.props.id}
                                                        // value={this.state.password}
                                                        // onChange={(e) => this.onInputChange(e)}
                                                        />
                                                        <i className="fa fa-eye" onClick={() => setmyModal({ ...mymodal, showEye: !mymodal.showEye })} />

                                                    </div>
                                                </FormGroup>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="checkbox" name='remember' onChange={handleChange} /> Remember Me
                                                    </Label>
                                                </FormGroup>
                                                <Button
                                                    className="m-3"
                                                    // disabled={
                                                    //     this.state.email === "" &&
                                                    //     this.state.password === ""
                                                    // }
                                                    onClick={handleLoginApi}
                                                >
                                                    Login
                                                </Button>
                                                <br />
                                                <Button
                                                    className="forget"
                                                    onClick={handleForgetPass}
                                                // onClick={this.showModal.bind(this, "forget")}
                                                >
                                                    Forget Password
                                                </Button>
                                            </Form>
                                        </ModalBody>
                                    </Modal>



                                </div>
                            </NavItem>

                                : <>
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
                                                <DropdownItem >Profile
                                                    <Modal className="white-background" size="md" aria-labelledby="contained-modal-title-vcenter" centered >
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
                                                            <Button className="signup" >
                                                                Update Profile
                                                            </Button>
                                                            <Modal size="md" aria-labelledby="contained-modal-title-vcenter" centered >
                                                                <ModalBody>
                                                                    <Form>
                                                                        <FormGroup className="d-flex text-left align-items-center justify-content-around">
                                                                            <Label className="">Name :</Label>
                                                                            <Label>Subhrajit Roy Chowdhury</Label>
                                                                            {/* <input type="text" name="" id="" /> */}
                                                                        </FormGroup>

                                                                        <FormGroup className="d-flex text-left align-items-center justify-content-around">
                                                                            <Label className="text-left">Email</Label>
                                                                            <Label>subhrajit@gmail.com</Label>
                                                                            {/* <input type="email" name="" id="" /> */}
                                                                        </FormGroup>

                                                                        <FormGroup className="d-flex text-left align-items-center justify-content-around">
                                                                            <Label className="text-left"> Phone Number:</Label>
                                                                            <Label>+91 9784561230</Label>
                                                                            {/* <input type="number" name="" id="" /> */}
                                                                        </FormGroup>

                                                                        <FormGroup className="d-flex text-left align-items-center justify-content-around">
                                                                            <Label className="text-left">Alternative Phone Number:</Label>
                                                                            <Label>+91 9712453675</Label>
                                                                            {/* <input type="number" name="" id="" /> */}
                                                                        </FormGroup>
                                                                    </Form>
                                                                    <Button className="m-3">Done</Button>
                                                                </ModalBody>
                                                            </Modal>
                                                            <Button className="signup" >
                                                                Change Password
                                                            </Button>
                                                            <Modal size="md" aria-labelledby="contained-modal-title-vcenter" centered >
                                                                <ModalBody>
                                                                    <Form className="signupForm">
                                                                        <FormGroup>
                                                                            <Label for="OTP">Old Password</Label>
                                                                            <div className="password d-flex">
                                                                                <Input
                                                                                    // type={this.state.hidden ? 'text' : 'password'}
                                                                                    name="old-password"
                                                                                // value={this.state.password}
                                                                                // onChange={(e) => this.onInputChange(e)}
                                                                                />
                                                                                <i className="fa fa-eye" />
                                                                            </div>
                                                                        </FormGroup>
                                                                        <FormGroup>
                                                                            <Label for="OTP">New Password</Label>
                                                                            <div className="password d-flex">
                                                                                <Input
                                                                                    // type={this.state.hidden ? 'text' : 'password'}
                                                                                    name="new-password"
                                                                                // value={this.state.password}
                                                                                // onChange={(e) => this.onInputChange(e)}
                                                                                />
                                                                                <i className="fa fa-eye" />
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
                                                                        <Button>Done</Button>
                                                                    </Form>
                                                                </ModalBody>
                                                            </Modal>
                                                        </ModalBody>
                                                    </Modal>
                                                </DropdownItem>


                                                <DropdownItem><Link to="/order-list">My Orders</Link></DropdownItem>


                                                <DropdownItem >
                                                    Saved Addresses
                                                    <Modal className="SavedAddress white-background" size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                                                        <ModalBody>
                                                            <Button className="signup px-md-5 my-1 text-left" >Add New Address</Button>
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



                                                            <Modal className="white-background" size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
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
                                                                                <Input type="number" name="pin" id="" placeholder="Pin Number" />
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
                                                <DropdownItem onClick={handelLogout}>Logout</DropdownItem>
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
                                                <DropdownItem >
                                                    <span class="fa fa-map-marker"></span>&nbsp; Change Your Location

                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </NavItem>
                                    <NavItem className="me-2">
                                        <NavLink className="px-md-5 my-3">
                                            <Link to="/cart-list">Cart &nbsp;<span className="fa fa-shopping-cart"></span>{cartItems.length}</Link>
                                        </NavLink>
                                    </NavItem>
                                </>}
                        </Nav>

                    </Collapse>
                </Navbar>
            </div>
        </>
    );
}

export default Header;