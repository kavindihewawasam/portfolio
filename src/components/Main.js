import React from "react";
import "./styles/Main.css";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
