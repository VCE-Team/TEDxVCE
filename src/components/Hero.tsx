
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-tedxdark via-tedxdark/95 to-black pt-16 overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-40 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-tedxred/10 to-orange-500/10 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Animated line patterns */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-[1px] bg-white/5"
            style={{ 
              width: `${50 + i * 10}%`,
              top: `${30 + i * 15}%`,
              left: `${i * 5}%`
            }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
        
        {/* Animated background particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute rounded-full ${i % 3 === 0 ? 'bg-tedxred/20' : i % 3 === 1 ? 'bg-white/20' : 'bg-amber-400/20'}`}
            style={{ 
              width: `${2 + Math.random() * 4}px`, 
              height: `${2 + Math.random() * 4}px` 
            }}
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`, 
              opacity: 0.2 
            }}
            animate={{ 
              y: [
                `${Math.random() * 100}%`, 
                `${Math.random() * 100}%`
              ],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
      
              <div className="container mx-auto relative z-10 px-4">
          <div className="flex flex-col items-center text-center w-full mx-auto">
            <motion.div 
              className="mt-16 mb-8 w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img 
                src="/lovable-uploads/Frame 8.png" 
                alt="TEDxVCE Event Frame" 
                className="w-full h-auto"
              />
            </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="relative inline-block">
              <span className="text-tedxred animate-pulse-slow">Ideas</span>
              <motion.span 
                className="absolute -right-2 -top-2"
                animate={{ 
                  rotate: [0, 10, -5, 0],
                  scale: [1, 1.1, 0.9, 1]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Sparkles className="w-6 h-6 text-amber-400" />
              </motion.span>
            </span> Worth Spreading
          </motion.h1>
          
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-tedxred/20 to-amber-500/20 px-6 py-3 inline-block rounded-full">
              <span className="text-2xl md:text-3xl font-bold text-white">Synergy Surge</span>
            </div>
          </motion.div>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl">
            Join us for an inspiring TEDx event at Vardhaman College of Engineering. Discover innovative ideas, connect with thought leaders, and be part of the global conversation.
          </p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
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
