import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function Donations() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [animateQuote, setAnimateQuote] = useState(false);

  useEffect(() => {
    if (inView) setAnimateQuote(true);
    else setAnimateQuote(false);
  }, [inView]);

  const quoteLines = [
    "The Words That Can Inspire Millions",
    "&",
    "We Are One Of Those",
  ];

  const cards = [
    {
      link: "https://rawntr.org/blooddonor/",
      image: "/blooda.jpeg",
      external: true,
    },
    {
      link: "https://rawntr.org/bloodrequest/",
      image: "/bloodr.jpeg",
      external: true,
    },
    {
      link: "https://rawntr.org/fooddonation/",
      image: "/food.jpg",
      external: true,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-[60vh] flex flex-col items-center justify-center px-4 py-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#fefcea] to-[#f1daae] opacity-90" />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        {/* Quote */}
        <div className="mb-8 relative">
          <motion.div
            className="text-4xl text-[#7B1E1E] font-bold mb-1"
            initial={{ opacity: 0, y: -10 }}
            animate={animateQuote ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            “
          </motion.div>
          {quoteLines.map((line, i) => (
            <motion.p
              key={i}
              className="text-lg md:text-2xl font-medium text-gray-800 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={animateQuote ? { opacity: 1, scale: 1 } : { opacity: 0 }}
              transition={{ delay: i * 0.4, duration: 0.5 }}
            >
              {line}
            </motion.p>
          ))}
          <motion.div
            className="text-4xl text-[#7B1E1E] font-bold mt-1"
            initial={{ opacity: 0, y: 10 }}
            animate={animateQuote ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 1.3 }}
          >
            ”
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {cards.map((card, index) => (
            <motion.a
              key={index}
              href={card.link}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 20px rgba(139, 69, 19, 0.5)",
              }}
              className="block bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer border-2 border-transparent aspect-[1/1] md:aspect-[4/5]"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#ffffff",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Donations;