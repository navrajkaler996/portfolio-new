import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__navigation">
        <ul className="header__links">
          <li className="header__link">Home</li>
          <li className="header__link">About</li>
          <li className="header__link">Skills</li>
          <li className="header__link">Experience</li>
          <li className="header__link">Education</li>
          <li className="header__link">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
