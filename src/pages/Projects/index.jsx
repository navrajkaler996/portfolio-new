import React, { useState } from "react";
import Project1Mobile from "../../assets/project__1--mobile.jpg";

const Projects = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="projects">
      <div className="projects__background projects__background--top">
        <div className="box-top box-top--projects center-horizontal">
          <span>Projects</span>
        </div>
      </div>

      <div className="projects__container">
        <img
          src={Project1Mobile}
          alt=""
          className="projects__image center-horizontal"
        />

        <div className="projects__image-description center-horizontal">
          {!toggle && (
            <div className="project-details">
              <p className="project-name">Immigrant marketplace</p>
              <p className="project-tech">
                Made using React.js, Express.js, Node.js, MongoDB, Sass,
                Socket.io
              </p>
            </div>
          )}

          {toggle && (
            <ul className="project-list">
              <li>A user can register as a seller, buyer, or both.</li>
              <li>
                As a buyer, user can check latest listings such as rentals,
                mattresses, and vehicles
              </li>
              <li>As a buyer, user can start a chat with the seller.</li>
              <li>As a seller, user can add new listings.</li>
              <li>As a seller, user can chat with the buyer.</li>
              <li>
                A user, which register as both seller and buyer, can switch the
                modes.
              </li>
            </ul>
          )}

          <div className="projects__button-container">
            <button className="btn"> Check Live</button>
            <button className="btn" onClick={() => setToggle(!toggle)}>
              View more
            </button>
          </div>
        </div>
      </div>
      {/* <div className="projects__background projects__background--bottom"></div> */}
    </div>
  );
};

export default Projects;
