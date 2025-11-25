import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
     const [isScrolled, setIsScrolled] = useState(false);
     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
     const location = useLocation();

     useEffect(() => {
          const handleScroll = () => {
               setIsScrolled(window.scrollY > 20);
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     const navLinks = [
          { name: 'Servicios', href: '/services' },
          { name: 'Casos de Éxito', href: '/success-stories' },
          { name: 'Growth Hub', href: '/#growth-hub' },
          { name: 'FAQ', href: '/#faq' },
     ];

     return (
          <header
               className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-[#030014]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
                    }`}
          >
               <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                         <div className="relative w-8 h-8 bg-white rounded-full overflow-hidden p-0.5 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                              <img
                                   src="/logo_new.jpg"
                                   alt="Factotum AI Logo"
                                   className="relative w-full h-full object-cover"
                              />
                         </div>
                         <span className="text-lg font-bold tracking-tight">
                              Factotum<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#7000FF]">Digital</span>
                         </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                         {navLinks.map((link) => (
                              <Link
                                   key={link.name}
                                   to={link.href}
                                   className="text-sm font-medium text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00C2FF] hover:to-[#7000FF] transition-all relative group"
                              >
                                   {link.name}
                                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00C2FF] to-[#7000FF] transition-all group-hover:w-full" />
                              </Link>
                         ))}
                         <Link to="/audit" className="btn-primary text-sm py-2.5 px-6 flex items-center gap-2">
                              Agendar Auditoría
                              <ChevronRight size={16} />
                         </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                         className="md:hidden text-white p-2"
                         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                         {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
               </div>

               {/* Mobile Menu Overlay */}
               <AnimatePresence>
                    {isMobileMenuOpen && (
                         <motion.div
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              className="absolute top-20 left-0 right-0 bg-[#030014] border-b border-white/10 p-6 md:hidden"
                         >
                              <nav className="flex flex-col gap-4">
                                   {navLinks.map((link) => (
                                        <Link
                                             key={link.name}
                                             to={link.href}
                                             className="text-lg font-medium text-gray-300 hover:text-[#00C2FF]"
                                             onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                             {link.name}
                                        </Link>
                                   ))}
                                   <Link
                                        to="/audit"
                                        className="btn-primary w-full mt-4 flex justify-center items-center gap-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                   >
                                        Agendar Auditoría
                                        <ChevronRight size={16} />
                                   </Link>
                              </nav>
                         </motion.div>
                    )}
               </AnimatePresence>
          </header>
     );
};

export default Header;
