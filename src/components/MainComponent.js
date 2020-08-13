import React, { Component } from 'react';
//import components
import NavigationBar from './NavbarComponent/NavbarComponent'; 
import Footer from './FooterComponent/FooterComponent';
import Home from './HomeComponent/HomeComponent';
import About from './AboutComponent/AboutComponent';


class Main extends Component{

    render(){

        return(
            <div>
                <NavigationBar />
                    <Home />
                    <About />
                <Footer />
            </div>
        );
    }
}

export default Main; 