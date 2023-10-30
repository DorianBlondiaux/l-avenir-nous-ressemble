import React from "react";
import "../styles/Trouble.css";
import SectionTemplate from "./SectionTemplate";

function Trouble(props) {
  return (
    <div>
      <SectionTemplate
        name={props.trouble.name}
        body={props.trouble.intro.join("\n")}
        imageDescription={props.trouble.imageDescription}
        imageUrl={props.trouble.imageUrl}
      ></SectionTemplate>

      <SectionTemplate
        name={props.trouble.definitionTitle}
        body={props.trouble.definitionContent.join("\n")}
      ></SectionTemplate>

      <SectionTemplate
        name={props.trouble.accompagnementTitle}
        body={props.trouble.accompagnementContent.join("\n")}
      ></SectionTemplate>
    </div>
  );
}

export default Trouble;
