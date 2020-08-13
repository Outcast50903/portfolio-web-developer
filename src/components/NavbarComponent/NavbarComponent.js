import React, { Component } from 'react';
//import reactstrap components
import { Navbar, NavbarToggler, Collapse, NavItem, Nav, NavbarBrand } from 'reactstrap';
//import navigation component
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion';

class NavigationBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false 
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    render(){
        return(
            <div>
                <Navbar light className="navbar center" expand="md">
                    <motion.div className="container"
                        initial={{
                            x: -200,
                            opacity: 0
                        }} 
                        animate={{
                            x: 0,
                            opacity: 1 
                        }}
                        transition={{
                            duration: 1
                        }}
                    >
                        <NavbarBrand className="mr-auto">
                            <img src="images/logo.svg" alt="Logo"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link navbar-hover" to="/home">
                                        Inicio
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link navbar-hover" to="/home">
                                        Tecnologias
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link navbar-hover" to="/home">
                                        Contacto
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </motion.div>
                </Navbar>
                <div class="bar one"></div> 
            </div>
        );
    };
}

export default NavigationBar;