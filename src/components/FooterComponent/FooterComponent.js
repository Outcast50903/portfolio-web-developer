import React from 'react';
import { Container } from 'reactstrap';

function Footer(){
    return(
        <div className="footer">
            <Container>
                <div className="center">
                    <a href="#">
                        <div className="icon center">
                        <i className="fa fa-linkedin fa-2x"></i>
                        </div>
                    </a>
                    <a href="#">
                        <div className="icon center">
                        <i className="fa fa-github fa-3x"></i>
                        </div>
                    </a>
                    <a href="#">
                        <div className="icon center">
                        <i className="fa fa-github fa-3x"></i>
                        </div>
                    </a>
                </div>
                <div className="center">
                    <p className="author">No se que poner acà</p>
                </div>
            </Container>
        </div>
    );
}

export default Footer;