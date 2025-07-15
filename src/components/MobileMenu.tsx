
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";
import { motion } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    exit: { y: -20, opacity: 0 }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex items-center justify-between p-4">
        <AnimatedLogo size="sm" onClick={onClose} />
        <motion.button 
          onClick={onClose} 
          className="text-white p-2 hover:text-tedxred transition-colors"
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.2 }}
          aria-label="Close menu"
        >
          <X size={24} />
        </motion.button>
      </div>

      <nav className="flex-1 flex flex-col justify-center">
        <motion.ul 
          className="flex flex-col items-center space-y-8 text-xl"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.li variants={itemVariants}>
            <Link 
              to="/" 
              className="text-white hover:text-tedxred transition-colors"
              onClick={onClose}
            >
              Home
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link 
              to="/about" 
              className="text-white hover:text-tedxred transition-colors"
              onClick={onClose}
            >
              About
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link 
              to="/speakers" 
              className="text-white hover:text-tedxred transition-colors"
              onClick={onClose}
            >
              Speakers
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link 
              to="/team" 
              className="text-white hover:text-tedxred transition-colors"
              onClick={onClose}
            >
              Team
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link 
              to="/venue" 
              className="text-white hover:text-tedxred transition-colors"
              onClick={onClose}
            >
              Venue
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link 
              to="/gallery" 
              className="text-white hover:text-tedxred transition-colors"
              onClick={onClose}
            >
              Gallery
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link 
              to="/past-seasons" 
              className="text-white hover:text-tedxred transition-colors"
              onClick={onClose}
            >
              Past Seasons
            </Link>
          </motion.li>
        </motion.ul>
      </nav>

      <motion.div 
        className="p-8 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Button className="bg-tedxred hover:bg-tedxred/90 text-white w-full transition-transform hover:scale-105">
          Buy Ticket
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
