import React from "react";
import Instagram from "./images/instagram.png";
import Twitter from "./images/twitter.png";
import Youtube from "./images/youtube.png";
import "./ChangedStyles.css";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-content" id="contact"></div>
        <div className="footer-content">
          <div className="social-icons">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} alt="Twitter" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Youtube} alt="Youtube" />
            </a>
          </div>
          <div className="contact-info">
            <p>Contact:</p>
            <p>Email: dwayne@example.com</p>
            <p>Phone: +1 123-456-7890</p>
          </div>
        </div>
        <p>&copy; 2023 Maatkulova Bayan Suluu's copyright</p>
      </footer>
    </div>
  );
};

export default Footer;
