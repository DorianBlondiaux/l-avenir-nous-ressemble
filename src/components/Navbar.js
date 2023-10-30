import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import TroubleLink from "./Troubles/TroubleLink";

function Navbar(props) {
  console.log(props);
  return (
    <div className="cm-e-menu">
      <img
        className="logo"
        width
        alt="Logo Asso"
        srcset="https://lavenirnousressemble.fr/wp-content/uploads/2023/08/LogoLANR_carre-scaled.webp"
      />
      <ul>
        <li className="topmenu">
          <Link className="link" to="/">
            Accueil
          </Link>
        </li>
        <li className="topmenu">
          <div className="link">Les Troubles</div>
          <ul className="submenu">
            <li className="block">
              <span className="link">Les troubles DYS</span>
              <ul className="submenu">
                {/* Géneration des liens pour les troubles dys */}
                <TroubleLink troubles={props.troubles} tag="dys"></TroubleLink>
              </ul>
            </li>
            <li className="divider"></li>
            <li>
              <span className="link">TDA/H</span>
              <ul className="submenu">
                {/* Géneration des liens pour les troubles tdah */}
                <TroubleLink troubles={props.troubles} tag="tdah"></TroubleLink>
              </ul>
            </li>
            <li className="divider"></li>
            {/* Géneration des liens pour les autres troubles */}
            <TroubleLink troubles={props.troubles} tag="other"></TroubleLink>
          </ul>
        </li>
        <li className="topmenu">
          <Link className="link" to="/cql-propose">
            Ce que l'on propose
          </Link>
        </li>
        <li className="topmenu">
          <Link className="link" to="/qui-sommes-nous">
            Qui sommes-nous ?
          </Link>
        </li>
        <li className="topmenu">
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
