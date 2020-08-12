import React, { Component } from 'react';
//import reactstrap components
import { Navbar, NavbarToggler, Collapse, NavItem, Nav, NavbarBrand } from 'reactstrap';
//import navigation component
import { NavLink } from 'react-router-dom'

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
                    <div className="container">
                        <NavbarBrand className="mr-auto">
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
                                        Habilidades
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link navbar-hover" to="/home">
                                        Proyectos
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link navbar-hover" to="/home">
                                        Contacto
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        </NavbarBrand>
                    </div>
                </Navbar>
                <div class="bar one"></div> 
            </div>
        );
    };
}

export default NavigationBar;