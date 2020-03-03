import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card" onClick={() => props.handleClick(props.id)}>
      <div className="img-container">
        <div
          role="img"
          aria-label="click item"
        />
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
      </div>
    </div>
  );
}


export default Card;