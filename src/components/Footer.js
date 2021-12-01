import "../styles/footer.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button} from "react-bootstrap"

import { Link } from "react-router-dom";

const Footer = () => {
  return (  
    <footer className="app-footer">
      <Link to="/Mention" className="text-center">Mention légale</Link>
      <Link to="/Legals" className="text-center">CGU et CGV</Link>
      <Link to="/RGPD" className="text-center">RGPD</Link>
      <Link to="/Politique" className="text-center">Politique de confidientalité</Link>
    </footer>
  );
};

export default Footer;