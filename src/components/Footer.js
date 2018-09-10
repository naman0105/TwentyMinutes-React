import React, {Component} from 'react'
import { Container, Row, Col, Label, Input, Form, FormGroup, Button,
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Jumbotron}
    from 'reactstrap';
import './style.css'

class Footer extends Component{
    render(){
        return(
            <div className="Footer" style={{backgroundColor:'#624CAB'}}>
                <Container>
                    <Row>
                        <Col>
                            Contact Info::
                             Naman Bansal
                        </Col>
                        <div className="vl"></div>
                        <Col>
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