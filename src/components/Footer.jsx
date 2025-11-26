import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, Youtube, Facebook, Mail } from 'lucide-react';

const Footer = () => {
     const [email, setEmail] = useState('');
     const [subscribed, setSubscribed] = useState(false);
     const [error, setError] = useState('');

     const handleSubmit = (e) => {
          e.preventDefault();
          if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
               setError('Ingresa un email válido.');
               return;
          }
          setError('');
          // Aquí se integraría con el backend o servicio de email marketing
          console.log('Newsletter subscription:', email);
          setSubscribed(true);
          setEmail('');
          setTimeout(() => setSubscribed(false), 3000);
     };

     const socialLinks = [
          { icon: Instagram, href: "https://www.instagram.com/factotumdigitalpro/", label: "Instagram" },
          { icon: Youtube, href: "https://www.youtube.com/@FactotumDigital", label: "YouTube" },
          { icon: Facebook, href: "https://www.facebook.com/factotum360", label: "Facebook" },
          { icon: Twitter, href: "https://x.com/factotum_360", label: "X (Twitter)" },
          { 
               icon: Mail, 
               href: "/contacto", 
               label: "Contacto",
               isInternal: true
          }
     ];

     return (
          <footer className="border-t border-white/10 bg-[#020010] pt-16 pb-8">
               <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center">
                         <div className="col-span-1 md:col-span-2 flex flex-col items-center">
                              <div className="flex items-center gap-3 mb-6">
                                   <div className="w-8 h-8 bg-white rounded-full p-0.5 flex items-center justify-center overflow-hidden">
                                        <img src="/logo_new.jpg" alt="Factotum Digital" className="w-full h-full object-cover" />
                                   </div>
                                   <span className="text-lg font-bold">Factotum<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#7000FF]">Digital</span></span>
                              </div>
                              <p className="text-gray-400 max-w-sm mb-6 mx-auto">
                                   Redefiniendo el marketing digital con inteligencia artificial y estrategias de vanguardia para el 2026.
                              </p>

                              <div className="flex gap-4 flex-wrap justify-center mb-8">
                                   {socialLinks.map((social, i) => (
                                        <a
                                             key={i}
                                             href={social.href}
                                             target={!social.isInternal ? '_blank' : undefined}
                                             rel={!social.isInternal ? "noopener noreferrer" : undefined}
                                             aria-label={social.label}
                                             className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#7000FF] transition-colors text-white"
                                        >
                                             <social.icon size={20} />
                                        </a>
                                   ))}
                              </div>

                              {/* Newsletter Form */}
                              <div className="w-full max-w-md" id="footer-newsletter">
                                   <h4 className="font-bold mb-3 text-sm">Suscríbete a nuestro Newsletter</h4>
                                   <form onSubmit={handleSubmit} className="flex gap-2">
                                        <input
                                             type="email"
                                             value={email}
                                             onChange={(e) => setEmail(e.target.value)}
                                             placeholder="tu@email.com"
                                             required
                                             className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-[#00C2FF] transition-colors text-sm"
                                        />
                                        <button
                                             type="submit"
                                             className="px-6 py-2 bg-gradient-to-r from-[#00C2FF] to-[#7000FF] rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                                        >
                                             {subscribed ? '✓ Suscrito' : 'Suscribir'}
                                        </button>
                                   </form>
                                   {error && <p className="text-xs text-red-400 mt-2 text-left w-full">{error}</p>}
                                   {!error && (
                                        <p className="text-[11px] text-gray-500 mt-2 text-left">
                                             Al suscribirte aceptas nuestros <a href="/terms.html" className="underline hover:text-[#00C2FF] transition-colors">Términos</a>, <a href="/privacy.html" className="underline hover:text-[#00C2FF] transition-colors">Política de Privacidad</a> y <a href="/cookies.html" className="underline hover:text-[#00C2FF] transition-colors">Cookies</a>.
                                        </p>
                                   )}
                              </div>
                         </div>

                         <div className="flex flex-col items-center">
                              <h4 className="font-bold mb-6">Plataforma</h4>
                              <ul className="space-y-4 text-gray-400">
                                   <li><Link to="/contenido" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00C2FF] hover:to-[#7000FF] transition-all">Contenido</Link></li>
                                   <li><Link to="/academy" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00C2FF] hover:to-[#7000FF] transition-all">Academia</Link></li>
                                   <li><Link to="/blog" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00C2FF] hover:to-[#7000FF] transition-all">Blog</Link></li>
                                   <li><Link to="/about" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00C2FF] hover:to-[#7000FF] transition-all">Sobre Mí</Link></li>
                              </ul>
                         </div>

                         <div className="flex flex-col items-center">
                              <h4 className="font-bold mb-6">Legal</h4>
                              <ul className="space-y-4 text-gray-400">
                                   <li><a href="/privacy.html" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00C2FF] hover:to-[#7000FF] transition-all">Privacidad</a></li>
                                   <li><a href="/terms.html" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00C2FF] hover:to-[#7000FF] transition-all">Términos</a></li>
                                   <li><a href="/cookies.html" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00C2FF] hover:to-[#7000FF] transition-all">Cookies</a></li>
                              </ul>
                         </div>
                    </div>

                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 text-center">
                         <p>© 2025 Factotum AI. Todos los derechos reservados.</p>
                         <p>Diseñado para el Futuro.</p>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
