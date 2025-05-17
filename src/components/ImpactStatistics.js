import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

// Custom hook for counting animation
function useCountUp(end, duration, startCounting) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) {
      setCount(0); // Reset count when section leaves viewport
      return;
    }

    const increment = end / (duration / 50); // Increment per 50ms
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration, startCounting]);

  return count;
}

function ImpactStatistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px" });
  const [startCounting, setStartCounting] = useState(false);

  // Start counting when section is in view
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setStartCounting(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setStartCounting(false); // Reset when section leaves viewport
    }
  }, [isInView]);

  // Counting animations for stats
  const volunteerCount = useCountUp(25000, 3000, startCounting);
  const cityCount = useCountUp(100, 3000, startCounting);

  // Stats data with animation delays
  const stats = [
    {
      value: `${volunteerCount.toLocaleString()}+`,
      label: "Volunteers",
      delay: 0,
    },
    {
      value: `${cityCount}+`,
      label: "Cities & Towns",
      delay: 500,
    },
    {
      value: "Across Andhra & Telangana",
      label: "",
      delay: 1000,
    },
  ];

  return (
    <section
      id="volunteer"
      ref={ref}
      className="relative min-h-[60vh] flex items-center justify-center px-6 py-16 overflow-hidden"
    >
      {/* Light Gradient Background with Subtle Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="10" cy="10" r="1" fill="rgba(0, 0, 0, 0.05)" /><circle cx="90" cy="20" r="1.5" fill="rgba(0, 0, 0, 0.05)" /><circle cx="30" cy="80" r="1" fill="rgba(0, 0, 0, 0.05)" /><circle cx="70" cy="60" r="1.2" fill="rgba(0, 0, 0, 0.05)" /></svg>')`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-12">
          {/* Stats and Badge Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
            {/* Stats */}
            <div className="flex flex-col items-center gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transform transition-all duration-2000 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] delay-${stat.delay} will-change-transform-opacity ${
                    isInView ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
                  }`}
                  style={{ willChange: "transform, opacity" }}
                >
                  <h3
                    className={`font-bold text-gray-800 ${
                      stat.label ? "text-4xl md:text-6xl" : "text-lg md:text-xl font-semibold"
                    }`}
                  >
                    {stat.value}
                  </h3>
                  {stat.label && (
                    <p className="text-lg md:text-xl text-gray-600 mt-2">
                      {stat.label}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* NTR Welfare Badge */}
            <div
              className={`transform transition-all duration-2000 ease-in-out delay-1000 will-change-transform-opacity ${
                isInView ? "opacity-100 rotate-0 scale-100 animate-pulse-glow" : "opacity-0 rotate-45 scale-90"
              }`}
              style={{ willChange: "transform, opacity" }}
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    stroke="#FFD700"
                    strokeWidth="4"
                    fill="#1F2937"
                  />
                  <text
                    x="50"
                    y="40"
                    textAnchor="middle"
                    fill="#FFD700"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    RAW NTR's
                  </text>
                  <text
                    x="50"
                    y="60"
                    textAnchor="middle"
                    fill="#FFD700"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    Welfare
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Become a Volunteer Banner */}
          <a
            href="https://rawntr.org/joinwithus/"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-8 py-4 bg-orange-500 text-white text-lg md:text-xl font-semibold rounded-lg transform transition-all duration-2000 ease-in-out delay-1500 will-change-transform-opacity hover:scale-105 hover:shadow-xl glowing-banner ${
              isInView ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
            style={{ willChange: "transform, opacity" }}
          >
            Become a Volunteer - Join Us Today!
          </a>
        </div>
      </div>

      {/* Custom Styles for Animations */}
      <style>{`
        .glowing-banner {
          text-shadow: 0 0 10px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 165, 0, 0.6);
          animation: glow 3s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from {
            text-shadow: 0 0 10px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 165, 0, 0.6);
          }
          to {
            text-shadow: 0 0 20px rgba(255, 165, 0, 1), 0 0 30px rgba(255, 165, 0, 0.8);
          }
        }

        .animate-pulse-glow {
          animation: pulseGlow 4s infinite ease-in-out;
        }

        @keyframes pulseGlow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
          }
        }

        .will-change-transform-opacity {
          will-change: transform, opacity;
        }
      `}</style>
    </section>
  );
}

export default ImpactStatistics;