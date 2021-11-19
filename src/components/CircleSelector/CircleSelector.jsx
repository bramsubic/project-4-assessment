import React from "react";

export default function CircleSelector(props) {
  return (
    <div className="CircleSelector">
      {props.select === 1 ? (<button className="select">CIRCLE 1 SELECTED</button>) : (
        <button onClick={() => props.handleClick(1)}> SELECT CIRCLE 1</button>
      )}
      {props.select === 2 ? (<button className="select">CIRCLE 2 SELECTED</button>) : (
        <button onClick={() => props.handleClick(2)}> SELECT CIRCLE 2 </button>
      )}
      {props.select === 3 ? (<button className="select">CIRCLE 3 SELECTED</button>) : (
        <button onClick={() => props.handleClick(3)}> SELECT CIRCLE 3 </button>
      )}
      {props.select === 4 ? (<button className="select">CIRCLE 4 SELECTED</button>) : (
        <button onClick={() => props.handleClick(4)}>SELECT CIRCLE 4 </button>
      )}
    </div>
  );
}
