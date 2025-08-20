import { useTheme } from '../../context/ThemeContext';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
 useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, href: 'https://github.com/mahadevan2005' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/m-mahadevan-8966b124a/' },
    { name: 'Email', icon: <Mail className="h-5 w-5" />, href: 'mailto:mahadevan122005@gmail.com' },
  ];

  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Accolades', href: '/accolades' },
    { name: 'Experience', href: '/experience' },
    { name: 'Codolio', href: '/codolio' },
  ];

  return (
    <footer className="bg-card mt-auto border-t">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">Dev</span>Portfolio
            </h3>
            <p className="mb-4 text-muted-foreground max-w-md">
              Software engineer with a passion for building beautiful, functional, and user-friendly applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <address className="not-italic text-muted-foreground">
              <p className="mb-2">mahadevan122005@gmail.com</p>
              <p>Chennai, India</p>
            </address>
          </div>
        </div>
        
        <div className="border-t pt-6 mt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} DevPortfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Designed & Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;