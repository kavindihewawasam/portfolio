import React from "react";
import "./styles/Main.css";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import se from "./assets/amazon.jpg";
const Main = () => {
  return (
    <div className="main">
      <div className="main_container">
        <div className="main_content">
          <div className="text">
            <p>Hello Everyone !</p>
            <h1>I'm Kavindi Hewawasam</h1>
            <p>Front-end Developer & Designer</p>
            <div className="icons">
              <Twitter className="icon" />
              <Instagram className="icon" />
              <Facebook className="icon" />
              <LinkedIn className="icon" />
            </div>
            <div className="buttons">
              <button>See Me</button>
              <button>Hire Me</button>
            </div>
          </div>
        </div>

        <div className="main_img">
          <img src={se} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Main;
