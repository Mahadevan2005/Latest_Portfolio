import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Accolades", path: "/accolades" },
    { name: "Experience", path: "/experience" },
    { name: "Codolio", path: "/codolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4">
        <nav
          className={`flex items-center justify-between w-full max-w-5xl rounded-2xl border px-6 py-3 transition-all duration-300 ${
            scrolled
              ? "bg-white/80 text-gray-900 shadow-md backdrop-blur-md border-gray-200"
              : "bg-white/20 text-white border-white/30 backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <NavLink to="/" className="font-bold text-lg sm:text-xl">
            <span className="text-primary">Maha</span>devan
          </NavLink>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-2 py-1 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary"
                        : scrolled
                        ? "text-gray-700 hover:text-primary"
                        : "text-gray-200 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl bg-white/95 backdrop-blur-lg border border-gray-200 shadow-lg p-6 flex flex-col items-center space-y-6 md:hidden"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium ${
                      isActive
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer so content doesn’t hide behind navbar */}
      <div className="h-24 md:h-28"></div>
    </>
  );
};

export default Navbar;
