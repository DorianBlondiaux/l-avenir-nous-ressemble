import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <div className="cm-e-menu">
        <img className="logo"
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
            <li>
              <span className="link">Les troubles DYS</span>
              <ul className="submenu">
                <li>
                  <Link className="link" to="/dyslexie">
                    Dyslexie
                  </Link>
                </li>
                <li className="divider"></li>
                <li>
                  <Link className="link" to="/dysorthographie">
                    Dysorthographie
                  </Link>
                </li>
                <li className="divider"></li>
                <li>
                  <a>Dyspraxie</a>
                </li>
                <li className="divider"></li>
                <li>
                  <a>Dysphasie</a>
                </li>
                <li className="divider"></li>
                <li>
                  <a>Discaculie</a>
                </li>
                <li className="divider"></li>
                <li>
                  <a>Dysgraphie</a>
                </li>
              </ul>
            </li>
            <li>
              <span className="link">TDA/H</span>
              <ul className="submenu">
                <li>
                  <a>TDA</a>
                </li>
                <li className="divider"></li>
                <li>
                  <a>Hyperactif</a>
                </li>
              </ul>
            </li>

            <li>
              <Link className="link" to="/hpi">
                HPI
              </Link>
            </li>
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
