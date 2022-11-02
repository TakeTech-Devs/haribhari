import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavItem, NavbarToggler, Collapse, NavLink, Nav, NavbarBrand, Button,  Modal, ModalBody } from 'reactstrap';
import SearchBar from './SearchBarComponent';
import Login from './LoginComponent';
import Signup from './SignupComponent';
import OTP from './OtpComponent';
import ForgetPassword from './ForgetPasswordComponent';

class Header extends Component {

	constructor(props){
		super(props);
		this.state = {
			isNavOpen : false
        };

        this.toggleNav = this.toggleNav.bind(this);
		this.state = {
			modal:false
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle(){
		this.setState({
			modal: !this.state.modal
		});
	}

	toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
	}

	render(){

		return (
			<div style={{
				display: 'block', padding: 30
			}}>
				<Navbar color="white fixed-top" light expand="md">
					<NavbarBrand href="/"><img src="assets/images/Logo 1st.png" height="100" width="100" alt="haribhari" /></NavbarBrand>
					<NavbarToggler  onClick={this.toggleNav}></NavbarToggler>
					<Collapse isOpen={this.state.isNavOpen} navbar>
						<Nav className="justify-content-around align-items-center mr-auto mx-auto" navbar>
							<NavItem className="me-2">
                    	        <SearchBar placeholder="Search for products"/>  
							</NavItem>
							<div className="nav-btns">
								<div>
									<NavItem className="vendor my-1 me-2">
										<select name="vendor" id="">
											<option value="#" default selected>Select Vendor</option>
											<option value="Retail" >Retail</option>
											<option value="Wholesaler" >Wholesaler</option>
										</select>
									</NavItem>
											
									<NavItem className='me-2'>
										<div>
											<Button className='px-md-5 my-1' onClick={this.toggle}>Login</Button>
											<Modal size='sm' aria-labelledby="contained-modal-title-vcenter" centered isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
												<ModalBody>
													<Button>Login</Button>
													
													<div className="or">
														<span></span>
														<p>or</p>
														<span></span>
													</div>
													<NavLink href="">Signup with Email</NavLink>
												</ModalBody>
											</Modal>
										</div>
									</NavItem>
								</div>
								<div>
									<NavItem className='me-2'>
										<NavLink href="#" className='px-md-5 my-1'> Location<span className="fa fa-map-marker"></span></NavLink>
									</NavItem>
									<NavItem className='me-2'>
										<NavLink href="#" className='px-md-5 my-1'> Add to Cart<span className="fa fa-shopping-cart"></span></NavLink>
									</NavItem>
								</div>
							</div>
						</Nav>
					</Collapse>
				</Navbar>
			</div >
		);
	}
}

export default Header;
