import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../intro.css";

function Intro({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 6000); // delay + duration = 5s + 1s

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className={`intro-container ${fadeOut ? "fade-out" : ""}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 5, duration: 1 }}
      onAnimationComplete={onComplete}
    >
      <motion.img
        src="/logo4.jpg"
        alt="Logo"
        className="logo-img"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <motion.h1
        className="intro-title"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Empowering ❤️'s, one helping hand at a time
      </motion.h1>

      <motion.p
        className="intro-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        — <em>A mission by the devotees of NTR.</em>
      </motion.p>
    </motion.div>
  );
}

export default Intro;
