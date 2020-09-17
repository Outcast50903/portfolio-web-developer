import React, { Component } from 'react';
//import reactstrap components
import { Navbar, NavbarToggler, Collapse, NavItem, Nav, NavbarBrand, NavLink } from 'reactstrap';
//import navigation component
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
            <div id="navbar" className="fixed-top color">
                <Navbar light className="navbar center" expand="md">
                    <motion.div className="navigation"
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
                            <motion.img id="logo" src="images/logo.svg" alt="Logo"
                                initial={{
                                    opacity: 0,
                                    x: -500
                                }}
                                animate={{
                                    opacity: 1,
                                    rotate: [0, 270, 360, 270, 0],
                                    x: 0
                                }}
                                transition={{
                                    delay: 2,
                                    ease: "easeInOut",
                                    duration: 1
                                }}
                            />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse className="coll" isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link navbar-hover" href="#home">
                                        Inicio
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link navbar-hover" href="#about">
                                        Tecnologias
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link navbar-hover" href="#contact">
                                        Contacto
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <div className="bar two"></div> 
                        </Collapse>
                    </motion.div>
                </Navbar>
                <div className="bar one"></div> 
            </div>
        );
    };
}

export default NavigationBar;