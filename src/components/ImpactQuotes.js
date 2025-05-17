import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function TypewriterContent({ text, onDone }) {
  const [typedText, { isDone, isTyping }] = useTypewriter({
    words: [text || ""],
    loop: 1,
    typeSpeed: 50,
    delaySpeed: 3000,
  });

  useEffect(() => {
    if (isDone) {
      onDone();
    }
  }, [isDone, onDone]);

  return (
    <>
      {typedText}
      {isTyping && <Cursor cursorStyle="|" cursorColor="#7B1E1E" />}
    </>
  );
}

function ImpactQuotes() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [startTyping, setStartTyping] = useState(false);
  const [typingDone, setTypingDone] = useState(false);

  const message = {
    text: "Inspired by NTR’s vision, RAWNTR’s NTRMeal ensures no one goes hungry, serving thousands daily with love and care.",
    subtext: "— Feeding the Needy, Honoring NTR’s Legacy",
  };

  // Start typewriter effect only when the section is in view
  useEffect(() => {
    if (inView) {
      setStartTyping(true);
      setTypingDone(false); // Reset typingDone when starting anew
    } else {
      setStartTyping(false);
      setTypingDone(false);
    }
  }, [inView]);

  // Animation variants for Framer Motion
  const messageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const subtextVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative max-w-4xl mx-auto px-6 py-12 text-gray-800 overflow-hidden"
    >
      {/* Refined Warm Background with Minimal Wave Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF5E1] to-[#FFDAB9]">
        <div className="absolute inset-0 wave-background" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <motion.div
          className="text-center bg-white bg-opacity-50 rounded-lg py-6 px-4 md:bg-opacity-0 md:p-0"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={messageVariants}
        >
          <h2 className="text-xl md:text-3xl font-bold text-[#7B1E1E] mb-4 leading-relaxed">
            {startTyping && (
              <TypewriterContent
                key={startTyping.toString()}
                text={message.text}
                onDone={() => setTypingDone(true)}
              />
            )}
          </h2>
          {startTyping && typingDone && (
            <motion.p
              className="text-sm md:text-lg text-gray-800 italic tracking-wide"
              initial="hidden"
              animate="visible"
              variants={subtextVariants}
            >
              {message.subtext}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Custom CSS for Wave Background */}
      <style jsx>{`
        .wave-background {
          background: linear-gradient(60deg, rgba(255, 218, 185, 0.1) 0%, rgba(255, 245, 225, 0.1) 100%);
          background-size: 200% 200%;
          animation: wave 15s ease infinite;
          opacity: 0.3;
        }

        @keyframes wave {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}

export default ImpactQuotes;