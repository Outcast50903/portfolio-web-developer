import React, { Component } from 'react';
//Import router components
import { Switch, Route, Redirect } from 'react-router-dom';
//import components
import NavigationBar from './NavbarComponent/NavbarComponent'; 
import Footer from './FooterComponent/FooterComponent';
import Home from './HomeComponent/HomeComponent';


class Main extends Component{

    render(){
        
        const HomePage = () => {
            return(
                <Home />
            );
        }

        return(
            <div>
                <NavigationBar />
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Redirect to="/home" />
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main; 