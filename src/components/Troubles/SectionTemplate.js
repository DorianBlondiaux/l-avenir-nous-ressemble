import React from "react";

function Trouble(props) {
    console.log(props);
  return (
    <div className="troubleFlex">
        <div>
          <h2 className="header1">{props.name}</h2>
          <p dangerouslySetInnerHTML={{ __html: props.body }}></p>
        </div>
        {props.imageDescription && props.imageUrl ? <img className="image1" alt={props.imageDescription} src={props.imageUrl}/> : <span/> }
      </div>
  );
}

export default Trouble;
