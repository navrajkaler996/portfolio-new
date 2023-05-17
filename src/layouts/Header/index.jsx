import React from "react";
import scrollIntoView from "scroll-into-view";

const Header = () => {
  const navigate = (id) => {
    const element = document.getElementById(id);
    scrollIntoView(element, {
      time: 2000,
    });
  };
  return (
    <header className="header">
      <nav className="header__navigation">
        <ul className="header__links">
          <li className="header__link">About</li>
          <li className="header__link" onClick={() => navigate("skills")}>
            Skills
          </li>
          <li className="header__link" onClick={() => navigate("experience")}>
            Experience
          </li>
          <li className="header__link" onClick={() => navigate("projects")}>
            Projects
          </li>
          <li className="header__link" onClick={() => navigate("education")}>
            Education
          </li>
          <li className="header__link" onClick={() => navigate("contactme")}>
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
