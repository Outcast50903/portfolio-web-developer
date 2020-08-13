import React from 'react';
import { Container } from 'reactstrap';
import posed from 'react-pose';

const Icons = posed.div({
    hoverable: true,
    pressable: true,
    init: {
       scale: 1,
       boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    hover: {
       scale: 1.2,
       boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
    },
    press: {
       scale: 1.1,
       boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
    }     
});

const Author = posed.div({
    draggable: 'x',
    dragBounds: { left: '-10%', right: '10%' }
});

function Footer(){
    return(
        <div>
            <div className="footer">
                <Container>
                    <div className="center">
                        <a href="https://www.linkedin.com/in/diego-garc%C3%ADa-a8942b1a7/">
                            <Icons className="icon center">
                                <i className="fa fa-linkedin fa-2x"></i>
                            </Icons>
                        </a>
                        <a href="https://github.com/Outcast50903">
                            <Icons className="icon center">
                                <i className="fa fa-github fa-3x"></i>
                            </Icons>
                        </a>
                    </div>
                    <Author className="center">
                        <p className="author">No se que poner acà</p>
                    </Author>
                </Container>
            </div>
        </div>
    );
}

export default Footer;