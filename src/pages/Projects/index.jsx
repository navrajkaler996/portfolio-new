import React from "react";
import Project1Mobile from "../../assets/project__1--mobile.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__background projects__background--top"></div>
      <div className="projects__container">
        <img
          src={Project1Mobile}
          alt=""
          className="projects__image center-horizontal"
        />

        <div className="projects__image-description center-horizontal"></div>
      </div>
      <div className="projects__background projects__background--bottom"></div>
    </div>
  );
};

export default Projects;
