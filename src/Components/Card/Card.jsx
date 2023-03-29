import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="card">
      <div className="card__left">
        <img src={props?.img} alt={props?.name} />
      </div>
      <div className="card__right">
        <span className="card__right__counter">{props?.count}</span>
        <Link className="card__right__link" to="/">
          {props?.title}
        </Link>
        <p className="card__right__description">{props?.description}</p>
      </div>
    </div>
  );
}

export default Card;
