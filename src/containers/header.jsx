import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap"

import Logo from '../img/leaves-nursery-logo.png'
import '../css/header.css'

class App extends Component {
    render() {
      return (
        <div>
        <div>
          <Navbar collapseOnSelect>
          {/* <Navbar > */}
            <Navbar.Header>
              <Navbar.Brand>
                <img src={Logo} />
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>

            <Navbar.Collapse activeKey="1" onSelect={k => this.handleSelect(k)} >
              
              <Nav pullRight >
                
                <NavItem eventKey="1" href="#">
                  <NavLink to='/'>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem eventKey="2" href="#">
                  <NavLink to='/plants'>
                    Plants
                  </NavLink>
                </NavItem>
                <NavItem eventKey="4" href="#">
                  <NavLink to='/contact'>
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>

              
            </Navbar.Collapse>
          </Navbar>
          
           
        </div>
        
      </div>

      );
    }
  }
  
  export default App;
  