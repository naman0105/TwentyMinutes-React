import React, { Component } from 'react';
import './style.css'
import { Jumbotron, Container, Row, Col } from 'reactstrap';

class About extends Component{
    render(){
        return (
            <div className="HowToUse" style={{backgroundColor:"#624CAB"}}>
                <Jumbotron fluid style={{margin:0}}>
                    <Container fluid>
                        <Row>
                            <Col>
                                <h3 className="display-7">Mannual Mode</h3>
                                <p className="lead">                        
                                    Mannal Mode sounds an Alarm after 20 minutes. You will have to come back to the website and Reset the  timer or start excercise timer which will start the timer for 20 seconds for excercise period.
                                </p>
                            </Col>
                            <Col>
                            <h3 className="display-7">Automatic Mode</h3>
                                <p className="lead">                        
                                   Automatic Mode beeps a sound once when excercise period starts and will automatically beep after another 20 seconds when the excercise period has ended. This Cycle just keeps on repeating. 
                                </p>                            
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default About;