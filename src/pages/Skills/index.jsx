import React, { useEffect, useRef } from "react";
import HTML_icon from "../../assets/html-5.png";
import CSS_icon from "../../assets/css-3.png";
import JS_icon from "../../assets/js.png";
import MongoDB_icon from "../../assets/mongodb.png";
import Node_icon from "../../assets/node.png";
import PHP_icon from "../../assets/php.png";
import React_icon from "../../assets/physics.png";
import Redux_icon from "../../assets/redux.png";
import Sass_icon from "../../assets/sass.png";
import Typescript_icon from "../../assets/typescript.png";
import Vite_icon from "../../assets/vite.png";
import Webpack_icon from "../../assets/webpack.png";
import { motion, useAnimation, useInView } from "framer-motion";
import { transitions, variants } from "../../utils/framerMotion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="skills" id="skills">
      <motion.div
        className="skills__background skills__background--top"
        variants={variants.otherBackgroundTop}
        initial="hidden"
        animate={mainControls}
        transition={transitions.skillBackgroundTop}
        viewport={{ once: true }}>
        <motion.div
          ref={ref}
          className="box-top box-top--projects center-horizontal"
          variants={variants.otherBox}
          initial="hidden"
          animate={mainControls}
          transition={transitions.otherBox}
          viewport={{ once: true }}>
          <span>Skills</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="skills__container"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}>
        <div className="skills__image-container">
          <img src={React_icon} alt="html-icon" className="skills__image" />
          <span className="skills__image-text">React.js</span>
        </div>
        <div className="skills__image-container">
          <img src={Redux_icon} alt="html-icon" className="skills__image" />
          <span className="skills__image-text">Redux</span>
        </div>
        <div className="skills__image-container">
          <img src={HTML_icon} alt="html-icon" className="skills__image" />
          <span className="skills__image-text">HTML5</span>
        </div>
        <div className="skills__image-container">
          <img src={CSS_icon} alt="html-icon" className="skills__image" />
          <span className="skills__image-text">CSS3</span>
        </div>
        <div className="skills__image-container">
          <img src={JS_icon} alt="html-icon" className="skills__image" />
          <span className="skills__image-text">JavaScript</span>
        </div>
        <div className="skills__image-container">
          <img src={MongoDB_icon} alt="html-icon" className="skills__image" />
          <span className="skills__image-text">MongoDB</span>
        </div>
        <div className="skills__image-container">
          <img src={Node_icon} alt="html-icon" className="skills__image" />
          <span className="skills__image-text">Node.js</span>
        </div>
        <div className="skills__image-container">
          <img src={PHP_icon} alt="html-icon" className="skills__image" />
          <span className="skills__image-text">PHP</span>
        </div>
        <div className="skills__image-container">
          <img src={Sass_icon} alt="html-icon" className="skills__image" />
          <span className="skills__image-text">Sass</span>
        </div>
        <div className="skills__image-container">
          <img
            src={Typescript_icon}
            alt="html-icon"
            className="skills__image"
          />
          <span className="skills__image-text">TypeScript</span>
        </div>
        <div className="skills__image-container">
          <img src={Vite_icon} alt="html-icon" className="skills__image" />
          <span className="skills__image-text">Vite</span>
        </div>
        <div className="skills__image-container">
          <img src={Webpack_icon} alt="html-icon" className="skills__image" />
          <span className="skills__image-text">Webpack</span>
        </div>
      </motion.div>

      <motion.div
        className="skills__background skills__background--bottom"
        variants={variants.otherBackgroundBottom}
        initial="hidden"
        animate={mainControls}
        transition={transitions.skillBackgroundBottom}
        viewport={{ once: true }}></motion.div>
    </div>
  );
};

export default Skills;
