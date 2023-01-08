import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { useAuth } from '../context/AuthContex';
const CategoryNav = () => {
  const { categoryAll } = useAuth();

  return (
    <div className='pt-5'>
      <Navbar className='category-nav mt-5' light expand="md">
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="products-nav" navbar>

            {
              categoryAll?.slice(0, 4)?.map(cate => (
                <NavItem>
                  <NavLink className='active'>{cate?.name}</NavLink>
                </NavItem>
              ))
            }


            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>

                {
                  categoryAll?.map(cate => (

                    <DropdownItem>
                      {cate?.name}
                    </DropdownItem>
                  ))
                }




              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default CategoryNav