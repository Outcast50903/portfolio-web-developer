import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import Typical from 'react-typical';
import { motion } from 'framer-motion';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            isVisible: true
        }
    }

    render(){

        return(
            <div className="home">
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col xs="12" sm="12" md="6">
                                <img src="images/codeThinking.svg" alt="Imagen" />
                            </Col>
                            <Col xs="12" sm="12" md="6">
                                <div>
                                    <p>Hola, Mi nombre es Diego Garcia me especielizo en:</p>
                                    <Typical
                                        steps={[
                                            'Desarrollo Front-End', 1000,
                                            'Desarrollo Back-End', 1000,  
                                            'Desarrollo en Wordpress', 1500,
                                            'Concimientos de Git', 1000
                                        ]}
                                        loop={Infinity}
                                    >
                                        <p className="test"></p>
                                    </Typical>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Home;