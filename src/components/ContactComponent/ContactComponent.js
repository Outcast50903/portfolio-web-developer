import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Lottie from 'react-lottie';
import animationData from '../../json/animation.json';
import { motion } from 'framer-motion';

const defaultOptions = {
    loop: true,
    autoplay: true, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
};

class Contact extends Component {
    render() {
        return (
            <div id="contact" className="contact">
                <Container>
                    <Row>
                        <Col className="contact-center text-center" xs="10" md="6">
                            <h1>Tecnologias usadas</h1><br/>
                            <p>Tecnologias usadas para desarrollar este proyecto</p>
                            <div className="tools">
                                <Row>
                                    <Col>
                                        <motion.img src="images/react.svg" alt="ReactJS"
                                            initial={{
                                                x:-500,
                                                y: -500,
                                                opacity: 0
                                            }}

                                            animate={{
                                                x: 0,
                                                y: 0,
                                                rotate: [0, 270, 360, 270, 0],
                                                opacity: 1,
                                            }}

                                            transition={{
                                                delay: 1,
                                                ease: "easeInOut",
                                                duration: 2
                                            }}
                                        />
                                        <motion.img src="images/sass.svg" alt=""
                                            initial={{
                                                x: 500,
                                                opacity: 0
                                            }}

                                            animate={{
                                                x: 0,
                                                y: 0,
                                                opacity: 1,
                                            }}

                                            transition={{
                                                delay: 1,
                                                ease: "easeInOut",
                                                duration: 2
                                            }}
                                        />
                                        <motion.img src="images/git.svg" alt=""
                                            initial={{
                                                y: 500,
                                                opacity: 0
                                            }}

                                            animate={{
                                                y: 0,
                                                borderRadius: ["50%", "40%", "0%", "50%", "20%"],
                                                opacity: 1,
                                            }}

                                            transition={{
                                                delay: 1,
                                                ease: "easeInOut",
                                                duration: 2
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md="6">
                            <Lottie className="animation"
                                options={{
                                    animationData: animationData, 
                                    ...defaultOptions 
                                }} 

                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Contact;
