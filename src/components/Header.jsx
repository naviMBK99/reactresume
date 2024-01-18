import React from "react";
import "./ChangedStyles.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header>
        <div className="header-container">
          <div className="header-photo">
            <img
              src="https://thumbs.dfs.ivi.ru/storage9/contents/4/6/73d32a18fc5a27b6393f987eedfd63.jpg"
              alt=""
            />
            <div className="header-text">
              <h2>Dwayne Johnson</h2>
              <p>Film actor and entrepreneur</p>
            </div>
          </div>
          <div className="navlink">
            <NavLink to="/chronology">
              <p>Life Chronology</p>
            </NavLink>
            <NavLink to="/films">
              <p>Films</p>
            </NavLink>
            <NavLink to="/skills">
              <p>Skills</p>
            </NavLink>
            {/* <NavLink to="/contact">
              <p>Contact</p>
            </NavLink> */}
            <NavLink to="/rickmorty">
              <p>Rick&Morty</p>
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
