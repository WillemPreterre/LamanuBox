import React from 'react';
import Camera from "../assets/camera.jpg"
import Service from "../assets/service.jpg"
import House from "../assets/house.jpg"
import { Button, Image, Col, Container, Row } from "react-bootstrap"
import "../styles/home.scss";

import { Link } from "react-router-dom";


const Home = () => {
    return (

        <Container>
            <Row className="row-home-intro-text">
                <Col>
                <p className="text-home-intro text-center">
                laManuBox, leader du self stockage en France, vous propose des box de stockage et de rangement dans les sous sols de notre école. A l’occasion d’un déménagement, de travaux ou tout simplement pour entreposer vos affaires encombrantes, le garde meuble laManuBox est la solution idéale. Pour votre location de box, plusieurs tailles sont disponibles : de 2 jusqu'à 16 m², selon vos besoins d’espace.
                </p>
                </Col>
            
            </Row>
            <Button className="button-calcul d-block mx-auto">
                <Link to="/Calcul">Calculer la place !</Link>
            </Button>

            <Row className="text-home-desc">
                <Col>
                    <Image src={Camera} alt="camera" fluid />
                    <p className="text-home-presentation text-center">Emplacements de stockage sont sécurisés par vidéosurveillance, avec alarme vol et incendie,</p>

                </Col>
                <Col>
                    <Image src={Service} alt="service" fluid />
                    <p className="text-home-presentation text-center" >Badge personnalisé donne une accessibilité permanente sur le site</p>

                </Col>
                <Col>
                    <Image src={House} alt="house" fluid />
                    <p className="text-home-presentation text-center">Calculez la taille de votre box grâce à notre outil ! </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;