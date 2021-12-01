import React from 'react';
import "../styles/propos.scss";
import Building from "../assets/building.jpg"

import { Row, Col, Container, Image } from 'react-bootstrap'

const Propos = () => {
    return (
        <div>
            <Container>
                <Row className="row-propos">
                    <Col className="text-propos">
                        <h2>Qui sommes nous</h2>

                        <p>Fondée en 2016, LA MANU, L’École des métiers du Numérique, forme des spécialistes sur les métiers du digital, capables de s’adapter en permanence aux besoins des entreprises et au monde à venir.            </p>

                        <p>À la pointe d’une nouvelle génération d’école, LA MANU mise prioritairement sur l’excellence et la valorisation des talents, grâce à un enseignement en présentiel très qualitatif, des méthodes pédagogiques innovantes, une interaction permanente avec les entreprises, avec à la clé, un diplôme reconnu sur le marché du travail.            </p>

                        <p> LA MANU s’adresse à deux grandes catégories d’acteurs :

                            Les salariés et les demandeurs d’emploi qui souhaitent se perfectionner ou assurer une reconversion professionnelle
                            Les étudiants qui souhaitent poursuivre leurs études sur les métiers du numérique            </p>
                        <p>Depuis peu nous avons comment la location de box dans le sous sol de notre école </p>
                    </Col>
                    <Col>                    <Image src={Building} alt="Building" fluid />        </Col>

                </Row>
            </Container >
        </div>

    );
};

export default Propos;