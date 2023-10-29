import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="navbar">
      <li key="2">
        <Link to="/contact">Contact</Link>
      </li>
      <li key="1">
        <Link to="/qui-sommes-nous">Qui sommes-nous ?</Link>
      </li>
      <li key="1">
        <Link to="/cql-propose">Ce que l'on propose</Link>
      </li>
      <div className="dropdown">
        <button className="dropbtn">
          Les Troubles
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <li key="0">
        <Link to="/">Accueil</Link>
      </li>
    </ul>
  );
}

export default Navbar;
