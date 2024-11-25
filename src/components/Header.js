import React, { useState } from "react";
import "./styles/Header.css";
import { Close, MenuBookOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false); // Corrected the destructuring

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <header className="header">
      <div className="header_logo">
        <h1>simplilearn</h1>
      </div>

      <nav className={`navbar ${active ? "active" : ""}`}>
        <div className="closed">
          <Close className="close" onClick={toggleMenu} />
        </div>
        <ul>
          {["Home", "About", "Portfolio", "Blog", "Contact"].map(
            (item, idx) => (
              <li key={idx}>
                <Link to={`/${item.toLowerCase()}`}>
                  <b>{item}</b>
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>

      <div className="changer">
        <MenuBookOutlined className="menu" onClick={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
