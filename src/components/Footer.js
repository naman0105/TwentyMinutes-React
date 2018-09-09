import React, {Component} from 'react'
import { Container, Row, Col, Label, Input, Form, FormGroup, Button } from 'reactstrap';
import './style.css'

class Footer extends Component{
    render(){
        return(
            <div className="Footer" style={{backgroundColor:'#e2e3e5'}}>
                <Container>
                    <Row>
                        <Col>
                            Contact Info::
                             Naman Bansal
                        </Col>
                        <Col>
                            Write to us:
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
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;