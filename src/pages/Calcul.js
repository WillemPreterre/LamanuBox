import React from 'react';
import "../styles/calcul.scss";
import {Link} from "react-router-dom";

import { Container, Col, Row, Form, Button, Card, ListGroup } from 'react-bootstrap';
const Calcul = () => {
    return (
        <div>
            <Container>
                <Row classname="row-calcul">
                    <Col >
                        <Form >
                            <Form.Group className="mb-3" controlId="formNom">
                                <Form.Label>Nom de l'objet</Form.Label>
                                <Form.Control type="string" placeholder="Entrer Nom" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formHauteur">
                                <Form.Label>Hauteur (m)</Form.Label>
                                <Form.Control type="int" placeholder="Entrer Hauteur" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formLongueur">
                                <Form.Label>Longeur (m)</Form.Label>
                                <Form.Control type="int" placeholder="Entrer Longueur" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formLargeur">
                                <Form.Label>Largeur (m)</Form.Label>
                                <Form.Control type="int" placeholder="Entrer Largeur" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                            <Link to="/Result">Résultat</Link>
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        <div>
                            <Card >
                                <Card.Header>Rangement</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Table | 3m3</ListGroup.Item>
                                    <ListGroup.Item>Garde-manger | 5m3</ListGroup.Item>
                                    <ListGroup.Item>table de ping pong | 7m3</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Calcul;