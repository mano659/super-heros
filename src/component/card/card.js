import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.hero.id}?size=200x200`}
      ></img>
      <h2>{props.hero.name}</h2>
      <p>{props.hero.email}</p>
    </div>
  );
};

export default Card;
