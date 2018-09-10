import React, { Component } from 'react';
import './style.css'
import { Jumbotron, Container } from 'reactstrap';

class About extends Component{
    render(){
        return (
            <div className="About" style={{backgroundColor:"#624CAB"}}>
                <Jumbotron fluid style={{margin:0}}>
                    <Container fluid>
                        <h1 className="display-4">About The Website</h1>
                        <p className="lead">                        
                            This Website is based on 20-20-20 rule.<br />
                            The rule says <b>"Every 20 minutes, look at something 20 feet away for 20 seconds"</b><br />
                            In today's world, everybody is busy on their laptops and phones.<br />
                            This puts tremendous strain on eyes. This rule helps to prevent sore eyes and keeps them healthy
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default About;