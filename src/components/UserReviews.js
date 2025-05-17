import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const reviews = [
  {
    name: "Anjali Sharma",
    review:
      "RAWNTR’s NTRmeal program has truly changed lives in my community. The meals provided are nutritious and given with so much care. Grateful beyond words!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rajesh Kumar",
    review:
      "I volunteered with RAWNTR during their food donation drives. Seeing the smiles on people’s faces made me realize the true impact of small efforts.",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    name: "Sneha Patel",
    review:
      "The consistency and dedication of RAWNTR in tackling hunger with the NTRmeal initiative is inspiring. They don’t just provide food, they restore hope.",
    avatar: "https://randomuser.me/api/portraits/women/48.jpg",
  },
  {
    name: "Vikram Singh",
    review:
      "As a donor, I appreciate how transparent and efficient RAWNTR is. I trust them completely to use my contributions for social good.",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Deepa Iyer",
    review:
      "RAWNTR’s work in food donation and social services reflects a deep understanding of community needs. Proud to support their vision and mission.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
  }),
};

export default function UserReviews() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.25 });

  const reviewIndex = ((page % reviews.length) + reviews.length) % reviews.length;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 8000);

    return () => clearInterval(interval);
  }, [page, isPaused]);

  function paginate(newDirection) {
    setPage([page + newDirection, newDirection]);
  }

  return (
    <motion.section
      ref={ref}
      className="max-w-4xl mx-auto px-6 py-16 bg-white rounded-xl shadow-xl relative select-none flex items-center justify-center"
      aria-label="User reviews slider"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <button
        onClick={() => paginate(-1)}
        aria-label="Previous review"
        className="absolute left-4 z-20 p-3 rounded-full bg-[#7B1E1E] text-white hover:bg-[#9e2b2b] transition"
      >
        ‹
      </button>

      <div className="relative overflow-hidden w-full max-w-3xl min-h-[280px] mx-12">
        <h2 className="text-3xl font-extrabold text-center text-[#7B1E1E] mb-8">
          Voices of Gratitude: RAWNTR Impact Stories
        </h2>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            className="bg-[#FFF8F0] p-8 rounded-2xl shadow-md flex flex-col items-center text-center mx-4 cursor-text select-text"
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(123,30,30,0.3)" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <img
              src={reviews[reviewIndex].avatar}
              alt={`Avatar of ${reviews[reviewIndex].name}`}
              className="w-20 h-20 rounded-full mb-6 object-cover border-4 border-[#7B1E1E]"
              loading="lazy"
              draggable={false}
            />
            <motion.p
              className="text-lg text-gray-800 mb-4 italic max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              “{reviews[reviewIndex].review}”
            </motion.p>
            <motion.h3
              className="font-semibold text-[#7B1E1E] text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              — {reviews[reviewIndex].name}
            </motion.h3>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={() => paginate(1)}
        aria-label="Next review"
        className="absolute right-4 z-20 p-3 rounded-full bg-[#7B1E1E] text-white hover:bg-[#9e2b2b] transition"
      >
        ›
      </button>
    </motion.section>
  );
}
