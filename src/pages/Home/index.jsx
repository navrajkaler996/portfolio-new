import React, { useEffect, useRef, useState } from "react";

const text = ["React.js", "Node.js", "MongoDB", "Next.js", "Sass/Less"];

const Home = () => {
  const ref = useRef();
  // const [typingText, setTypingText] = useState();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      ref.current = text[index];
      if (index + 1 === text.length) {
        setIndex(0);
      } else setIndex(index + 1);
    }, 2000);
  }, [ref.current]);

  console.log(ref.current);
  return (
    <div className="home">
      <div className="home__background home__background--top">
        <div className="home__typing-container center-horizontal">
          <h1>I work with</h1>
          <h1 className="home__typewriter">{ref.current}</h1>
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
