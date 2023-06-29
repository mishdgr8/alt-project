import React from "react";

function Card(props) {
  return (
    <section id="Hero">
      <div>
        <h1>{props.heading}</h1>
        <p>{props.paragraph}</p>
        <button type="button" class="btn btn-lg btn-light">
          {props.btn}
        </button>
      </div>
    </section>
  );
}

export default Card;
