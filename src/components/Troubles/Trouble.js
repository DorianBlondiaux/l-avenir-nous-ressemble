import React from "react";
import "../styles/Trouble.css";

function Trouble(props) {
  return (
    <div>
      <div className="troubleFlex">
        <div>
          <h2 className="header1">{props.trouble.name}</h2>
          <p dangerouslySetInnerHTML={{ __html: props.trouble.intro.join('\n') }}></p>
        </div>
        <img
          className="image1"
          alt={props.trouble.description}
          src={props.trouble.imageUrl}
        />
      </div>

      <div className="troubleFlex">
        <div>
          <h2 className="header1">{props.trouble.definitionTitle}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: props.trouble.definitionContent.join('\n'),
            }}
          ></p>
        </div>
      </div>

      <div className="troubleFlex">
        <div>
          <h2 className="header1">{props.trouble.accompagnementTitle}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: props.trouble.accompagnementContent.join('\n'),
            }}
          ></p>
        </div>
      </div>

    </div>
  );
}

export default Trouble;
