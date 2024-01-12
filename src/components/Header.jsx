import React from "react";
import "./ChangedStyles.css";
const Header = () => {
  return (
    <div>
      <header>
        <div class="header-container">
          <div class="header-photo">
            <img
              src="https://thumbs.dfs.ivi.ru/storage9/contents/4/6/73d32a18fc5a27b6393f987eedfd63.jpg"
              alt=""
            />
            <div class="header-text">
              <h2>Dwayne Johnson</h2>
              <p>Film actor and entrepreneur</p>
            </div>
          </div>
          <div class="header-nav">
            <nav>
              <ul>
                <li>
                  <a href="#chronology">Life Chronology</a>
                </li>
                <li>
                  <a href="#films_series">Films</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
