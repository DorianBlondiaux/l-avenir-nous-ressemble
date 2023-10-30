import React from "react";
import Card from "./Card";

function CqlProposeTemplate(props) {
  const customClasse = props.className ? props.className : "";
  return (
    <div className={customClasse}>
      <div className="nousProposons">
        <h2 className="header2">{props.title}</h2>

        <section class="articles">
          <Card
            image="https://lavenirnousressemble.fr/wp-content/uploads/2023/09/ronald-felton-6c86TCPmNRQ-unsplash1920x1080.webp"
            title="Soutien scolaire"
            content="Les élèves bénéficient d’une aide personnalisée et adaptée à leur fonctionnement. Grâce à notre expérience, nous avons élaboré des outils et diverses méthodes que nous continuons d’améliorer."
            discover="Découvrez en plus"
          ></Card>
          <Card
            image="https://lavenirnousressemble.fr/wp-content/uploads/2023/09/pexels-julia-m-cameron-41453551080-1.webp"
            title="Aide au devoir"
            content="Les cours se déroulent au domicile de l’élève ou du bénévole selon les préférences de chacun. Nous nous adaptons à tous. Cela, en plus de réduire notre empreinte carbone, de recréer des liens dans les différents quartiers."
            discover="Découvrez en plus"
          ></Card>
          <Card
            image="https://lavenirnousressemble.fr/wp-content/uploads/2023/09/kenny-eliason-zFSo6bnZJTw-unsplash1080.webp"
            title="Sensibilisation"
            content="Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings."
            discover="Découvrez en plus"
          ></Card>
        </section>
      </div>
    </div>
  );
}

export default CqlProposeTemplate;
