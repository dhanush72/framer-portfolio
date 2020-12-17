import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ title, children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4> {title} </motion.h4>
      {toggle ? children : null}
      <div className="faq-line"></div>
    </div>
  );
};

export default Toggle;
