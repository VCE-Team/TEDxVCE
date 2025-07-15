
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const AnimatedLogo = ({ size = "md", className = "", onClick }: AnimatedLogoProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Size mapping
  const sizeClasses = {
    sm: "h-8",
    md: "h-10 md:h-12",
    lg: "h-16 md:h-20"
  };
  
  // Trigger random animation every 5 seconds when not hovered
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isHovered) {
      interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 1000);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link 
      to="/" 
      className={`relative flex items-center overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className={`relative ${sizeClasses[size]} flex items-center`}>
        {/* TED part with animation */}
        <motion.div 
          className="text-tedxred font-bold flex items-center"
          animate={isHovered || isAnimating ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="inline-block"
            animate={isHovered ? { y: [0, -2, 0] } : {}}
            transition={{ duration: 0.3, delay: 0 }}
          >
            T
          </motion.span>
          <motion.span 
            className="inline-block"
            animate={isHovered ? { y: [0, -2, 0] } : {}}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            E
          </motion.span>
          <motion.span 
            className="inline-block"
            animate={isHovered ? { y: [0, -2, 0] } : {}}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            D
          </motion.span>
        </motion.div>
        
        {/* x part with animation */}
        <motion.div 
          className="text-tedxred font-bold relative"
          animate={isHovered ? { rotate: [0, 15, 0] } : 
                  isAnimating ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          x
        </motion.div>
        
        {/* VCE part with animation */}
        <motion.div 
          className="text-white font-bold flex items-center ml-1"
          animate={isHovered || isAnimating ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.span 
            className="inline-block"
            animate={isHovered ? { y: [0, -2, 0] } : {}}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            V
          </motion.span>
          <motion.span 
            className="inline-block"
            animate={isHovered ? { y: [0, -2, 0] } : {}}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            C
          </motion.span>
          <motion.span 
            className="inline-block"
            animate={isHovered ? { y: [0, -2, 0] } : {}}
            transition={{ duration: 0.3, delay: 0.25 }}
          >
            E
          </motion.span>
        </motion.div>
        
        {/* Animated underline */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              className="absolute -bottom-1 left-0 h-[2px] bg-tedxred"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
        
        {/* Animated particle effects */}
        <AnimatePresence>
          {(isHovered || isAnimating) && (
            <>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-tedxred/70"
                  initial={{ 
                    x: "50%", 
                    y: "50%", 
                    opacity: 0.8 
                  }}
                  animate={{ 
                    x: `${50 + Math.random() * 100 - 50}%`,
                    y: `${50 + Math.random() * 100 - 50}%`,
                    opacity: 0 
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
    </Link>
  );
};

export default AnimatedLogo;
