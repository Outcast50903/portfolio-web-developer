import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion';

class About extends Component {
    render() {
        return (
            <motion.div id="about" className="about"
                initial={{
                    x: -1000,
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    delay: 1,
                    duration: 1
                }}
            >
                <Container>
                    <motion.h1 className="text-center"
                        initial={{
                            x: -1000,
                            y: -300,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            x: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1.5
                        }}
                    >
                        Tecnologias
                    </motion.h1>
                    <motion.hr className="gradient" 
                            initial={{
                                width: '0%'
                            }}
                            animate={{
                                width: '10%'
                            }}
                            transition={{
                                delay: 2,
                                duration: 1
                            }}
                    />
                    <Row>
                        <Col md="12" lg="6" className="text-center">
                            <div className="tecnology">
                                <p>HTML</p>
                                <div className="barra">
                                    <motion.div className="bar"
                                        initial={{
                                            width: '0%'
                                        }}
                                        animate={{
                                            width: '90%'
                                        }}

                                        transition={{
                                            delay: 2,
                                            duration: 1
                                        }}
                                    >90%</motion.div>
                                </div>
                            </div>
                            <div className="tecnology">
                                <p>CSS y SCSS</p>
                                <div className="barra">
                                    <motion.div className="bar"
                                        initial={{
                                            width: '0%'
                                        }}
                                        animate={{
                                            width: '80%'
                                        }}
                                        transition={{
                                            delay: 2.1,
                                            duration: 1
                                        }}
                                    >80%</motion.div>
                                </div>
                            </div>
                            <div className="tecnology">
                                <p>Bootstrap</p>
                                <div className="barra">
                                    <motion.div className="bar"
                                        initial={{
                                            width: '0%'
                                        }}
                                        animate={{
                                            width: '80%'
                                        }}
                                        transition={{
                                            delay: 2.2,
                                            duration: 1
                                        }}
                                    >80%</motion.div>
                                </div>
                            </div>
                            <div className="tecnology">
                                <p>Wordpress</p>
                                <div className="barra">
                                    <motion.div className="bar"
                                        initial={{
                                            width: '0%'
                                        }}
                                        animate={{
                                            width: '70%'
                                        }}
                                        transition={{
                                            delay: 2.3,
                                            duration: 1
                                        }}
                                    >70%</motion.div>
                                </div>
                            </div>
                            <div className="tecnology">
                                <p>Javascript</p>
                                <div className="barra">
                                    <motion.div className="bar"
                                        initial={{
                                            width: '0%'
                                        }}
                                        animate={{
                                            width: '70%'
                                        }}
                                        transition={{
                                            delay: 2.4,
                                            duration: 1
                                        }}
                                    >70%</motion.div>
                                </div>
                            </div>
                            <div className="tecnology">
                                <p>React JS</p>
                                <div className="barra">
                                    <motion.div className="bar"
                                        initial={{
                                            width: '0%'
                                        }}
                                        animate={{
                                            width: '50%'
                                        }}
                                        transition={{
                                            delay: 2.5,
                                            duration: 1
                                        }}
                                    >50%</motion.div>
                                </div>
                            </div>
                            <div className="tecnology">
                                <p>Redux</p>
                                <div className="barra">
                                    <motion.div className="bar"
                                        initial={{
                                            width: '0%'
                                        }}
                                        animate={{
                                            width: '40%'
                                        }}
                                        transition={{
                                            delay: 2.6,
                                            duration: 1
                                        }}
                                    >40%</motion.div>
                                </div>
                            </div>
                        </Col>
                        <Col md="12" lg="6">
                            <motion.img src="images/frontEnd.svg" alt="Front End" 
                                initial={{
                                    scale: .1,
                                    opacity: 0
                                }}
                                animate={{
                                    scale: 1,
                                    opacity: 1
                                }}
                                transition={{
                                    delay: 2,
                                    duration: 1
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        )
    }
}

export default About;
