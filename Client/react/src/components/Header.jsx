import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoww from "../images/Logo1st.png";
import mapimg from "../images/map.png";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarBrand,
  Button,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  NavLink,
  DropdownMenu,
} from "reactstrap";
import { useAuth } from "../context/AuthContex";
import SearchBarComponent from "./SearchBarComponent";

function Header() {
  const [loginUser, setIsLoginUser] = useState(false);
  const [mySavedAddress, setmySavedAddress] = useState([]);
  const [defaultaddress, setDefaultaddress] = useState("");
  const [formState, setFormState] = useState({
    values: {},
  });
  const navigate = useNavigate();
  const [mymodal, setmyModal] = useState({
    firstModal: false,
    loginModal: false,
    registerModal: false,
    otpModal: false,
    forgetPassModal: false,
    showEye: false,
    profileInfoModel: false,
    changePassModel: false,
    addressModel: false,
    addAddressModel: false,
    userUpdateModel: false,
  });
  const {
    onAddProduct,
    onRemoveProduct,
    cartItems,
    setCartItems,
    handelLogout,
    handleRefresh,
    UserInfo,
    setUserInfo,
    getUserDetails,
  } = useAuth();
  const handleChange = (event) => {
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
    }));
  };
  const toggle = () =>
    setmyModal({
      loginModal: false,
      otpModal: false,
      registerModal: false,
      firstModal: false,
      forgetPassModal: false,
      addressModel: false,
      addAddressModel: false,
      userUpdateModel: false,
    });
  const handleLogin = () => {
    toggle();
    setmyModal({ ...mymodal, loginModal: true });
  };
  const handleFirst = () => {
    toggle();
    setmyModal({ ...mymodal, firstModal: true });
  };
  const handleRegister = () => {
    toggle();
    setmyModal({ ...mymodal, registerModal: true });
  };
  const handleOtpVer = () => {
    axios
      .post(
        "auth/signup",
        formState.values,
        {}
      )
      .then((res) => {
        // setcategories(res.data.info)
        setFormState({
          ...formState,
          values: {
            ...res.data,
          },
        });
        toggle();
        setmyModal({ ...mymodal, otpModal: true });
      });
  };
  const handleForgetPass = () => {
    toggle();
    setmyModal({ ...mymodal, forgetPassModal: true });
  };

  const handleLoginApi = (e) => {
    e.preventDefault();
    axios
      .post(
        "auth/login",
        formState.values,
        {}
      )
      .then((res) => {
        // setcategories(res.data.info)
        localStorage.setItem("token", JSON.stringify(res.data.info.token));
        toggle();
        navigate("/shop");
        // handleRefresh()
      });
  };

  const handleApiSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `${formState?.values?.user_id}`,
        formState.values,
        {}
      )
      .then((res) => {
        toggle();
        handleRefresh();
      });
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoginUser(true);
    }
    // getMyAddress()
  }, []);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const handleResetPass = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));

    axios
      .put(
        `auth/changepassword`,
        formState.values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        // setcategories(res.data.info)
        // localStorage.setItem('token', JSON.stringify(res.data.info.token))
        toggle();
        // handleRefresh()
      });
  };

  const handleAddressForm = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));

    axios
      .post(`address`, formState.values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // setcategories(res.data.info)
        // localStorage.setItem('token', JSON.stringify(res.data.info.token))
        toggle();
        // handleRefresh()
      });
  };
  const handleForgetPassword = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));

    axios
      .post(`https://apidevelopment.hari-bhari.com/auth/forgotpassword`, formState.values, {

      })
      .then((res) => {
        // setcategories(res.data.info)
        // localStorage.setItem('token', JSON.stringify(res.data.info.token))
        toggle();
        // handleRefresh()
      });
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));

    axios
      .put(
        `https://apidevelopment.hari-bhari.com/auth/updateprofile`,
        formState.values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        getUserDetails();

        // setcategories(res.data.info)
        // localStorage.setItem('token', JSON.stringify(res.data.info.token))
        toggle();
        // handleRefresh()
      });
  };

  const getMyAddress = () => {
    // e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));

    axios
      .get(`https://apidevelopment.hari-bhari.com/address`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // setcategories(res.data.info)
        // localStorage.setItem('token', JSON.stringify(res.data.info.token))
        // toggle()
        // handleRefresh()
        setmySavedAddress(res.data?.info);
        toggle();
        setmyModal({ ...mymodal, addressModel: true });
      });
  };
  const handleDeleteAddress = (id) => {
    // e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));

    axios
      .delete(`https://apidevelopment.hari-bhari.com/address/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // setcategories(res.data.info)
        // localStorage.setItem('token', JSON.stringify(res.data.info.token))
        // toggle()
        // handleRefresh()
        setmySavedAddress(res.data?.info);
      });
  };
  const handleEditAddress = (id) => {
    // e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));

    axios
      .put(
        `https://apidevelopment.hari-bhari.com/address/${id}`,
        formState.values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        // setcategories(res.data.info)
        // localStorage.setItem('token', JSON.stringify(res.data.info.token))
        toggle();
        // handleRefresh()
      });
  };

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
            <img src={logoww} height="100" width="100" alt="haribhari" />
          </Link>
          <NavbarToggler onClick={toggleNavbar} />
          <Collapse isOpen={!collapsed} className="main-header" navbar>
            <Nav
              className={
                loginUser
                  ? "ml-auto"
                  : "justify-content-between align-items-center mr-auto mx-auto"
              }
              navbar
            >
              <NavItem className="me-2 my-3">
                <SearchBarComponent placeholder="Search for products" />
              </NavItem>

              {!loginUser ? (
                <NavItem className="me-2">
                  <div>
                    <Button className="px-md-5 my-1" onClick={handleFirst}>
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
                        <Button onClick={handleLogin}>Login</Button>

                        <div className="or">
                          <span></span>
                          <p>or</p>
                          <span></span>
                        </div>
                        <Button className="signup" onClick={handleRegister}>
                          Signup with Email
                        </Button>
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
                            <Input
                              onChange={handleChange}
                              type="text"
                              name="name"
                              id="Name"
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="Email">Email</Label>
                            <Input
                              type="email"
                              onChange={handleChange}
                              name="email"
                              id="Email"
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="Password">Password</Label>
                            <div className="password d-flex">
                              <Input
                                type={"password"}
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

                          <Button onClick={handleOtpVer}>Next</Button>
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
                            <Label for="OTP">Enter OTP</Label>
                            <Input
                              type="number"
                              onChange={handleChange}
                              name="otp"
                              id="OTP"
                            />
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
                            <Label for="examplePassword" className="text-left">
                              Password
                            </Label>
                            <div className="password d-flex">
                              <Input
                                onChange={handleChange}
                                type={mymodal.showEye ? "text" : "password"}
                                name="password"
                              // id={"login_password" + this.props.id}
                              // value={this.state.password}
                              // onChange={(e) => this.onInputChange(e)}
                              />
                              <i
                                className="fa fa-eye"
                                onClick={() =>
                                  setmyModal({
                                    ...mymodal,
                                    showEye: !mymodal.showEye,
                                  })
                                }
                              />
                            </div>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="checkbox"
                                name="remember"
                                onChange={handleChange}
                              />{" "}
                              Remember Me
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

                    <Modal
                      className="forgetPassword"
                      size="md"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      isOpen={mymodal.forgetPassModal}
                      toggle={toggle}

                    >
                      <ModalBody>
                        <Form>
                          <FormGroup>
                            <Label for="Email">Enter Your Email</Label>
                            <Input type="email" onChange={handleChange} name="email" id="Email" />
                          </FormGroup>
                          <Button onClick={() => {

                            toggle();
                            setmyModal({ ...mymodal, otpModal: true });
                          }}>
                            Send OTP
                          </Button>
                        </Form>
                      </ModalBody>
                    </Modal>
                  </div>
                </NavItem>
              ) : (
                <>
                  <NavItem>
                    <NavLink className="vendor my-2 me-2">
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
                      <DropdownToggle nav caret className="me-3 my-3">
                        {" "}
                        Account{" "}
                      </DropdownToggle>
                      <DropdownMenu className="text-center">
                        <DropdownItem
                          onClick={() => {
                            toggle();
                            setmyModal({ ...mymodal, profileInfoModel: true });
                          }}
                        >
                          Profile
                          <Modal
                            centered
                            isOpen={mymodal.profileInfoModel}
                            toggle={toggle}
                            className="white-background"
                            size="md"
                            aria-labelledby="contained-modal-title-vcenter"
                          >
                            <ModalBody>
                              <h2 className="text-center mb-3">Profile</h2>
                              <Form>
                                <FormGroup className="d-flex text-left align-items-center justify-content-around">
                                  <Label>Name :</Label>
                                  <Label>{UserInfo?.name}</Label>
                                </FormGroup>
                                <FormGroup className="d-flex text-left align-items-center justify-content-around">
                                  <Label>Email</Label>
                                  <Label>{UserInfo?.email}</Label>
                                </FormGroup>

                                <FormGroup className="d-flex text-left align-items-center justify-content-around">
                                  <Label> Phone Number:</Label>
                                  <Label>{UserInfo?.role}</Label>
                                </FormGroup>

                                <FormGroup className="d-flex text-left align-items-center justify-content-around">
                                  <Label>Alternative Phone Number:</Label>
                                  <Label>+91 9712453675</Label>
                                </FormGroup>
                              </Form>
                              <Button
                                className="signup"
                                onClick={() => {
                                  setFormState({ values: { ...UserInfo } });
                                  toggle();
                                  setmyModal({
                                    ...mymodal,
                                    userUpdateModel: true,
                                  });
                                }}
                              >
                                Update Profile
                              </Button>
                              <Modal
                                isOpen={mymodal.userUpdateModel}
                                toggle={toggle}
                                size="md"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                              >
                                <ModalBody>
                                  <Form>
                                    <FormGroup className="d-flex text-left align-items-center justify-content-around">
                                      <Label className="">Name :</Label>
                                      {/* <Label>Subhrajit Roy Chowdhury</Label> */}
                                      <input
                                        type="text"
                                        value={formState.values?.name}
                                        onChange={(e) =>
                                          setFormState({
                                            ...UserInfo,
                                            ...formState,
                                            values: { name: e.target.value },
                                          })
                                        }
                                        placeholder="user name"
                                        name=""
                                        id=""
                                      />
                                    </FormGroup>

                                    <FormGroup className="d-flex text-left align-items-center justify-content-around">
                                      <Label className="text-left">Email</Label>
                                      <Label>{UserInfo?.email}</Label>
                                      {/* <input type="email" name="" id="" /> */}
                                    </FormGroup>

                                    <FormGroup className="d-flex text-left align-items-center justify-content-around">
                                      <Label className="text-left">
                                        {" "}
                                        Phone Number:
                                      </Label>
                                      {/* <Label>+91 9784561230</Label> */}
                                      <input
                                        type="text"
                                        value={formState.values?.phone}
                                        onChange={(e) =>
                                          setFormState({
                                            ...UserInfo,
                                            ...formState,
                                            values: { phone: e.target.value },
                                          })
                                        }
                                        name=""
                                        id=""
                                      />
                                    </FormGroup>

                                    {/* <FormGroup className="d-flex text-left align-items-center justify-content-around">
                                                                            <Label className="text-left">Alternative Phone Number:</Label>
                                                                            <Label>+91 9712453675</Label>
                                                                            <input type="number" name="" id="" />
                                                                        </FormGroup> */}
                                  </Form>
                                  <Button
                                    className="m-3"
                                    onClick={handleUpdateUser}
                                  >
                                    Done
                                  </Button>
                                </ModalBody>
                              </Modal>
                              <Button
                                className="signup"
                                onClick={() => {
                                  toggle();
                                  setmyModal({
                                    ...mymodal,
                                    changePassModel: true,
                                  });
                                }}
                              >
                                Change Password
                              </Button>
                              <Modal
                                isOpen={mymodal.changePassModel}
                                toggle={toggle}
                                size="md"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                              >
                                <ModalBody>
                                  <Form className="signupForm">
                                    <FormGroup>
                                      <Label for="OTP">Old Password</Label>
                                      <div className="password d-flex">
                                        <Input
                                          // type={this.state.hidden ? 'text' : 'password'}
                                          name="old_password"
                                          // value={this.state.password}'
                                          onChange={handleChange}
                                        // onChange={(e) => this.onInputChange(e)}
                                        />
                                        <i className="fa fa-eye" />
                                      </div>
                                    </FormGroup>
                                    <FormGroup>
                                      <Label for="OTP">New Password</Label>
                                      <div className="password d-flex">
                                        <Input
                                          type="text"
                                          // type={this.state.hidden ? 'text' : 'password'}
                                          onChange={handleChange}
                                          name="password"
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
                                        name="confirm_password"
                                        id="OTP"
                                        onChange={handleChange}
                                      />
                                    </FormGroup>
                                    <Button onClick={handleResetPass}>
                                      Done
                                    </Button>
                                  </Form>
                                </ModalBody>
                              </Modal>
                            </ModalBody>
                          </Modal>
                        </DropdownItem>

                        <DropdownItem>
                          <Link to="/order-list">My Orders</Link>
                        </DropdownItem>

                        <DropdownItem>
                          <p
                            onClick={() => {
                              getMyAddress();
                            }}
                          >
                            Saved Addresses
                          </p>
                          <Modal
                            isOpen={mymodal.addressModel}
                            toggle={toggle}
                            className="SavedAddress white-background"
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                          >
                            <ModalBody>
                              <Button
                                className="signup px-md-5 my-1 text-left"
                                onClick={() => {
                                  setFormState({ ...formState, values: {} });
                                  toggle();
                                  setmyModal({
                                    ...mymodal,
                                    addAddressModel: true,
                                  });
                                }}
                              >
                                Add New Address
                              </Button>

                              {mySavedAddress?.map((addres, ind) => (
                                <>
                                  <h6>{addres?.address_type}</h6>
                                  <div className="add d-flex align-items-center justify-content-around">
                                    <p>{`${addres?.receiver_name} ${addres?.resident_name} ${addres?.resident_no} `}</p>
                                    <div className="action d-flex justify-content-between">
                                      <Button
                                        className="signup"
                                        onClick={() => {
                                          setFormState({
                                            ...formState,
                                            values: { ...mySavedAddress[ind] },
                                          });
                                          toggle();
                                          setmyModal({
                                            ...mymodal,
                                            addAddressModel: true,
                                          });
                                        }}
                                      >
                                        Edit
                                      </Button>
                                      <Button
                                        className="signup"
                                        onClick={() =>
                                          handleDeleteAddress(addres?._id)
                                        }
                                      >
                                        Delete
                                      </Button>
                                      <input type="checkbox" checked={defaultaddress == addres?._id && true} onClick={() => setDefaultaddress(addres?._id)} />
                                    </div>
                                  </div>
                                </>
                              ))}

                              <Modal
                                className="white-background"
                                size="lg"
                                isOpen={mymodal.addAddressModel}
                                toggle={toggle}
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                              >
                                <ModalBody>
                                  <div className="newAddress d-flex align-items-center justify-content-between">
                                    <div className="new-address-img">
                                      <img
                                        className="location-image"
                                        src={mapimg}
                                        alt=""
                                      />
                                      <div className="loc d-flex text-center align-items-center justify-content-around">
                                        <img
                                          src="assets/images/icons/loc.png"
                                          alt=""
                                        />
                                        <h3>Your Location</h3>
                                      </div>
                                      <p>
                                        Lorem ipsum dolor sit amet. Ut velit
                                        nulla hic ullam dolor non dolorem
                                        voluptatem ea iure rerum et dolores
                                        deserunt eos perspiciatis quia. Sed
                                        nostrum pariatur et placeat vitae et
                                        esse quam id nobis accusamus.
                                      </p>
                                    </div>
                                    <Form className="signupForm">
                                      <h2>Enter Complete Address</h2>
                                      <p>
                                        This allow us to find you easily and
                                        give you timely delivery experience
                                      </p>
                                      <FormGroup>
                                        <Input
                                          value={formState.values.receiver_name}
                                          onChange={handleChange}
                                          type="text"
                                          name="receiver_name"
                                          id=""
                                          placeholder="Reaceiver's Name"
                                        />
                                      </FormGroup>
                                      <FormGroup>
                                        <Input
                                          value={formState.values.resident_name}
                                          onChange={handleChange}
                                          type="text"
                                          name="resident_name"
                                          id=""
                                          placeholder="Flate/House/Office No."
                                        />
                                      </FormGroup>
                                      <FormGroup>
                                        <Input
                                          value={formState.values.resident_no}
                                          onChange={handleChange}
                                          type="text"
                                          name="resident_no"
                                          id=""
                                          placeholder="Street/Society/Office Name."
                                        />
                                      </FormGroup>
                                      <FormGroup>
                                        <Input
                                          value={formState.values?.pin}
                                          onChange={handleChange}
                                          type="number"
                                          name="pin"
                                          id=""
                                          placeholder="Pin Number"
                                        />
                                      </FormGroup>
                                      <FormGroup
                                        tag="fieldset"
                                        className="d-flex justify-content-around"
                                      >
                                        <p>Save address as : &nbsp;</p>
                                        <FormGroup check>
                                          <Label check>
                                            <Input
                                              onChange={handleChange}
                                              type="radio"
                                              value="home"
                                              selected={
                                                formState.values
                                                  ?.address_type == "home"
                                              }
                                              name="address_type"
                                            />{" "}
                                            Home&nbsp;&nbsp;
                                          </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                          <Label check>
                                            <Input
                                              value="work"
                                              selected={
                                                formState.values
                                                  ?.address_type == "work"
                                              }
                                              onChange={handleChange}
                                              type="radio"
                                              name="address_type"
                                            />{" "}
                                            Office
                                          </Label>
                                        </FormGroup>
                                      </FormGroup>
                                      <Button
                                        className="btn SaveAddress"
                                        onClick={(e) => {
                                          formState.values._id
                                            ? handleEditAddress(
                                              formState.values._id
                                            )
                                            : handleAddressForm(e);
                                        }}
                                      >
                                        Save Address
                                      </Button>
                                    </Form>
                                  </div>
                                </ModalBody>
                              </Modal>
                              <p></p>
                              <p></p>
                            </ModalBody>
                          </Modal>
                        </DropdownItem>
                        <DropdownItem>
                          <Link to="/frequently-asked">FAQ's</Link>
                        </DropdownItem>
                        <DropdownItem onClick={handelLogout}>
                          Logout
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>

                  <NavItem className="me-2">
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret className="me-2 my-3">
                        Location &nbsp;
                        <span className="fa fa-map-marker"></span>
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          <span className="fa fa-map-marker"></span>
                          &nbsp;Kolkata, WestBengal, India
                        </DropdownItem>
                        <DropdownItem onClick={() => {
                          getMyAddress();
                        }}>
                          <span class="fa fa-map-marker"></span>&nbsp; Change
                          Your Location
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>
                  <NavItem className="me-2">
                    <NavLink className="px-md-5 my-3">
                      <Link to="/cart-list">
                        Cart &nbsp;<span className="fa fa-shopping-cart"></span>
                        {cartItems.length}
                      </Link>
                    </NavLink>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
