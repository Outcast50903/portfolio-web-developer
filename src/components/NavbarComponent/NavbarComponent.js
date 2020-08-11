import React, { Component } from 'react';
//import reactstrap components
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav } from 'reactstrap';

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
            <Navbar dark className="navbar">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="logo mr-auto" href="/">
                        <img src="" 
                            alt="Portafolio"
                        />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    };
}

export default NavigationBar;