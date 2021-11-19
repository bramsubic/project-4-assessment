import React from "react";

export default function Circles(props) {
  return (
    <div className="Circles">
      <div className={props.select === 1 ? "select" : ""}>1</div>
      <div className={props.select === 2 ? "select" : ""}>2</div>
      <div className={props.select === 3 ? "select" : ""}>3</div>
      <div className={props.select === 4 ? "select" : ""}>4</div>
    </div>
  );
}