import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="education" id="education">
      <motion.div
        ref={ref}
        className="education__background education__background--top"
        variants={{
          hidden: { borderRadius: 0, height: "100vh" },
          visible: {
            borderRadius: "0 0 300px 300px",
            height: "10rem",
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}>
        <motion.div
          className="box-top box-top--projects center-horizontal"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
            },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}>
          <span>Education</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="education__container"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}>
        <div className="experience__line education__line center-horizontal center-vertical education__line--vertical">
          <div className="education__flag">
            {" "}
            <span className="education__flag-circle">&nbsp;</span>
            <span className="education__flag-text">2024 </span>
          </div>
          <div className="education__text-container education__text-container--1">
            <span className="education__text">
              <span style={{ textTransform: "uppercase", fontWeight: 700 }}>
                {" "}
                PG-Diploma in Web development
              </span>
              <br />
              University of Winnipeg, Canada
            </span>
          </div>
          <div className="education__flag">
            {" "}
            <span className="education__flag-circle">&nbsp;</span>
            <span className="education__flag-text">2023 </span>
          </div>
          <div className="education__text-container education__text-container--2">
            <span className="education__text education__text--experience">
              Work Experience
            </span>
          </div>
          <div className="education__flag">
            {" "}
            <span className="education__flag-circle">&nbsp;</span>
            <span className="education__flag-text">2019 </span>
          </div>
          <div className="education__text-container education__text-container--3">
            <span className="education__text">
              <span style={{ textTransform: "uppercase" }}>
                {" "}
                B.E. in Computer Science{" "}
              </span>
              <br />
              Chitkara University, India
            </span>
          </div>
          <div className="education__flag">
            {" "}
            <span className="education__flag-circle">&nbsp;</span>
            <span className="education__flag-text">2015 </span>
          </div>
          <div className="education__text-container education__text-container--4">
            <span className="education__text">
              <span style={{ textTransform: "uppercase" }}> High School </span>
              <br />
              Anand Public Sr. Sec. School, India
            </span>
          </div>
          <div className="education__flag">
            {" "}
            <span className="education__flag-circle">&nbsp;</span>
            <span className="education__flag-text">2013 </span>
          </div>
          <div className="education__text-container education__text-container--5">
            <span className="education__text">
              <span style={{ textTransform: "uppercase" }}>
                {" "}
                Primary Education{" "}
              </span>
              <br />
              Christ the King Convent School, India
            </span>
          </div>
          <div className="education__flag">
            {" "}
            <span className="education__flag-circle">&nbsp;</span>
            <span className="education__flag-text">2000 </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="education__background education__background--bottom"
        variants={{
          hidden: { borderRadius: 0, height: "100vh" },
          visible: { borderRadius: "300px 300px 0 0", height: "5rem" },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.5, delay: 0.2 }}
        viewport={{ once: true }}></motion.div>
    </div>
  );
};

export default Education;
