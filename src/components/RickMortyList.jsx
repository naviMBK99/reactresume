import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../helpers/const";
import { Link } from "react-router-dom";
import "./ChangedStyles.css";
const RickMortyList = () => {
  const [character, setCharacter] = useState([]);
  const getCharacter = async () => {
    const { data } = await axios(API);
    console.log(data.results);
    setCharacter(data.results);
  };
  useEffect(() => {
    getCharacter();
  }, []);
  return (
    <div className="cartoon-characters" style={{ backgroundColor: "#020230" }}>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Cartoon Characters
      </h1>
      {character.map((elem) => (
        <Link to={`/rickmorty/${elem.id}`} key={elem.id}>
          <li
            className="li"
            style={{
              listStyle: "none",
              color: "white",
              textDecoration: "none",
              border: "1px solid azure",
              width: "400px",
              textAlign: "center",
              marginLeft: "350px",
              marginBottom: "20px",
            }}
          >
            {elem.name}
          </li>
        </Link>
      ))}
    </div>
  );
};

export default RickMortyList;
