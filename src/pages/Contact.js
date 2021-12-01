import React from 'react';
import "../styles/contact.scss";
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="contact-first-value mb-3" controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter Last name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFirstEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Votre Demande</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="j'ai lu et j'accepte la politique de confidentialité "href="/Politique" />
                        </Form.Group>
                        <p><Link to="/Politique">Voir la Politique de confidientalité</Link></p>

                        <Button type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;