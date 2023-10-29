import React from 'react'

function Footer(props){

    return (
        <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="#">Accueil</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Mention légale</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Cookies</a></li>

    </ul>
    <p>© COPYRIGHT L’Avenir Nous Ressemble 2023</p>
  </footer>
    )
}

export default Footer;