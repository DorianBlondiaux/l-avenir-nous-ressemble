import React from 'react'
import { Link } from "react-router-dom";

function Navbar(){

    return (
        <ul className="navbar">
            <li key="0"><Link to="/">Accueil</Link></li>
        </ul>
    )
}

export default Navbar;