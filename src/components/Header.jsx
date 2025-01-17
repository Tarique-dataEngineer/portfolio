import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isActive = (path) => {
    return location.pathname === path ? "text-indigo-600" : "text-gray-600 hover:text-gray-900";
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Tarique
            </span>
            <span className="text-2xl font-light text-gray-800">
              Israr
            </span>
            <span className="hidden sm:inline-block text-sm text-gray-500 ml-2 border-l border-gray-300 pl-2">
              AI/ML Engineer
            </span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/about" className={isActive('/about')}>About</Link>
            <Link to="/projects" className={isActive('/projects')}>Projects</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/Tarique-dataEngineer" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-gray-900">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/md-tarique-israr-35426a26b/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
            </a>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} className="text-gray-600" />
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className={isActive('/about')} onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/projects" className={isActive('/projects')} onClick={() => setIsMenuOpen(false)}>Projects</Link>
              <Link to="/contact" className={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;