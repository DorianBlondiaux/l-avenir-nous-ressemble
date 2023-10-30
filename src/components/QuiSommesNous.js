import React from 'react'
import SectionTemplate from "./Troubles/SectionTemplate";
import Card from "./Card";

function QuiSommesNous(props){

    const name = "Qui sommes-nous ?";
    const body = `</p>L’AVENIR NOUS RESSEMBLE est une association de soutien scolaire et d’aide aux devoirs pour les élèves du CP
     à la Terminale ayant un ou des « troubles invisibles » créée le 31 janvier 2022.</p>
     <p>Quand nous utilisons les termes « troubles invisibles » nous parlons de troubles et/ou difficultés qui ne se voient pas
      mais qui peuvent impacter le parcours scolaire d’un élève. Par exemple, les élèves HPI (Haut Potentiel Intellectuel),
       TDA (Trouble Déficitaire de l’attention), Hyperactifs, DYS (dyslexique, dyscalculique, dyspraxique, dysphasique, dysorthographique,
         dysgraphique), avec une phobie scolaire, victimes de harcèlement et bien d’autres.</p>
     `;
    const imageDescription = "Enfant travaillant sur PC";
    const imageUrl =
      "https://lavenirnousressemble.fr/wp-content/uploads/2023/09/pexels-julia-m-cameron-41453551080.webp";
    
      const name2 = "Que faisons-nous";
      const body2 = `</p>Your content goes here. Edit or remove this text inline or in the module Content settings. You can also
       style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>
     `;
  
    return (
      <div className="paddingTop">
        <SectionTemplate
          name={name}
          body={body}
          imageDescription={imageDescription}
          imageUrl={imageUrl}
        ></SectionTemplate>

        <SectionTemplate
        className="color2"
        name={name2}
        body={body2}
      ></SectionTemplate>

        <section class="articles">
          <Card
            image="https://lavenirnousressemble.fr/wp-content/uploads/2023/08/Firefly-photo-de-profil-femme-12.jpg"
            title="Kimberley"
            content="Présidente de L’Avenir Nous Ressemble"
            className="color2"
          ></Card>
          <Card
            image="https://lavenirnousressemble.fr/wp-content/uploads/2023/08/Firefly-photo-de-profil-femme-12.jpg"
            title="Kimberley"
            content="Présidente de L’Avenir Nous Ressemble"
            className="color2"
          ></Card>
          <Card
            image="https://lavenirnousressemble.fr/wp-content/uploads/2023/08/Firefly-photo-de-profil-femme-12.jpg"
            title="Kimberley"
            content="Présidente de L’Avenir Nous Ressemble"
            className="color2"
          ></Card>
          <Card
            image="https://lavenirnousressemble.fr/wp-content/uploads/2023/08/Firefly-photo-de-profil-femme-12.jpg"
            title="Kimberley"
            content="Présidente de L’Avenir Nous Ressemble"
            className="color2"
          ></Card>
          <Card
            image="https://lavenirnousressemble.fr/wp-content/uploads/2023/08/Firefly-photo-de-profil-femme-12.jpg"
            title="Kimberley"
            content="Présidente de L’Avenir Nous Ressemble"
            className="color2"
          ></Card>
          <Card
            image="https://lavenirnousressemble.fr/wp-content/uploads/2023/08/Firefly-photo-de-profil-femme-12.jpg"
            title="Kimberley"
            content="Présidente de L’Avenir Nous Ressemble"
            className="color2"
          ></Card>
        </section>

      </div>
    );
}

export default QuiSommesNous;