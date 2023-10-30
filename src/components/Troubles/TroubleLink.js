import React from "react";
import { Link } from "react-router-dom";

function TroubleLink(props) {
  return (
    
    props.troubles
        .filter((trouble) => trouble.tag === props.tag)
        .map((trouble, index) => (
          <div>
           {index > 0 ? <li className="divider"></li> : <span/>}
            <li>
              <Link className="link" to={trouble.path}>
                {trouble.name}
              </Link>
            </li>
          </div>
        ))

  );
}

export default TroubleLink;
