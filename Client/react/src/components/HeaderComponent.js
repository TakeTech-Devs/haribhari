import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	NavLink,
	Nav,
	NavbarBrand
} from 'reactstrap';
import SearchBar from './SearchBarComponent';

function App() {

	// Collapse isOpen State
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div style={{
			display: 'block', padding: 30
		}}>
			<Navbar color="white fixed-top" light expand="md">
				<NavbarBrand className="ms-5"href="/"><img src="assets/images/Logo 1st.png" height="100" width="100" alt="haribhari" /></NavbarBrand>
				<NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="justify-content-around align-items-center mr-auto mx-auto" navbar>
						<NavItem className="me-2">
							{/* <NavLink className='searchBar' href="#"> */}
                                    <SearchBar placeholder="Search for products"/>  {/* add  data={ProductData} after placeholder for search design */} 
                                
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
									<NavLink href="#" className='px-md-5 my-1'> Login</NavLink>
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

export default App;
