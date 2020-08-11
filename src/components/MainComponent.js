import React, { Component } from 'react';
//import components
import NavigationBar from './NavbarComponent/NavbarComponent'; 
import Footer from './FooterComponent/FooterComponent';

class Main extends Component{

    render(){
        return(
            <div>
                <NavigationBar />
                    <br /><br /><br /><br /><br /><br /><br />
                <Footer />
            </div>
        );
    }
}

export default Main; 