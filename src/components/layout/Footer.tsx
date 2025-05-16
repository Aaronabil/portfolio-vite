import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Instagram, Music, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navigationLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Design', path: '/design' },
    { label: 'Cybersecurity', path: '/cybersecurity' },
    { label: 'Contact', path: '/contact' },
  ];
  
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, label: 'GitHub', href: 'https://github.com/Aaronabil' },
    { icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn', href: 'https://linkedin.com/in/muhamad-nabil-faiz-amrullah-66b90626b/' },
    { icon: <Instagram className="h-5 w-5" />, label: 'Instagram', href: 'https://instagram.com/abilvett' },
    { icon: <Mail className="h-5 w-5" />, label: 'Email', href: 'mailto:nabilmuhamad630@gmail.com' },
    { icon: <Music className="h-5 w-5" />, label: 'Music', href: 'https://open.spotify.com/user/312q3zj3jx76y2mg6hree2mptvva?si=7SpylhdSSS2mQvBXr-qEQ' },
  ];

  return (
    <footer className="bg-dark-500 border-t border-dark-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-white font-bold text-xl flex items-center mb-4 hover:text-primary-400 transition-colors">
              <span className="font-mono mr-1"></span>
              <span>Muhamad Nabil Faiz Amrullah</span>
              <span className="font-mono ml-1"></span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              A frontend developer passionate about creating beautiful, secure, and user-friendly digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold mb-4">Navigate</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:nabilmuhamad630@gmail.com" className="hover:text-white transition-colors">
                  nabilmuhamad630@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+628889465561" className="hover:text-white transition-colors">
                  +62 888-9465-561
                </a>
              </li>
              <li>Tangerang, Banten</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Muhamad Nabil Faiz Amrullah. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;