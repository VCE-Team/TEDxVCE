
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Nandini Karnakoti",
    role: "Associate Manager – Marketing, Communication & Editorial",
    quote: "Serving as an Associate Manager at TEDxVCE was a rewarding experience. It was a pleasure collaborating with a passionate team and contributing to a platform that inspires meaningful change.",
    image: "/uploads/nandini.png"
  },
  {
    id: 2,
    name: "Ayush Roy",
    role: "Co-Founder, Culltique",
    quote: "As both a sponsor and attendee of TEDxVCE, I was impressed by the exceptional organization and the quality of ideas shared. The event perfectly captured the spirit of innovation and collaboration that Culltique stands for.",
    image: "/uploads/ayush.png"
  }
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/5 to-blue-500/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-amber-500/5 to-orange-500/5 blur-3xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        
        {/* Animated lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-[1px] bg-white/5"
            style={{ 
              width: `${30 + i * 10}%`,
              top: `${20 + i * 15}%`,
              left: `${i * 5}%`
            }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3 + i, repeat: Infinity }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What People Say About <span className="text-tedxred">TEDx</span>VCE
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-tedxred mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="relative h-96 overflow-hidden bg-black/20 backdrop-blur-sm rounded-2xl border border-white/5">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                index === current && (
                  <motion.div
                    key={testimonial.id}
                    className="absolute inset-0 p-8 md:p-12 flex flex-col md:flex-row items-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-br from-tedxred/30 to-amber-500/30 rounded-full blur-md"></div>
                        <motion.div 
                          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-white/20 overflow-hidden relative z-10"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover object-center"
                          />
                        </motion.div>
                      </div>
                    </div>
                    
                    <div className="text-center md:text-left flex-1">
                      <Quote className="w-12 h-12 text-tedxred/30 mx-auto md:mx-0 mb-4" />
                      
                      <blockquote className="text-xl md:text-2xl italic text-white/90 mb-6">
                        {testimonial.quote}
                      </blockquote>
                      
                      <div>
                        <div className="text-lg font-bold">{testimonial.name}</div>
                        <div className="text-sm text-tedxred">{testimonial.role}</div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            
            {/* Navigation buttons */}
            <div className="absolute bottom-6 right-6 flex space-x-3">
              <motion.button 
                className="w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center hover:bg-tedxred/80 transition-colors"
                onClick={handlePrev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              
              <motion.button 
                className="w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center hover:bg-tedxred/80 transition-colors"
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
            
            {/* Indicators */}
            <div className="absolute bottom-6 left-0 right-0">
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === current ? 'bg-tedxred' : 'bg-white/30'}`}
                    onClick={() => {
                      setAutoplay(false);
                      setCurrent(index);
                    }}
                    whileHover={{ scale: 1.5 }}
                    animate={{ scale: index === current ? [1, 1.2, 1] : 1 }}
                    transition={{ duration: 1, repeat: index === current ? Infinity : 0 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
