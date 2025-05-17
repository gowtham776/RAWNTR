import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function Activities() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [startFlow, setStartFlow] = useState(false);

  const activities = [
    { name: "Food Donation", emoji: "🍱" },
    { name: "Groceries Distribution", emoji: "🛒" },
    { name: "Medicine Supply", emoji: "💊" },
    { name: "Plasma Donation", emoji: "🩸" },
    { name: "Blood Donation", emoji: "❤️" },
    { name: "Go Green Challenge", emoji: "🌱" },
    { name: "Road Safety Awareness", emoji: "🚧" },
    { name: "Medical Camps", emoji: "🏥" },
  ];

  const doubledActivities = [...activities, ...activities];

  useEffect(() => {
    if (inView) setStartFlow(true);
    else setStartFlow(false);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative max-w-full mx-auto px-4 py-20 bg-white overflow-hidden"
    >
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#7B1E1E] drop-shadow-lg">
          Our Activities 🌟
        </h2>
      </motion.div>

      {/* Curvy Flow Container */}
      <div className="relative h-56 overflow-hidden">
        <div
          className={`absolute flex ${startFlow ? "curvy-scroll" : ""}`}
          style={{ width: `${doubledActivities.length * 12}rem` }}
        >
          {doubledActivities.map((activity, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-44 mx-4 bg-white rounded-2xl border border-[#7B1E1E]/30 shadow-md glow transform transition-all hover:scale-105"
              style={{
                animation: `waveMotion 4s ease-in-out infinite`,
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className="flex flex-col items-center justify-center p-4 text-center">
                <div className="text-4xl md:text-5xl">{activity.emoji}</div>
                <p className="mt-2 text-sm md:text-base font-semibold text-[#7B1E1E]">
                  {activity.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .curvy-scroll {
          animation: horizontalFlow 30s linear infinite;
        }

        @keyframes horizontalFlow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes waveMotion {
          0% {
            transform: translateY(0px);
          }
          25% {
            transform: translateY(-10px);
          }
          50% {
            transform: translateY(0px);
          }
          75% {
            transform: translateY(10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .glow {
          box-shadow: 0 0 15px rgba(255, 138, 101, 0.25),
            0 4px 30px rgba(255, 218, 185, 0.2);
        }
      `}</style>
    </section>
  );
}

export default Activities;
