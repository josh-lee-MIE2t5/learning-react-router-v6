import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

async function getCharacter(url, setCharacter) {
  const res = await axios.get(url);
  setCharacter(res.data);
}

function Details() {
  const { id } = useParams();
  const url = `https://swapi.dev/api/people/${id}`;

  const [character, setCharacter] = useState();

  useEffect(() => {
    getCharacter(url, setCharacter);
  }, []);

  return (
    <div className="details-page">
      {character ? (
        <>
          {" "}
          <h1>Name: {character.name}</h1>
          <p>Gender: {character.gender}</p>
          <p>Mass: {character.mass}kg</p>
          <p>Height: {character.height}cm</p>
          <p>Eye Color: {character.eye_color}</p>
          <p>Hair color: {character.hair_color}</p>
          <p>Skin color: {character.skin_color}</p>
          <p>Born : {character.birth_year}</p>
          <p>Created: {character.created}</p>
          <p>Edited: {character.edited}</p>
        </>
      ) : (
        <span>fetching</span>
      )}
    </div>
  );
}

export default Details;
