
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import RegistrationModal from "./RegistrationModal";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Speakers", path: "/speakers" },
    { name: "Team", path: "/team" },
    { name: "Venue", path: "/venue" },
    { name: "Gallery", path: "/gallery" },
    { name: "Past Seasons", path: "/past-seasons" },
  ];

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 border-b transition-all duration-300 ${
          scrolled ? "bg-tedxdark/90 backdrop-blur-md border-white/10" : "bg-transparent border-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">
              <img 
                src="/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png" 
                alt="TEDxVCE Logo" 
                className="h-10 md:h-12"
              />
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-white hover:text-tedxred transition-colors font-medium relative group"
                  >
                    {link.name}
                    <motion.span 
                      className="absolute -bottom-1 left-0 h-[2px] bg-tedxred"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button 
              className="bg-gray-500 text-white cursor-not-allowed opacity-75"
              disabled
            >
              Registrations Closed
            </Button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button 
            className="md:hidden text-white p-2 hover:text-tedxred transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </motion.header>

      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        onOpenRegistration={() => setRegistrationModalOpen(true)}
      />

      <RegistrationModal 
        isOpen={registrationModalOpen}
        onClose={() => setRegistrationModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
