export const variants = {
  homeBackgroundTop: {
    hidden: { borderRadius: 0, height: "100vh" },
    visible: {
      borderRadius: "0 0 300px 300px",
      height: "45%",
    },
  },
  homeBackgroundBottom: {
    hidden: { borderRadius: 0, height: "100vh" },
    visible: { borderRadius: "300px 300px 0 0", height: "10rem" },
  },
  otherBackgroundTop: {
    hidden: { borderRadius: 0, height: "100vh" },
    visible: {
      borderRadius: "0 0 300px 300px",
      height: "10rem",
    },
  },
  otherBackgroundBottom: {
    hidden: { borderRadius: 0, height: "100vh" },
    visible: { borderRadius: "300px 300px 0 0", height: "5rem" },
  },

  otherBox: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  },
};

export const transitions = {
  homeBackgroundTop: { duration: 0.75, delay: 0.25 },
  homeBackgroundbottom: { duration: 0.75, delay: 0.25 },
  skillBackgroundTop: { duration: 0.5, delay: 0.2 },
  skillBackgroundBottom: { duration: 1.5, delay: 0.2 },
  otherBackgroundTop: { duration: 1, delay: 0.2 },
  otherBackgroundBottom: { duration: 1.5, delay: 0.2 },
  otherBox: { duration: 0.5, delay: 0.4 },
};
