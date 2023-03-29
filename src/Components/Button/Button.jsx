import React from "react";

function Button(props) {
  return <button className={props.classes}>{props.title}</button>;
}

export default React.memo(Button);
