import React, {Component} from 'react'
import { Container, Row, Col, Label, Input, Form, FormGroup, Button,
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Jumbotron}
    from 'reactstrap';
import './style.css'
import { GoMarkGithub } from "react-icons/go"
import { FaLinkedin } from "react-icons/fa"

class Footer extends Component{
    render(){
        return(
            <div className="Footer" style={{backgroundColor:'#624CAB'}}>
                <Container>
                    <Row>
                        <Col>
                            <Container  style={{margin:50}}>
                                <Row>
                                    <a href="https://github.com/naman0105">
                                     <GoMarkGithub size="4em" color="white"></GoMarkGithub>
                                    </a><br></br>
                                </Row>
                                <Row>
                                    <a href="https://www.linkedin.com/in/naman-bansal/">
                                        <FaLinkedin size="4em" color="white"></FaLinkedin>
                                    </a>
                                </Row>
                            </Container>
                        </Col>
                        <div className="vl"></div>
                        <Col>
                            <Container>
                                <Row style={{color:'white', align:'center', margin:50}}>
                                    <h3 className="mx-auto" >Developed By:</h3><br />    
                                    <h4>Naman Bansal<br />
                                        naman0105@gmail.com<br />

                                    </h4>
                                </Row>
                            </Container>
                        </Col>
                        <div className="vl"></div>
                        <Col>
                            <Container id="mail">
                            <Card >
                            <CardTitle>Write To Us</CardTitle>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label>Email Id:</Label>
                                        <Input name="email" type="email"></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Message:</Label>
                                        <Input name="" type="textarea"></Input>
                                    </FormGroup>
                                    <Button>Submit</Button>
                                </Form>
                            </CardBody>
                            </Card>     
                            </Container>                           
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;