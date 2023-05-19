import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BounceLoader } from "react-spinners";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../utils/constants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { transitions, variants } from "../../utils/framerMotion";

const ContactMe = () => {
  const ref = useRef(null);
  const formRef = useRef();
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  const [isOpen, setOpen] = useState();
  const [loader, setLoader] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const showToast = (success) => {
    if (success) {
      toast.success("Email sent successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    if (!success) {
      toast.error("Sorry, email cannot be sent! Please try again", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      form.name.length > 0 &&
      form.email.length > 0 &&
      form.message.length > 0
    ) {
      setLoader(true);
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then((result) => {
          if (result?.status === 200) {
            showToast(true);
            setTimeout(() => {
              setLoader(false);
            }, 2000);
          }
        })
        .catch((error) => {
          setLoader(false);
          showToast(false);
        });
    }
  };

  return (
    <div className="contactme" id="contactme">
      <motion.div
        ref={ref}
        className="contactme__background contactme__background--top"
        variants={variants.otherBackgroundTop}
        initial="hidden"
        animate={mainControls}
        transition={transitions.otherBackgroundTop}
        viewport={{ once: true }}>
        <motion.div
          className="box-top box-top--projects center-horizontal"
          variants={variants.otherBox}
          initial="hidden"
          animate={mainControls}
          transition={transitions.otherBox}
          viewport={{ once: true }}>
          <span>Contact</span>
        </motion.div>
      </motion.div>
      <ToastContainer />
      <motion.form
        ref={formRef}
        className="contactme__container center-horizontal center-vertical"
        variants={variants.otherBox}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}>
        {loader && (
          <BounceLoader color="#fce205" className=" center-horizontal" />
        )}
        {!loader && (
          <>
            <p>
              <label for="name">Your name</label>
              <br />
              <input
                type="text"
                name="name"
                className="contactme__input center-horizontal"
                onChange={(e) => handleChange(e)}
              />
            </p>
            <p>
              <label for="email">Your email</label>
              <br />
              <input
                type="email"
                name="email"
                className="contactme__input center-horizontal"
                onChange={(e) => handleChange(e)}
              />
            </p>
            <p>
              <label for="message">Your message</label>
              <br />
              <textarea
                className="contactme__input contactme__textarea"
                name="message"
                onChange={(e) => handleChange(e)}
              />
            </p>
            <p>
              <input
                type="submit"
                className="contactme__input"
                onClick={(e) => submitHandler(e)}
              />
            </p>
          </>
        )}
      </motion.form>

      <motion.div
        className="contactme__background contactme__background--bottom"
        variants={variants.otherBackgroundBottom}
        initial="hidden"
        animate={mainControls}
        transition={transitions.otherBackgroundBottom}
        viewport={{ once: true }}></motion.div>
    </div>
  );
};

export default ContactMe;
