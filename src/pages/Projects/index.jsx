import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Project1Mobile from "../../assets/project__1--mobile.jpg";
import Project1Desktop from "../../assets/project__1--desktop.png";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="projects" id="projects">
      <motion.div
        ref={ref}
        className="projects__background projects__background--top"
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
          <span>Projects</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="projects__container projects__container--mobile"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        style={isOpen ? { padding: 0 } : {}}>
        <motion.div
          className="projects__details center-horizontal"
          initial={{ height: 0 }}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: {
              height: "-webkit-fill-available",
              transition: {
                duration: 0.7,
                delayChildren: 0.5,
              },
            },
            closed: {
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
        <img
          src={Project1Mobile}
          alt=""
          className="projects__image center-horizontal"
        />

        <div className="projects__image-description center-horizontal">
          <div className="project-details">
            <p className="project-name">Immigrant marketplace</p>
            <p className="project-tech">
              Made using React.js, Express.js, Node.js, MongoDB, Sass, Socket.io
            </p>
          </div>

          {/* {isOpen && (
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
          )} */}

          <div className="projects__button-container">
            <button className="btn"> Check Live</button>
            <button className="btn" onClick={() => setIsOpen(!isOpen)}>
              View more
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="projects__container projects__container--desktop center-horizontal"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        style={isOpen ? { padding: 0 } : {}}>
        <motion.div
          className="projects__details--desktop "
          initial={{ width: 0 }}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: {
              width: "892px",
              transition: {
                duration: 0.7,
                delayChildren: 0.5,
              },
            },
            closed: {
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
        <img
          src={Project1Desktop}
          alt=""
          className="projects__image projects__image--desktop"
        />

        <div className="projects__image-description projects__image-description--desktop ">
          <div className="project-details">
            <p className="project-name">Immigrant marketplace</p>
            <p className="project-tech">
              Made using React.js, Express.js, Node.js, MongoDB, Sass, Socket.io
            </p>
          </div>

          {/* {isOpen && (
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
          )} */}

          <div className="projects__button-container">
            <button className="btn"> Check Live</button>
            <button className="btn" onClick={() => setIsOpen(!isOpen)}>
              View more
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="projects__background  projects__background--bottom"
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

export default Projects;
