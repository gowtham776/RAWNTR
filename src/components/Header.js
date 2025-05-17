import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#4A0000] text-white fixed top-0 w-full z-50 shadow-md">
      {/* Desktop Layout */}
      <div className="hidden md:flex max-w-7xl mx-auto px-4 py-3 items-center justify-between">
        {/* Logo: Left */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.img
            src="/logo4.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.span
            className="text-4xl font-bold"
            style={{ fontFamily: "'Dancing Script', cursive" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            rawntr.org
          </motion.span>
        </Link>

        {/* Quote: Centered */}
        <div className="flex-1 text-center">
          <motion.h1
            className="text-lg font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Working For The Word Of NTR
          </motion.h1>
          <motion.span
            className="text-sm text-yellow-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            An NTR Welfare
          </motion.span>
        </div>

        {/* Navigation: Right */}
        <motion.nav
          className="flex items-center space-x-6 text-lg font-medium"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.1, color: "#FFFF00" }}>
            <Link
              to="/donations"
              className="hover:text-yellow-400 transition duration-200"
            >
              Donations
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, color: "#FFFF00" }}>
            <Link
              to="/volunteer"
              className="hover:text-yellow-400 transition duration-200"
            >
              Become a Volunteer
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, color: "#FFFF00" }}>
            <Link
              to="/about"
              className="hover:text-yellow-400 transition duration-200"
            >
              About
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, color: "#FFFF00" }}>
            <Link
              to="/contact"
              className="hover:text-yellow-400 transition duration-200"
            >
              Contact
            </Link>
          </motion.div>
        </motion.nav>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden max-w-7xl mx-auto px-4 py-3">
        {/* Logo, Quote, and Toggle Row */}
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.img
              src="/logo4.jpg"
              alt="Logo"
              className="w-10 h-10 rounded-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
            <motion.span
              className="text-4xl font-bold"
              style={{ fontFamily: "'Dancing Script', cursive" }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              rawntr.org
            </motion.span>
          </Link>

          {/* Quote: Inline with Logo on Mobile */}
          <div className="flex-1 text-center mx-2">
            <motion.h1
              className="text-sm font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Working For The Word Of NTR
            </motion.h1>
            <motion.span
              className="text-xs text-yellow-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              An NTR Welfare
            </motion.span>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Content */}
        {menuOpen && (
          <motion.div
            className="mt-3 bg-[#4A0000] text-white px-4 py-4 space-y-3 text-base font-medium"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05, color: "#FFFF00" }}>
              <Link
                to="/donations"
                className="block hover:text-yellow-400"
                onClick={() => setMenuOpen(false)}
              >
                Donations
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, color: "#FFFF00" }}>
              <Link
                to="/volunteer"
                className="block hover:text-yellow-400"
                onClick={() => setMenuOpen(false)}
              >
                Become a Volunteer
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, color: "#FFFF00" }}>
              <Link
                to="/about"
                className="block hover:text-yellow-400"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, color: "#FFFF00" }}>
              <Link
                to="/contact"
                className="block hover:text-yellow-400"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </header>
  );
}

export default Header;