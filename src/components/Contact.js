import React from 'react'
import SectionTemplate from "./Troubles/SectionTemplate";
import ContactForm from './ContactForm';
import NumUrgence from './NumUrgence';

function Contact(props){
    const name = "Nous contacter";
    const body = `</p>Your content goes here. Edit or remove this text inline or in the module Content settings. You can also
     style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>
     `;
    const imageDescription = "Enfant jouant dehors";
    const imageUrl =
      "https://lavenirnousressemble.fr/wp-content/uploads/2023/09/pexels-yan-krukau-5792901-scaled.webp";
  
    return (
      <div className="paddingTop">
        <SectionTemplate
          name={name}
          body={body}
          imageDescription={imageDescription}
          imageUrl={imageUrl}
        ></SectionTemplate>

        <ContactForm/>

        <NumUrgence/>
      </div>
    );
}

export default Contact;