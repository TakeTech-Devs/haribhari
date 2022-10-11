import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Placeholder } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import SearchBar from "./SearchBarComponent";
// import ProductData from "../data.json";

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen : false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <>
                <Navbar className="headerNavbar" dark expand="md">
                    <div className="container">
                        <NavbarToggler dark onClick={this.toggleNav} /> 
                        <NavbarBrand className="mr-auto" href="/"><img src="assets/images/Logo 1st.png" height="100" width="100" alt="HariBHari" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="elements">
                                <NavItem className="link">
                                    <NavLink className="nav-lin" to="">
                                    <SearchBar placeholder="Search for products"/>  {/* add  data={ProductData} after placeholder for search design  */}
                                    </NavLink>
                                </NavItem>
                                <NavItem className="vendor">
                                    <select name="vendor" id="">
                                        <option value="#" default selected>Select Vendor</option>
                                        <option value="Retail" >Retail</option>
                                        <option value="Wholesaler" >Wholesaler</option>
                                    </select>
                                </NavItem>
                                <NavItem className="link">
                                    <NavLink className="nav-link" to="#"><span className="fa fa-sign-in">Login</span></NavLink>
                                </NavItem>
                                <NavItem className="link">
                                    <NavLink className="nav-link" to="#"><span className="fa fa-map-marker">Location</span></NavLink>
                                </NavItem>
                                <NavItem className="link">
                                    <NavLink className="nav-link" to="#"><span className="fa fa-shopping-cart">Add to cart</span></NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </>
        );
    }
}

export default Header; 