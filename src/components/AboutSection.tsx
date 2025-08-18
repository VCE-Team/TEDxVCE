
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const navigate = useNavigate();
  
  const features = [
    "Inspiring speakers from diverse fields",
    "Interactive exhibitions and demonstrations",
    "Networking opportunities with innovators",
    "Live performances and artistic showcases"
  ];
  
  return (
    <section className="py-20 bg-black relative overflow-hidden" id="about-section">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-tedxred/5 to-amber-500/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -10, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        
        {/* Animated line patterns */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-[1px] bg-white/5"
            style={{ 
              width: `${40 + i * 10}%`,
              top: `${20 + i * 15}%`,
              left: `${i * 5}%`
            }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4 + i, repeat: Infinity }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -top-6 -left-6 w-24 h-24 bg-tedxred/10 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-xl"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              
              <div className="relative aspect-video bg-black border border-white/10 rounded-lg overflow-hidden shadow-2xl shadow-tedxred/5">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/IMG_7408.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <motion.div 
                className="absolute -bottom-8 -left-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:-left-16 bg-black/60 backdrop-blur-md border border-white/10 p-5 rounded-lg max-w-[200px] hidden sm:block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="text-xl md:text-2xl font-bold mb-2">200+</div>
                <div className="text-sm text-white/70">Attendees expected for the 2025 event</div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-8 -right-8 md:-right-10 bg-black/60 backdrop-blur-md border border-white/10 p-5 rounded-lg max-w-[200px] hidden sm:block"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="text-xl md:text-2xl font-bold mb-2">15+</div>
                <div className="text-sm text-white/70">Speakers sharing innovative ideas</div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="max-w-lg">
              <motion.div 
                className="inline-flex items-center bg-gradient-to-r from-tedxred/20 to-amber-500/20 px-4 py-2 rounded-full mb-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="text-sm font-medium">About Us</span>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                About <span className="text-tedxred">TEDx</span>VCE
              </motion.h2>
              
              <motion.div 
                className="w-20 h-1 bg-tedxred mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
              
              <motion.p 
                className="text-lg text-white/80 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                TEDxVCE is an independently organized TED event that brings together innovators, thinkers, 
                and doers from various fields to share ideas worth spreading. In the spirit of TED's mission, 
                our goal is to spark deep discussions and connections in our community.
              </motion.p>
              
              <motion.p 
                className="text-lg text-white/80 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                Organized by the students of Vardhaman College of Engineering, TEDxVCE showcases
                innovative ideas and inspiring stories that challenge conventional thinking and
                spark meaningful conversations.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                {features.map((feature, index) => (
                  <motion.div 
                    key={feature}
                    className="flex items-start space-x-2"
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    whileHover={{ x: 5 }}
                  >
                    <div className={`mt-1.5 transition-colors duration-300 ${hoveredFeature === index ? 'text-tedxred' : 'text-white/70'}`}>
                      <Check className="w-4 h-4" />
                    </div>
                    <p className={`transition-colors duration-300 ${hoveredFeature === index ? 'text-white' : 'text-white/70'}`}>{feature}</p>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  className="border-tedxred text-tedxred hover:bg-tedxred hover:text-white group"
                  onClick={() => navigate('/about')}
                >
                  <span>Learn More About TEDx</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
