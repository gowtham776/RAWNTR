import { useRef, useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useInView } from "framer-motion";

function MissionStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });
  const [startTyping, setStartTyping] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setStartTyping(true);
        setTriggerAnimation(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setStartTyping(false);
      setTriggerAnimation(false); // Reset animation when out of view
    }
  }, [isInView]);

  const [headingText] = useTypewriter({
    words: ["Why\u00A0RAWNTR?"],
    loop: 1,
    typeSpeed: 100,
    delaySpeed: 3000,
    start: startTyping,
  });

  const initiatives = [
    {
      icon: "🍽️",
      keyword: "Food Distribution",
      description: "Feeding thousands daily with care.",
      color: "bg-yellow-500",
    },
    {
      icon: "🩺",
      keyword: "Blood Donation",
      description: "Organizing drives to save lives.",
      color: "bg-red-600",
    },
    {
      icon: "🤝",
      keyword: "Community Support",
      description: "Fostering unity and compassion.",
      color: "bg-green-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-[50vh] flex items-center justify-center px-6 py-16 text-gray-100 overflow-hidden mt-12"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
        <div className="absolute inset-0 starry-background" />
      </div>

      <div className="relative z-10 w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-300 mb-16 text-center glowing-text">
          {headingText.split("").map((char, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-700 ease-out delay-${
                index * 100
              } ${startTyping ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} px-0.5`}
            >
              {char}
            </span>
          ))}
          {startTyping && <Cursor cursorStyle="|" cursorColor="#FFD700" />}
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className={`w-64 md:w-72 p-6 bg-black bg-opacity-80 backdrop-blur-md rounded-xl border border-yellow-300 border-opacity-30 transition-all duration-700 ease-in-out transform will-change-transform-opacity ${
                triggerAnimation
                  ? "animate-blowIn delay-" + index * 200
                  : "opacity-0 scale-50 translate-y-20"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center justify-center mb-4">
                <span
                  className={`text-4xl md:text-5xl ${initiative.color} rounded-full w-16 h-16 flex items-center justify-center animate-pulse-glow`}
                >
                  {initiative.icon}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-yellow-300 text-center glowing-text">
                {initiative.keyword}
              </h3>
              <p className="text-sm md:text-base text-white text-center mt-2">
                {initiative.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .starry-background {
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="10" cy="10" r="1" fill="rgba(255, 215, 0, 0.8)" /><circle cx="90" cy="20" r="1.5" fill="rgba(255, 215, 0, 0.6)" /><circle cx="30" cy="80" r="1" fill="rgba(255, 215, 0, 0.7)" /><circle cx="70" cy="60" r="1.2" fill="rgba(255, 215, 0, 0.9)" /></svg>');
          background-size: 100px 100px;
          animation: twinkle 30s ease-in-out infinite;
          opacity: 0.6;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1) translateX(0);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05) translateX(10px);
          }
        }

        .glowing-text {
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.8),
            0 0 20px rgba(255, 215, 0, 0.6);
          animation: glow 6s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from {
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.8),
              0 0 20px rgba(255, 215, 0, 0.6);
          }
          to {
            text-shadow: 0 0 20px rgba(255, 215, 0, 1),
              0 0 30px rgba(255, 215, 0, 0.8);
          }
        }

        .animate-pulse-glow {
          animation: pulseGlow 6s infinite ease-in-out;
        }

        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
          }
        }

        @keyframes blowIn {
          0% {
            opacity: 0;
            transform: scale(0.4) translateY(100px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-blowIn {
          animation: blowIn 0.7s ease-out forwards;
        }

        .will-change-transform-opacity {
          will-change: transform, opacity;
        }
      `}</style>
    </section>
  );
}

export default MissionStatement;
