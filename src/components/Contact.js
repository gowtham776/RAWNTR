import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const socialLinks = {
  instagram: "https://www.instagram.com/rawntrofficial",
  x: "https://x.com/RAWNTR",
  facebook: "https://www.facebook.com/rawntrofficial",
  email: "mailto:contact@rawntr.org",
  phone: "tel:+919999999999",
  whatsapp: "https://www.whatsapp.com/channel/0029VaOzHI80G0XlgaWQEe3g",
};

const icons = {
  instagram: (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
    </svg>
  ),
  x: (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.14 9.14 0 01-2.88 1.1A4.52 4.52 0 0016.15 2c-2.5 0-4.52 2.03-4.52 4.53 0 .35.04.7.12 1.03A12.82 12.82 0 013 3.12a4.5 4.5 0 001.39 6.05 4.49 4.49 0 01-2.05-.56v.06c0 2.18 1.55 3.99 3.6 4.4a4.54 4.54 0 01-2.04.08 4.52 4.52 0 004.21 3.13 9 9 0 01-5.57 1.92c-.36 0-.72-.02-1.07-.06a12.7 12.7 0 006.88 2.02c8.25 0 12.77-6.83 12.77-12.76 0-.2 0-.41-.02-.61A9.22 9.22 0 0023 3z" />
    </svg>
  ),
  facebook: (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M22 12a10 10 0 10-11.5 9.88v-6.98h-2.2v-2.9h2.2v-2.2c0-2.17 1.29-3.37 3.27-3.37.95 0 1.94.17 1.94.17v2.13h-1.1c-1.08 0-1.42.67-1.42 1.36v1.94h2.42l-.39 2.9h-2.03v6.98A10 10 0 0022 12z" />
    </svg>
  ),
  email: (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M1.5 6.75v10.5a2.25 2.25 0 002.25 2.25h16.5a2.25 2.25 0 002.25-2.25V6.75l-10.5 6.75-10.5-6.75zM21 4.5H3a2.25 2.25 0 00-2.25 2.25v.56l10.5 6.75 10.5-6.75v-.56A2.25 2.25 0 0021 4.5z" />
    </svg>
  ),
  phone: (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.74 3.82.74a1 1 0 011 1v3.5a1 1 0 01-1 1A17.933 17.933 0 013 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.32.26 2.62.74 3.82a1 1 0 01-.21 1.11l-2.2 2.2z" />
    </svg>
  ),
  whatsapp: (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 002.03 6.54L0 24l5.62-2.02A11.92 11.92 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.18-3.48-8.5zm-5.3 15.53c-.4.11-2.35-1.12-2.7-1.25-.36-.13-.62-.2-.88.2s-1.01 1.25-1.24 1.5c-.23.25-.46.28-.85.09a9.07 9.07 0 01-2.66-1.65 10.07 10.07 0 01-1.86-2.31c-.2-.34 0-.52.14-.68.13-.13.3-.34.45-.51.16-.17.2-.3.3-.5.1-.2.05-.37-.02-.51-.06-.13-.88-2.12-1.2-2.9-.31-.77-.63-.67-.88-.68-.23 0-.5-.03-.77-.03s-.5.07-.76.37c-.26.3-1 1-.98 2.45.02 1.45 1.03 2.85 1.17 3.05.13.2 2 3.05 4.85 4.27a5.35 5.35 0 002.4.35 4.75 4.75 0 002.93-1.37 4.22 4.22 0 001.33-3.13c-.02-.27-.1-.4-.18-.47z" />
    </svg>
  ),
};

export default function Contact() {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.offsetHeight;
      // Show footer animation when near bottom 150px
      if (scrollPos > docHeight - 150) setFooterVisible(true);
      else setFooterVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main content */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-extrabold text-center mb-10 text-[#7B1E1E]"
        >
          Get In Touch
        </motion.h2>
        {/* Your contact form or content here */}
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        animate={footerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#7B1E1E] text-white py-8 flex justify-center space-x-8 fixed bottom-0 left-0 right-0 z-10"
      >
        {Object.entries(socialLinks).map(([key, url]) => (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
            aria-label={key}
          >
            {icons[key]}
          </a>
        ))}
        
      </motion.footer>
      
      {/* Floating WhatsApp Button */}
      <motion.a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
        }}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 p-4 rounded-full shadow-lg cursor-pointer z-50"
      >
        {icons.whatsapp}
      </motion.a>
    </>
  );
}
