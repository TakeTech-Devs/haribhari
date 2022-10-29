import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
	ModalHeader,
	ModalBody
} from 'reactstrap';
import SearchBar from './SearchBarComponent';

class Header extends Component {

	constructor(props){
		super(props);
		
		this.state = {
			isNavOpen : false
        };
        this.toggleNav = this.toggleNav.bind(this);
	// }
	// constructor(props){
	// 	super(props);
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
					<NavbarBrand className="col-12 col-sm-1"href="/"><img src="assets/images/Logo 1st.png" height="100" width="100" alt="haribhari" /></NavbarBrand>
					{/* <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} /> */}
					<NavbarToggler onClick={this.toggleNav}></NavbarToggler>
					{/* <Collapse isOpen={isOpen} navbar> */}
					<Collapse isOpen={this.state.isNavOpen} navbar>
						<Nav className="justify-content-around align-items-center mr-auto mx-auto" navbar>
							<NavItem className="me-2">
								{/* <NavLink className='searchBar' href="#"> */}
                    	                <SearchBar placeholder="Search for products"/>  {/* add  data=	{ProductData} after placeholder for search design */} 
                                
                            	{/* </NavLink> */}
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
											<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
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
