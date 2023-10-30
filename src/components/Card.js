import React from "react";
import "./styles/Card.css";

function Card(props) {
  const customClasse = props.className ? props.className : "";
  return (
    <div>
      <article className={customClasse}>
        <div className="article-wrapper">
          <figure>
            <img src={props.image} alt="" />
          </figure>
          <div className="article-body">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            {props.discover ? (
              <a href="#" className="read-more">
                {props.discover}{" "}
                <span className="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            ) : (
              <span />
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

export default Card;
