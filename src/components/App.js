import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Calcul from "../pages/Calcul";
import Result from "../pages/Result";
import Propos from "../pages/Propos";
import Politique from "../pages/Politique";
import Mention from "../pages/Mention";
import Legals from "../pages/Legals";
import RGPD from "../pages/RGPD";
import Contact from "../pages/Contact";
import "../styles/app.scss";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Result' element={<Result />} />
          <Route path='/Calcul' element={<Calcul />} />
          <Route path='/Propos' element={<Propos />} />
          <Route path='/Mention' element={<Mention />} />
          <Route path='/Politique' element={<Politique />} />
          <Route path='/Legals' element={<Legals />} />
          <Route path='/RGPD' element={<RGPD />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;