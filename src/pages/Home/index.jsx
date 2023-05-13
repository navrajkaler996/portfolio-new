import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const text = ["React.js", "Node.js", "MongoDB", "Next.js", "Sass/Less"];

const Home = () => {
  const ref = useRef();

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: ["React.js", "Node.js", "MongoDB", "Next.js", "Sass/Less"],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="home">
      <div className="home__background home__background--top">
        <div className="home__typing-container center-horizontal">
          <span>I work with</span> <br />
          <span ref={ref}></span>
        </div>
        <div className="box-top box-top--home center-horizontal">
          <div className="home__text-container">
            <h1 className="home__welcome-text--1">Navraj S. Kaler</h1>
            <h2 className="home__welcome-text--2">Full-stack web developer</h2>
          </div>
        </div>
      </div>
      <div className="home__background home__background--bottom">
        <div className="box-bottom box-bottom--home center-horizontal">
          <p className="home__bio">
            I am full-stack web developer with total experience of over three
            years. I have worked with three different organisation in different
            roles. I have used latest web technologies such as React.js,
            Next.js, Sass, Tailwind, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
