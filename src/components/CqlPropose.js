import React from "react";
import SectionTemplate from "./Troubles/SectionTemplate";
import CqlProposeTemplate from "./CqlproposeTemplate";

function CqlPropose(props) {

    const name = "Que proposons-nous ?";
  const body = `</p>L’élève n’a pas besoin d’avoir un diagnostic ou une reconnaissance handicap pour bénéficier de nos services.
    Nous faisons différents entretiens avec lui et ses parents/aidants pour déterminer s’il a besoin d’un suivi particulier
     avec l’un de nos bénévoles.</p>
   `;
   const imageDescription = "Enfant travaillant sur PC";
   const imageUrl = "https://lavenirnousressemble.fr/wp-content/uploads/2023/09/pexels-julia-m-cameron-41453551080.webp";

  return (
    <div className="paddingTop">
      <SectionTemplate
        name={name}
        body={body}
        imageDescription={imageDescription}
        imageUrl={imageUrl}
      ></SectionTemplate>
      <CqlProposeTemplate className="color2" title="Notre mission"/>
    </div>
  );
}

export default CqlPropose;
