/**
 * note: you can use the props in a class component as long as you use the this key. such as this.props.title
 */
import React from "react";
const First = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};
export default First;
