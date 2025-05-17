import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const initiatives = [
  {
    title: "NTRMeal - Feeding the Hungry",
    description:
      "RAWNTR’s flagship initiative, NTRMeal, ensures thousands of underprivileged individuals receive nutritious meals daily. Through community kitchens and Volunteers, RAWNTR has served over 1 million meals across Telangana and Andhra Pradesh.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-[#7B1E1E]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2v4c0 1.105 1.343 2 3 2s3-.895 3-2v-4c0-1.105-1.343-2-3-2z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10v4c0 2.21 3.582 4 8 4"
        />
      </svg>
    ),
  },
  {
    title: "Community Food Drives",
    description:
      "Organizing large-scale food drives in collaboration with local partners, RAWNTR collects and distributes food packets to families during festivals and emergencies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-[#7B1E1E]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
  {
    title: "Nutrition Awareness Camps",
    description:
      "RAWNTR conducts educational sessions to spread awareness about balanced diets and healthy eating habits in rural areas, improving long-term health outcomes.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-[#7B1E1E]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12l2 2 4-4"
        />
      </svg>
    ),
  },
];

export default function GreatInitiatives() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      className="max-w-6xl mx-auto px-6 py-20 bg-gradient-to-r from-pink-50 via-yellow-50 to-pink-50 rounded-xl shadow-lg relative"
    >
      <motion.h2
        className="text-4xl font-extrabold text-center text-[#7B1E1E] mb-14 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        RAWNTR’s Great Initiatives
      </motion.h2>

      {/* Glow behind heading */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-[300px] h-[100px] bg-pink-300 opacity-30 rounded-full blur-3xl z-0 animate-pulse"></div>

      <motion.div
        className="grid md:grid-cols-3 gap-10 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {initiatives.map(({ title, description, icon }, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-shadow cursor-pointer hover:scale-[1.03] transform-gpu"
            variants={itemVariants}
          >
            <div className="mb-6">{icon}</div>
            <h3 className="text-2xl font-semibold text-[#7B1E1E] mb-4">{title}</h3>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
