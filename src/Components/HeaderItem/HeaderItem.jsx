import React from "react";

function HeaderItem(props) {
  return (
    <div className="header-item">
      <h4 className="header-item__title">{props.title}</h4>
      <p className="header-item__description">{props.description}</p>
    </div>
  );
}

export default HeaderItem;
