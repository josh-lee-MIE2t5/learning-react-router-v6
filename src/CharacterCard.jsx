import { Link } from "react-router-dom";
import "./CharacterCard.css";

function CharacterCard(props) {
  return (
    <div className="Character-card">
      <Link path="/details">
        <h2>{props.name}</h2>
      </Link>
      <p>Height: {props.height}cm</p>
      <p>Gender: {props.gender}</p>
      <p>Born: {props.birth_year}</p>
    </div>
  );
}

export default CharacterCard;
