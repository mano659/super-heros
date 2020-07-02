import React from "react";
import "./card-list.css";
import Card from "../card/card";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.users.map((hero) => (
        <Card hero={hero} key={hero.id}></Card>
      ))}
    </div>
  );
};

export default CardList;
