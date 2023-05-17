import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="experience" id="experience">
      <motion.div
        ref={ref}
        className="experience__background experience__background--top"
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
          <span>Experience</span>
        </motion.div>
      </motion.div>
      <motion.div
        className="experience__container"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}>
        <div
          className="experience__line center-horizontal center-vertical"
          style={isOpen ? { backgroundColor: "#fff" } : {}}>
          <motion.div
            className="experience__details"
            initial={{ height: 0, position: "absolute" }}
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                height: "100%",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.5,
                },
              },
              closed: {
                clipPath: "inset(50% 50% 50% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.5,
                },
              },
            }}
            style={{
              pointerEvents: isOpen ? "auto" : "none",
            }}>
            <motion.span
              className="experience__details-cross"
              variants={{
                open: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 300, damping: 24 },
                },
                closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
              }}
              onClick={() => setIsOpen(!isOpen)}>
              X
            </motion.span>
          </motion.div>
          <motion.button
            className="experience__box"
            style={{
              border: "none",
              fontFamily: "Montserrat, sans-serif",
              padding: "1rem 2rem",
              letterSpacing: "1px",
              display: isOpen ? "none" : "block",
            }}
            onClick={() => setIsOpen(!isOpen)}>
            <span>Sr. App Developer</span> <br />
            <span>Telus International</span> <br />
            <span>Apr, 2022 - Dec, 2022</span>
          </motion.button>
          <motion.button
            className="experience__box"
            style={{
              border: "none",
              fontFamily: "Montserrat, sans-serif",
              padding: "1rem 2rem",
              letterSpacing: "1px",
              display: isOpen ? "none" : "block",
            }}
            onClick={() => setIsOpen(!isOpen)}>
            {" "}
            <span>Software Developer</span>
            <br />
            <span>Bacancy</span>
            <br />
            <span>Sep, 2021 - Apr, 2022</span>
          </motion.button>
          <motion.button
            className="experience__box"
            style={{
              border: "none",
              fontFamily: "Montserrat, sans-serif",
              padding: "1rem 2rem",
              letterSpacing: "1px",
              display: isOpen ? "none" : "block",
            }}
            onClick={() => setIsOpen(!isOpen)}>
            <span>Sr. Systems Engineer</span>
            <br />
            <span>Infosys</span>
            <br />
            <span>Aug, 2019 - Aug, 2021</span>
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="experience__background experience__background--bottom"
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

export default Experience;
