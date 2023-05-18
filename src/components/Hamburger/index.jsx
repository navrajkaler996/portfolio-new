import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import scrollIntoView from "scroll-into-view";

const Hamburger = () => {
  const [clicked, setClicked] = useState(false);

  const [hamburgerClass, setHambugerClass] = useState("hamburger__line");

  useEffect(() => {
    if (clicked) {
      setHambugerClass(hamburgerClass + " hamburger__line--clicked");
    } else {
      setHambugerClass("hamburger__line");
    }
  }, [clicked]);

  const navigate = (id) => {
    const element = document.getElementById(id);
    scrollIntoView(element, {
      time: 2000,
    });
  };

  return (
    <>
      <div className="hamburger" onClick={() => setClicked(!clicked)}>
        <span className={hamburgerClass}></span>
      </div>
      <motion.div
        className="hamburger__menu"
        initial={{ x: 0 }}
        variants={{
          open: {
            x: 0,
            transition: {
              duration: 0.7,
            },
          },
          closed: {
            x: 300,
            transition: {
              duration: 0.5,
            },
          },
        }}
        initial="hidden"
        animate={clicked ? "open" : "closed"}
        transition={{ duration: 1, delay: 0.2 }}>
        <ul className="hamburger__links">
          <li className="hamburger__link">About</li>
          <li className="hamburger__link" onClick={() => navigate("skills")}>
            Skills
          </li>
          <li
            className="hamburger__link"
            onClick={() => navigate("experience")}>
            Experience
          </li>
          <li className="hamburger__link" onClick={() => navigate("projects")}>
            Projects
          </li>
          <li className="hamburger__link" onClick={() => navigate("education")}>
            Education
          </li>
          <li className="hamburger__link" onClick={() => navigate("contactme")}>
            Contact
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Hamburger;
