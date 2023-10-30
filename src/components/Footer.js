import React from 'react'
import "./styles/Footer.css"

function Footer(props){

    return (
        <footer className="footer">
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul className="menu">
      <li className="menu__item"><a className="menu__link" href="#">Accueil</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Mention légale</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Cookies</a></li>

    </ul>
    <p>© COPYRIGHT L’Avenir Nous Ressemble 2023</p>
  </footer>
    )
}

export default Footer;