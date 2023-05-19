import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const variants = {
  homeBackgroundTop: {
    hidden: { borderRadius: 0, height: "100vh" },
    visible: {
      borderRadius: "0 0 300px 300px",
      height: "45%",
    },
  },
};

const MotionDiv = ({
  className,
  variantType,
  initial,
  transition,
  animateType,
  viewportOnce,
  //   ref = null,
  children,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const getVariants = (type) => {
    for (let key in variants) {
      if (key === type) {
        console.log(variants[key], key);
        return variants[key];
      }
    }
  };

  return (
    <motion.div
      //   className={className}
      //   //   ref={ref}
      //   initial={initial}
      //   animateType={mainControls}
      //   variants={getVariants(variantType)}
      //   transition={transition}
      //   viewport={viewportOnce ? { once: true } : { once: false }}
      className="home__background home__background--top"
      variants={{
        hidden: { borderRadius: 0, height: "100vh" },
        visible: {
          borderRadius: "0 0 300px 300px",
          height: "45%",
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.75, delay: 0.25 }}
      viewport={{ once: true }}>
      {" "}
      {children}
    </motion.div>
  );
};

export default MotionDiv;
