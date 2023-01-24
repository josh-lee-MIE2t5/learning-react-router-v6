import axios from "axios";
import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

const getAllurl = "http://swapi.dev/api/people";
const config = { headers: { "Content-type": "application/json" } };

async function getAllCharacters(url, setCharacters) {
  const res = await axios.get(url);
  setCharacters(res.data.results);
}

function Home() {
  const [characters, setCharacters] = useState();
  useEffect(() => {
    getAllCharacters(getAllurl, setCharacters);
  }, []);

  return (
    <div className="home-page">
      <h1>Star Wars Characters</h1>
      {characters &&
        characters.map((c) => <CharacterCard {...c}></CharacterCard>)}
    </div>
  );
}

export default Home;
