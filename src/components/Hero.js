import { useState, useRef } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [isMuted, setIsMuted] = useState(true); // State for mute/unmute
  const videoRef = useRef(null); // Reference to control the video element

  const toggleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Video Container */}
      <div className="relative w-full h-96 md:h-[500px]">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          className="w-full h-full object-cover rounded-lg shadow-lg"
          poster="/poster-image.jpg"
          controls
        >
          <source src="/main.mp4" type="video/mp4" />
          <track
            kind="captions"
            src="/captions.vtt"
            srcLang="en"
            label="English"
            default
          />
          Your browser does not support the video tag.
        </video>

        {/* Custom Mute/Unmute Button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={toggleMuteUnmute}
            className="bg-white text-black rounded-full p-2 focus:outline-none"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.5v9a4.5 4.5 0 002.5-4.5zM19 10v4h2v-4h-2z" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.5v9a4.5 4.5 0 002.5-4.5zM19 10v4h2v-4h-2zm-2-2l-1.5-1.5L14 8v8l1.5 1.5L17 16V8z" />
              </svg>
            )}
          </button>
        </div>

        {/* Overlay Text (Below on Mobile, Overlay on Desktop) */}
        <motion.div
          className="relative md:absolute md:bottom-12 md:left-1/2 md:transform md:-translate-x-1/2 text-center text-gray-800 md:text-white md:bg-black md:bg-opacity-50 px-4 py-2 rounded-lg mt-4 md:mt-0 z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-xl md:text-3xl font-bold">
            
          </h2>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;