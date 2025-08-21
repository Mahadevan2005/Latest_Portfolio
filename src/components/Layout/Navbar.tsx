import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync theme with localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  type NavLinkItem =
    | { name: string; type: "scroll"; id: string }
    | { name: string; type: "route"; path: string };

  const navLinks: NavLinkItem[] = [
    { name: "Home", type: "route", path: "/" },
    { name: "About", type: "scroll", id: "about" },
    { name: "Projects", type: "route", path: "/projects" },
    { name: "Accolades", type: "route", path: "/accolades" },
    { name: "Experience", type: "route", path: "/experience" },
    { name: "Codolio", type: "route", path: "/codolio" },
    { name: "Contact", type: "scroll", id: "contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4">
        <nav
          className={`relative flex items-center justify-between w-full max-w-5xl rounded-2xl border px-6 py-3 transition-all duration-300 ${
            scrolled
              ? "bg-white/80 text-gray-900 shadow-md backdrop-blur-md border-gray-200 dark:bg-gray-900/80 dark:text-gray-100 dark:border-gray-700"
              : "bg-white/70 text-gray-900 border-gray-200 shadow-sm backdrop-blur-md dark:bg-gray-800/40 dark:text-gray-100"
          }`}
        >
          {/* Logo */}
          <HashLink smooth to="/#home" className="font-bold text-lg sm:text-xl">
            <span className="text-primary">Maha</span>devan
          </HashLink>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.type === "scroll" ? (
                  <HashLink
                    smooth
                    to={`/#${link.id}`}
                    className="px-2 py-1 text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white"
                  >
                    {link.name}
                  </HashLink>
                ) : (
                  <NavLink
                    to={link.path}
                    className="px-2 py-1 text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white"
                  >
                    {link.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* Right Side (Dark/Light toggle + Mobile menu button) */}
          <div className="flex items-center gap-4">
            {/* Dark/Light Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 transition hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5 text-gray-800" />
              ) : (
                <Sun className="h-5 w-5 text-yellow-400" />
              )}
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="absolute top-full mt-3 left-0 w-full rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-lg p-6 flex flex-col items-center space-y-6 md:hidden"
              >
                {navLinks.map((link) =>
                  link.type === "scroll" ? (
                    <HashLink
                      key={link.name}
                      smooth
                      to={`/#${link.id}`}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white"
                    >
                      {link.name}
                    </HashLink>
                  ) : (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white"
                    >
                      {link.name}
                    </NavLink>
                  )
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Spacer so content doesn’t hide behind navbar */}
      <div className="h-24 md:h-28"></div>
    </>
  );
};

export default Navbar;
