import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../helpers/const";

const RickMortyItem = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState("");
  const getCharacter = async () => {
    const { data } = await axios(`${API}/${id}`);

    setCharacter(data);
  };
  useEffect(() => {
    getCharacter();
  }, [id]);
  return (
    <div className="container-character">
      <h1 className="character-name">{character.name}</h1>
      <span className="character-gender">{character.gender}</span>
      <span className="character-gender">{character.species}</span>
      <img src={character.image} alt="" />
    </div>
  );
};

export default RickMortyItem;
