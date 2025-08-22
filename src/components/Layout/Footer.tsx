import { useTheme } from '../../context/ThemeContext';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, href: 'https://github.com/mahadevan2005' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/m-mahadevan-8966b124a/' },
    { name: 'Email', icon: <Mail className="h-5 w-5" />, href: 'mailto:mahadevan122005@gmail.com' },
  ];

  // Define which links are internal page scrolls vs routes
  const footerLinks = [
    { name: 'Home', type: 'scroll', id: 'home' },
    { name: 'Projects', type: 'route', path: '/projects' },
    { name: 'Accolades', type: 'route', path: '/accolades' },
    { name: 'Experience', type: 'route', path: '/experience' },
    { name: 'Codolio', type: 'route', path: '/codolio' },
  ];

  return (
    <footer className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 mt-auto overflow-hidden">
      <div className="container-custom py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Description */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-amber-200">
              <span className="text-primary">Maha</span>Devan
            </h3>
            <p className="text-gray-700 dark:text-gray-300 max-w-md leading-relaxed">
              Software engineer passionate about solving complex problems with elegant and efficient solutions. Crafting modern, user-friendly applications that make an impact through thoughtful design and precise execution.
            </p>
            <div className="flex space-x-4 mt-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-gray-700 dark:text-amber-200 hover:text-primary transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-gray-900 dark:text-amber-200 mb-2">Quick Links</h4>
            <ul className="space-y-2">
  {footerLinks.map((link) => (
    <li key={link.name}>
      {link.type === 'scroll' && link.id ? (
        <HashLink
          smooth
          to={`/#${link.id}`}
          className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
        >
          {link.name}
        </HashLink>
      ) : link.type === 'route' && link.path ? (
        <NavLink
          to={link.path}
          className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
        >
          {link.name}
        </NavLink>
      ) : null}
    </li>
  ))}
</ul>

          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-gray-900 dark:text-amber-200 mb-2">Contact</h4>
            <address className="not-italic text-gray-700 dark:text-gray-300 flex flex-col gap-1">
              <a href="mailto:mahadevan122005@gmail.com" className="hover:text-primary transition-colors">
                mahadevan122005@gmail.com
              </a>
              <span>Chennai, India</span>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© {currentYear} DevPortfolio. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed & Built with <span className="text-red-500 animate-pulse">❤️</span>
          </p>
        </div>
      </div>

      {/* Floating gradients for premium feel */}
      <div className="hidden md:block absolute -top-16 -left-16 w-72 h-72 bg-amber-200/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="hidden md:block absolute -bottom-16 -right-16 w-60 h-60 bg-purple-300/10 rounded-full filter blur-2xl animate-pulse-slow"></div>
    </footer>
  );
};

export default Footer;
