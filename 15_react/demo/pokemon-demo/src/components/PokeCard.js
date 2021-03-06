import React from "react";
import { Link } from 'react-router-dom'

//this page makes the single card - card


function PokeCard(props) {
  console.log(props);
  return (
    <article className="card" style={{maxWidth: "300px"}}>
      <div className="cardImage">
        <figure className="image">
          <Link to={`/pokemon/${props.id}`}>
            <img src={props.image} alt={props.name} />
          </Link>
        </figure>
      </div>
      <div className="card-header">
        <h3>#{props.id} {props.name}</h3>
      </div>
    </article>
  );
}

export default PokeCard;
