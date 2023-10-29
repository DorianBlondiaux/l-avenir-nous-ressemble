import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
   
    <div className="cm-e-menu">
    <ul>
        <li className="topmenu">
        <Link className="link" to="/">Accueil</Link>
        </li>
        <li className="topmenu">
            <div className="link">Les Troubles</div>
            <ul className="submenu">
                <li>
                    <a>Les troubles DYS</a>
                    <ul className="submenu">
                        <li><a>Dyslexie</a></li>
                        <li className="divider"></li>
                        <li><a>Dysorthographie</a></li>
                        <li className="divider"></li>
                        <li><a>Dyspraxie</a></li>
                        <li className="divider"></li>
                        <li><a>Dysphasie</a></li>
                        <li className="divider"></li>
                        <li><a>Discaculie</a></li>
                        <li className="divider"></li>
                        <li><a>Dysgraphie</a></li>
                    </ul>
                </li>
                <li>
                    <a>TDA/H</a>
                    <ul className="submenu">
                        <li><a>TDA</a></li>
                        <li className="divider"></li>
                        <li><a>Hyperactif</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li className="topmenu">
        <Link className="link" to="/cql-propose">Ce que l'on propose</Link>
        </li>
        <li className="topmenu"><Link className="link" to="/qui-sommes-nous">Qui sommes-nous ?</Link></li>
        <li className="topmenu"><Link className="link" to="/contact">Contact</Link></li>
    </ul>
</div>
  );
}

export default Navbar;
