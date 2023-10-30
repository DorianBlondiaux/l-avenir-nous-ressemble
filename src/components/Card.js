import React from "react";
import "./styles/Card.css"

function Card(props) {
  return (
      <article>
        <div class="article-wrapper">
          <figure>
            <img src={props.image} alt="" />
          </figure>
          <div class="article-body">
            <h2>{props.title}</h2>
            <p>{props.content}
            </p>
            <a href="#" class="read-more">
              {props.discover} <span class="sr-only">about this is some title</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
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
          </div>
        </div>
      </article>
  );
}

export default Card;
