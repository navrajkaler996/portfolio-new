import React from "react";
import { styles } from "./styles";

const Home = () => {
  return (
    <div className="home">
      <div className="home__background home__background--top">
        <div className="box-top box-top--home center-horizontal">
          <div className="home__text-container">
            <h1 className="home__welcome-text--1">Navraj S. Kaler</h1>
            <h2 className="home__welcome-text--2">Full-stack web developer</h2>
          </div>
        </div>
      </div>
      <div className="home__background home__background--bottom">
        <div
          className="box-bottom box-bottom--home center-horizontal"
          style={styles.circle}>
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
