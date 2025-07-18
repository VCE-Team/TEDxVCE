import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Radiating red gradient background - exactly like poster */}
      <motion.div 
        className="absolute inset-0 bg-gradient-radial from-red-600 via-red-800 to-red-950"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, delay: 4 }}
      >
        {/* Additional radial gradient for the glowing center effect */}
        <div className="absolute inset-0 bg-gradient-radial from-red-500/30 via-transparent to-transparent" />
      </motion.div>

      {/* Background dot texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-30">
          {[...Array(300)].map((_, i) => (
            <div
              key={`dot-${i}`}
              className="absolute w-1 h-1 bg-red-200 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced immersive rippling effect from center */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`ripple-${i}`}
            className="absolute w-96 h-96 border border-white/30 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.2, 2.2, 3.2, 4.2],
              opacity: [0, 0.8, 0.6, 0.4, 0.2, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeOut"
            }}
          />
        ))}
        
        {/* Additional ripple layers for more immersion */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`ripple-inner-${i}`}
            className="absolute w-64 h-64 border border-white/20 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.5, 2.5, 3.5],
              opacity: [0, 0.6, 0.4, 0.2, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              delay: i * 0.8 + 0.3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Central geometric star pattern - radiating from center like poster */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <motion.div 
          className="relative w-[500px] h-[500px]"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 4, ease: "easeOut" }}
        >
          {/* Central circle - changes from white to red then fades to transparent */}
          <motion.div 
            className="absolute inset-0 w-96 h-96 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 shadow-2xl"
            initial={{ backgroundColor: "#ffffff" }}
            animate={{ 
              backgroundColor: ["#ffffff", "#dc2626", "#dc2626", "#dc2626"],
              opacity: [1, 1, 1, 0]
            }}
            transition={{ 
              duration: 10, 
              delay: 3, 
              times: [0, 0.15, 0.6, 1],
              backgroundColor: { duration: 3, delay: 3, times: [0, 0.15, 0.6, 1] },
              opacity: { duration: 2, delay: 7, times: [0, 0, 0.7, 1] }
            }}
          />
          
          {/* Light transparent white circle - appears after red circle fades */}
          <motion.div 
            className="absolute inset-0 w-96 h-96 bg-white/50 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0.5] }}
            transition={{ 
              duration: 4, 
              delay: 9, 
              times: [0, 0.5, 1]
            }}
          />
          
          {/* Main radiating star pattern - exactly like poster */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
            {/* Primary radiating lines from center */}
            <motion.path
              d="M 250 50 L 250 450 M 50 250 L 450 250 M 80 80 L 420 420 M 420 80 L 80 420"
              stroke="white"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 1 }}
              animate={{ pathLength: 1, opacity: [1, 1, 1, 0] }}
              transition={{ 
                pathLength: { duration: 2.5, delay: 0.5 },
                opacity: { duration: 3, delay: 4, times: [0, 0.7, 0.9, 1] }
              }}
            />
            
            {/* Secondary diagonal lines forming the star pattern */}
            <motion.path
              d="M 120 120 L 380 380 M 380 120 L 120 380"
              stroke="white"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 1 }}
              animate={{ pathLength: 1, opacity: [1, 1, 1, 0] }}
              transition={{ 
                pathLength: { duration: 2, delay: 1.5 },
                opacity: { duration: 3, delay: 4, times: [0, 0.7, 0.9, 1] }
              }}
            />
            
            {/* Outer square frame */}
            <motion.path
              d="M 50 50 L 450 50 L 450 450 L 50 450 Z"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 1 }}
              animate={{ pathLength: 1, opacity: [1, 1, 1, 0] }}
              transition={{ 
                pathLength: { duration: 2, delay: 2 },
                opacity: { duration: 3, delay: 4, times: [0, 0.7, 0.9, 1] }
              }}
            />
            
            {/* Additional radiating lines for more complexity */}
            <motion.path
              d="M 150 150 L 350 350 M 350 150 L 150 350"
              stroke="white"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 1 }}
              animate={{ pathLength: 1, opacity: [1, 1, 1, 0] }}
              transition={{ 
                pathLength: { duration: 1.5, delay: 2.5 },
                opacity: { duration: 3, delay: 4, times: [0, 0.7, 0.9, 1] }
              }}
            />
          </svg>
          
          {/* Rotating geometric elements around the pattern */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`geo-${i}`}
              className="absolute w-6 h-6 border-2 border-white/40"
              style={{
                left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 12)}%`,
                top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 12)}%`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ 
                duration: 10 + i,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Radiating glow effects from center */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-gradient-radial from-red-400/20 via-red-500/10 to-transparent transform -translate-x-1/2 -translate-y-1/2 blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-radial from-red-300/30 via-red-400/15 to-transparent transform -translate-x-1/2 -translate-y-1/2 blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
        
        {/* Animated line patterns radiating from center */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-[1px] bg-white/15 origin-left"
            style={{ 
              width: `${30 + i * 8}%`,
              top: `${50}%`,
              left: `${50}%`,
              transform: `rotate(${i * 45}deg)`,
            }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              scaleX: [0.8, 1.2, 0.8]
            }}
            transition={{ duration: 4 + i, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
        
        {/* Floating particles radiating from center */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute rounded-full ${i % 5 === 0 ? 'bg-red-300/40' : i % 5 === 1 ? 'bg-white/30' : i % 5 === 2 ? 'bg-red-200/35' : i % 5 === 3 ? 'bg-red-400/25' : 'bg-white/20'}`}
            style={{ 
              width: `${2 + Math.random() * 4}px`, 
              height: `${2 + Math.random() * 4}px`,
              left: '50%',
              top: '50%',
            }}
            initial={{ 
              x: 0,
              y: 0,
              opacity: 0 
            }}
            animate={{ 
              x: `${(Math.random() - 0.5) * 800}px`,
              y: `${(Math.random() - 0.5) * 800}px`,
              opacity: [0, 0.8, 0]
            }}
            transition={{ 
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10 px-4">
        <div className="flex flex-col items-center text-center w-full mx-auto">
          {/* Main Synergy Surge title - appears after animation */}
          <motion.div 
            className="mt-16 mb-8 w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 3.5 }}
          >
            <motion.div 
              className="relative inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4 }}
            >
              <div className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight">
                Synergy Surge
              </div>
            </motion.div>
          </motion.div>
        
        {/* Tagline with reduced space */}
        <motion.div 
          className="mb-8 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 5 }}
        >
          <div className="bg-gradient-to-r from-red-500/80 to-red-600/80 backdrop-blur-sm px-8 py-4 inline-block rounded-full border border-white/20 shadow-2xl">
            <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">Rising together, thinking beyond</span>
          </div>
        </motion.div>
        
        {/* Description text - appears after transition */}
        <motion.p 
          className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 5.5 }}
        >
          Join us for an inspiring TEDx event at Vardhaman College of Engineering. Discover innovative ideas, connect with thought leaders, and be part of the global conversation.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 5.5 }}
        >
          <Button className="bg-tedxred hover:bg-tedxred/90 text-white text-lg px-8 py-6 transition-all hover:scale-105 group relative overflow-hidden">
            <span className="relative z-10">Get Tickets</span>
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-tedxred via-red-500 to-tedxred"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 hover:scale-105 transition-all"
            onClick={() => {
              window.location.href = '/about#theme';
            }}
          >
            Learn More
          </Button>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <ArrowDown className="text-white/60 animate-bounce" />
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default Hero;
