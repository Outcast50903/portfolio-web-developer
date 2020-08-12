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
                            <Col md="12" lg="6">
                                <motion.div  
                                    initial={{
                                        y: -250,
                                        opacity: 0
                                    }} 
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    transition={{
                                        delay: 0.25
                                    }}
                                >
                                    <img src="images/codeThinking.svg" alt="Logotipo" />
                                </motion.div>
                            </Col>
                            <Col md="12" lg="6">
                                <div>
                                    <motion.h1 
                                        initial={{
                                            opacity: 0
                                        }}
                                        animate={{ 
                                            fontSize: 45,
                                            opacity: 1 
                                        }}
                                        transition={{
                                            delay: 0.02
                                        }}
                                    >
                                        Hola, Mi nombre es Diego Garcia me especielizo en:
                                    </motion.h1>
                                    <Typical
                                        steps={[
                                            'Desarrollo Front-End', 1000,
                                            'Desarrollo Back-End', 1000,  
                                            'Desarrollo en Wordpress', 1500
                                        ]}
                                        loop={Infinity}
                                    >
                                        <p className="styles_typicalWrapper__1_Uvh"></p>
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