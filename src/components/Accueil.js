import React from "react";
import Card from "./Card";
import Button from "./Button";

function Accueil(props) {
  return (
    <div className="accueilDiv">
      <div className="anrBackground">
        <div className="anrContent1">
          <h1 className="craftyH1">L’AVENIR NOUS RESSEMBLE</h1>
          <div className="anrIntro">
            <p>
              L’AVENIR NOUS RESSEMBLE est une association de soutien scolaire et
              d’aide aux devoirs pour les élèves du CP à la Terminale ayant un
              ou des « troubles invisibles » créée le 31 janvier 2022.
            </p>
            <p>
              Quand nous utilisons les termes « troubles invisibles » nous
              parlons de troubles et/ou difficultés qui ne se voient pas mais
              qui peuvent impacter le parcours scolaire d’un élève.
            </p>
            <p>
              Par exemple, les élèves HPI (Haut Potentiel Intellectuel), TDA
              (Trouble Déficitaire de l’attention), Hyperactifs, DYS
              (dyslexique, dyscalculique, dyspraxique, dysphasique,
              dysorthographique, dysgraphique), avec une phobie scolaire,
              victimes de harcèlement et bien d’autres.
            </p>
          </div>
          <div className="center">
            <Button className="nousContacter" content="Nous Contacter"></Button>
          </div>
        </div>
      </div>

      <div className="queFaitOn">
        <img
          className="kak"
          decoding="async"
          fetchpriority="high"
          width="1280"
          height="960"
          src="https://lavenirnousressemble.fr/wp-content/uploads/2023/09/WhatsApp-Image-2023-07-11-a-11.50.webp"
          alt="Kimberley - Présidente de l'association L'Avenir Nous Ressemble"
          title="WhatsApp-Image-2023-07-11-a-11.50"
          srcset="https://lavenirnousressemble.fr/wp-content/uploads/2023/09/WhatsApp-Image-2023-07-11-a-11.50.webp 1280w, https://lavenirnousressemble.fr/wp-content/uploads/2023/09/WhatsApp-Image-2023-07-11-a-11.50-980x735.webp 980w, https://lavenirnousressemble.fr/wp-content/uploads/2023/09/WhatsApp-Image-2023-07-11-a-11.50-480x360.webp 480w"
        />

        <div>
          <h2 className="header1">Que fait-on ?</h2>
          <div>
            <p>
              Nous proposons de l’accompagnement du CP à la Terminale pour les
              élèves ayant une approche différente, ceux pour lesquels le
              système scolaire n’est pas adapté, afin qu’ils ne soient pas/plus
              en échec scolaire.
            </p>
            <p>
              Exemples : Hyperactif, souffrant de trouble de l’attention,
              dyslexique, haut potentiel, phobie scolaire, victime de
              harcèlement scolaire…
            </p>{" "}
            <p>
              Nous comptons 11 bénévoles actifs dont 5 professeurs particuliers.
            </p>{" "}
            <p>
              Nous avons commencé les cours particuliers et les autres actions
              en septembre 2022. Une vingtaine d’élèves a déjà pu être
              accompagnée (cours particuliers, aide aux devoirs à l’école
              élémentaire Paul Bert et au centre social des 3 Quartiers et
              ateliers théâtres confondus).
            </p>
          </div>
          <Button content="Découvrez nos actions"></Button>
        </div>
      </div>

      <div className="nousProposons">
        <h2 className="header2">Nous proposons</h2>

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

      <div className="queFaitOn">
        <img
          className="kak"
          decoding="async"
          fetchpriority="high"
          width="1280"
          height="960"
          src="https://lavenirnousressemble.fr/wp-content/uploads/2023/09/WhatsApp-Image-2023-07-11-a-11.50.webp"
          alt="Kimberley - Présidente de l'association L'Avenir Nous Ressemble"
          title="WhatsApp-Image-2023-07-11-a-11.50"
          srcset="https://lavenirnousressemble.fr/wp-content/uploads/2023/09/WhatsApp-Image-2023-07-11-a-11.50.webp 1280w, https://lavenirnousressemble.fr/wp-content/uploads/2023/09/WhatsApp-Image-2023-07-11-a-11.50-980x735.webp 980w, https://lavenirnousressemble.fr/wp-content/uploads/2023/09/WhatsApp-Image-2023-07-11-a-11.50-480x360.webp 480w"
        />

        <div>
          <h2 className="header1">Qui sommes-nous ?</h2>
          <div>
            <p>
              Your content goes here. Edit or remove this text inline or in the
              module Content settings. You can also style every aspect of this
              content in the module Design settings and even apply custom CSS to
              this text in the module Advanced settings.
            </p>
          </div>
          <div className="center">
          <Button content="Découvrir l'association"></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
