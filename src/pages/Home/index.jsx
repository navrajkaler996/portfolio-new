import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { transitions, variants } from "../../utils/framerMotion";

const Home = () => {
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

  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="home" id="home">
      <motion.div
        className="home__background home__background--top"
        variants={variants.homeBackgroundTop}
        initial="hidden"
        animate={mainControls}
        transition={transitions.homeBackgroundTop}
        viewport={{ once: true }}>
        <motion.div
          className="home__typing-container center-horizontal"
          variants={{
            hidden: { opacity: 0, y: -70 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.75, delay: 1 }}
          viewport={{ once: true }}>
          <span>I work with</span> <br />
          <span ref={ref}></span>
        </motion.div>
        <motion.div
          className="box-top box-top--home center-horizontal"
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}>
          <div className="home__text-container">
            <h1 className="home__welcome-text--1">Navraj S. Kaler</h1>
            <h2 className="home__welcome-text--2">Full-stack web developer</h2>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="home__background home__background--bottom"
        variants={variants.homeBackgroundBottom}
        initial="hidden"
        animate={mainControls}
        transition={transitions.homeBackgroundbottom}
        viewport={{ once: true }}>
        <motion.div
          className="box-bottom box-bottom--home center-horizontal"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}>
          <p className="home__bio">
            I am full-stack web developer with total experience of over three
            years. I have worked with three different organisation in different
            roles. I have used latest web technologies such as React.js,
            Next.js, Sass, Tailwind, and more.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
