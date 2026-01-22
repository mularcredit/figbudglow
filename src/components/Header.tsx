import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, X, CaretDown } from '@phosphor-icons/react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    // Close dropdown when route changes
    setIsServicesOpen(false);

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [location]); // Re-run when location changes

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleServicesClick = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleServicesLinkClick = () => {
    setIsServicesOpen(false);
  };

  return (
    <header className="bg-slate-950/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/figbud-logo.svg"
                alt="Figbud Global"
                className="h-6 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered & Refined */}
          <nav className="hidden lg:flex items-center space-x-8 text-[13px] font-light tracking-[0.15em] text-slate-400">
            <Link
              to="/"
              className={`transition-all hover:text-white ${isActive('/') ? 'text-green-400 font-semibold' : ''}`}
            >
              Overview
            </Link>
            <div className="relative group" ref={dropdownRef}>
              <button
                onClick={handleServicesClick}
                className="flex items-center hover:text-white transition-all tracking-[0.15em]"
              >
                Products
                <CaretDown weight="bold" className="ml-1.5 h-3 w-3 opacity-50 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-4 w-64 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl py-3 z-50 overflow-hidden">
                  <div className="px-4 py-2 border-b border-white/5 mb-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Enterprise Suite</span>
                  </div>
                  <Link
                    to="/services#hrm"
                    className="flex flex-col px-4 py-3 hover:bg-white/5 transition-colors group/item"
                    onClick={handleServicesLinkClick}
                  >
                    <span className="text-white text-sm font-bold tracking-normal group-hover/item:text-green-400 transition-colors">Zira HR</span>
                    <span className="text-[11px] text-slate-500 font-medium tracking-normal mt-0.5">HCM & Payroll Systems</span>
                  </Link>
                  <Link
                    to="/services#lending"
                    className="flex flex-col px-4 py-3 hover:bg-white/5 transition-colors group/item"
                    onClick={handleServicesLinkClick}
                  >
                    <span className="text-white text-sm font-bold tracking-normal group-hover/item:text-green-400 transition-colors">Jasiri Lending</span>
                    <span className="text-[11px] text-slate-500 font-medium tracking-normal mt-0.5">Lending Software</span>
                  </Link>
                  <Link
                    to="/services#tracker"
                    className="flex flex-col px-4 py-3 hover:bg-white/5 transition-colors group/item"
                    onClick={handleServicesLinkClick}
                  >
                    <span className="text-white text-sm font-bold tracking-normal group-hover/item:text-green-400 transition-colors">Strideli</span>
                    <span className="text-[11px] text-slate-500 font-medium tracking-normal mt-0.5">Smart Telemetry</span>
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/integrations"
              className={`transition-all hover:text-white ${isActive('/integrations') ? 'text-green-400' : ''}`}
            >
              Ecosystem
            </Link>
            <Link
              to="/api documentation"
              className={`transition-all hover:text-white ${isActive('/api documentation') ? 'text-green-400' : ''}`}
            >
              Developers
            </Link>
            <Link
              to="/contact"
              className={`transition-all hover:text-white ${isActive('/contact') ? 'text-green-400' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/signin" className="text-slate-400 hover:text-white transition-all text-[13px] font-bold tracking-widest">
              Login
            </Link>
            <Link
              to="/demo"
              className="relative group px-6 py-2.5 bg-white text-slate-950 font-bold rounded-full overflow-hidden transition-all hover:pr-8 active:scale-95"
            >
              <span className="relative z-10 text-[13px] tracking-widest">Get started</span>
              <div className="absolute top-0 right-0 h-full w-0 bg-green-500 group-hover:w-2 transition-all duration-300" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X weight="light" className="h-6 w-6" /> : <List weight="light" className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-md mt-2">
              <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-white">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-white">
                About
              </Link>
              <Link to="/services" className="block px-3 py-2 text-gray-300 hover:text-white">
                Services
              </Link>
              <Link to="/integrations" className="block px-3 py-2 text-gray-300 hover:text-white">
                Integrations
              </Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-300 hover:text-white">
                Blog
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-white">
                Contact
              </Link>
              <Link to="/signin" className="block px-3 py-2 text-gray-300 hover:text-white">
                Sign In
              </Link>
              <Link to="/demo" className="block px-3 py-2 bg-green-600 text-white rounded">
                Request Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;