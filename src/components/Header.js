// Appel fiche scss
import "../styles/header.scss";
// Appel pour pouvoir utiliser bootsrap 
import { Navbar, Container } from "react-bootstrap"
// Appel pour utiliser le Link
import { Link } from "react-router-dom";

const Header = () => {
  return (

    // <header className="app-header">

    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Link to="/"><h1>LaManuBox</h1> </Link>
          <Link to="/Calcul">Calcule ta box </Link>
          <Link to="/Propos">Qui sommes nous</Link>
          <Link to="/Contact">Contact</Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>

    // </header>
  );
};

export default Header;