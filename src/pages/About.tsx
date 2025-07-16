
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { InfoIcon, ArrowRight, Globe, Calendar, Users, Lightbulb, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqalkwga");
  
  if (state.succeeded) {
    return (
      <div className="text-center py-4">
        <div className="text-green-400 text-lg font-medium mb-2">✓ Message Sent!</div>
        <p className="text-white/70 text-sm">Thanks for reaching out! We'll get back to you soon.</p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <input 
            id="name"
            type="text" 
            name="name"
            placeholder="Your Name" 
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:border-tedxred/50"
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
            className="text-red-400 text-sm mt-1"
          />
        </div>
        
        <div>
          <input 
            id="email"
            type="email" 
            name="email"
            placeholder="Your Email" 
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:border-tedxred/50"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-400 text-sm mt-1"
          />
        </div>
        
        <div>
          <textarea 
            id="message"
            name="message"
            placeholder="Your Message" 
            rows={4} 
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:border-tedxred/50 resize-none"
          ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-400 text-sm mt-1"
          />
        </div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            type="submit" 
            disabled={state.submitting}
            className="w-full bg-tedxred hover:bg-tedxred/90 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.div>
      </div>
    </form>
  );
};

const About = () => {
  const [hoveredImg, setHoveredImg] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("about");
  
  useEffect(() => {
    // Check if URL has #theme hash and set the active tab accordingly
    if (window.location.hash === '#theme') {
      setActiveTab('theme');
    }
  }, []);
  
  const timelineEvents = [
    {
      year: "2010",
      title: "TED introduces TEDx",
      description: "TED launches the TEDx program to enable independent organizers to create TED-like events in their communities."
    },
    {
      year: "2022",
      title: "The Beginning",
      description: "Students at Vardhaman College of Engineering establish the TEDxVCE license and begin planning the inaugural event.",
      achievements: ["License obtained", "Core team formed", "First event planning"]
    },
    {
      year: "2023",
      title: "First TEDxVCE Event",
      description: "The inaugural TEDxVCE event brings together speakers from diverse fields to share ideas worth spreading."
    },
    {
      year: "2024",
      title: "Program Expansion",
      description: "TEDxVCE grows to include workshops, engagement programs, and increased student involvement."
    },
    {
      year: "2025",
      title: "Looking Forward",
      description: "The upcoming TEDxVCE 2025 event will feature our most diverse lineup of speakers and interactive experiences."
    }
  ];
  
  const pastEventImages = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  ];
  
  const coreValues = [
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
      title: "Ideas Worth Spreading",
      description: "We are committed to finding and sharing ideas that can change perspectives and ultimately, the world."
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: "Community Connection",
      description: "We believe in the power of bringing people together to foster understanding and spark innovation."
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: "Diversity of Thought",
      description: "We celebrate diverse perspectives and believe the best ideas emerge from a variety of viewpoints."
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-400" />,
      title: "Excellence in Experience",
      description: "We strive to create memorable, high-quality events that inspire and engage our audience."
    }
  ];
  
  return (
    <div className="bg-tedxdark min-h-screen text-white">
      <Navbar />
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Hero section */}
            <motion.div 
              className="mb-16 md:mb-24 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              {/* Background elements */}
              <div className="absolute inset-0 overflow-hidden -z-10">
                <motion.div 
                  className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-tedxred/10 to-amber-500/5 blur-3xl"
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                  transition={{ duration: 25, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/5 blur-3xl"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
                  transition={{ duration: 20, repeat: Infinity }}
                />
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center bg-gradient-to-r from-tedxred/20 to-amber-500/20 px-4 py-2 rounded-full mb-4">
                  <InfoIcon className="w-4 h-4 mr-2 text-tedxred" />
                  <span className="text-sm font-medium">About Us</span>
                </div>
                
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  About <span className="text-tedxred">TEDx</span>VCE
                </motion.h1>
                
                <motion.div 
                  className="w-20 h-1 bg-tedxred mx-auto mb-8"
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
                
                <p className="text-white/70 text-center max-w-4xl mx-auto">
                  Independently organized TED event hosted by Vardhaman College of Engineering,
                  bringing together innovators, thinkers, and doers to share ideas worth spreading.
                </p>
              </div>
            </motion.div>
            
            {/* Main content with tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-black/40 backdrop-blur-sm border border-white/10">
                  <TabsTrigger value="about" className="data-[state=active]:bg-tedxred">About TEDx</TabsTrigger>
                  <TabsTrigger value="mission" className="data-[state=active]:bg-tedxred">Our Mission</TabsTrigger>
                  <TabsTrigger value="history" className="data-[state=active]:bg-tedxred">History</TabsTrigger>
                  <TabsTrigger value="theme" className="data-[state=active]:bg-tedxred">2025 Theme</TabsTrigger>
                </TabsList>
              </div>
              
              <motion.div 
                className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <TabsContent value="about" className="mt-0 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <motion.h2 
                        className="text-2xl md:text-3xl font-bold mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        What is TEDx?
                      </motion.h2>
                      
                      <motion.div 
                        className="prose prose-lg prose-invert"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                      >
                        <p>
                          In the spirit of ideas worth spreading, TED has created a program called TEDx. 
                          TEDx is a program of local, self-organized events that bring people together to share 
                          a TED-like experience.
                        </p>
                        
                        <p>
                          At our TEDxVCE event, TED Talks video and live speakers combine to spark deep discussion and 
                          connection in a small group. The TED Conference provides general guidance for the TEDx program, 
                          but individual TEDx events, including ours, are self-organized.
                        </p>
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="relative"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, delay: 0.4 }}
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-tedxred/30 to-amber-500/30 rounded-xl blur-md"></div>
                      <div className="relative rounded-xl overflow-hidden aspect-video">
                        <iframe 
                          className="w-full h-full" 
                          src="https://www.youtube.com/embed/d0NHOpeczUU" 
                          title="What is TEDx?" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </motion.div>
                  </div>
                </TabsContent>
                
                <TabsContent value="mission" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div 
                      className="order-2 md:order-1"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                    >
                      <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
                      
                      <div className="prose prose-lg prose-invert mb-6">
                        <p>
                          Our mission is to discover and help spread ideas that spark imagination, embrace possibility 
                          and catalyze impact. By bringing together people who are curious and engaged, we aim to inspire 
                          conversations, build connections, and trigger action for a better future.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {coreValues.map((value, index) => (
                          <motion.div 
                            key={value.title}
                            className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:border-tedxred/30 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                          >
                            <div className="flex items-start space-x-4">
                              <div className="bg-white/5 p-3 rounded-lg">
                                {value.icon}
                              </div>
                              <div>
                                <h3 className="font-bold mb-1">{value.title}</h3>
                                <p className="text-sm text-white/70">{value.description}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="order-1 md:order-2 relative h-full"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                    >
                      <div className="relative h-full min-h-[300px] flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div 
                            className="w-60 h-60 rounded-full bg-tedxred/10 absolute"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 8, repeat: Infinity }}
                          />
                          <motion.div 
                            className="w-80 h-80 rounded-full bg-amber-500/5 absolute"
                            animate={{ scale: [1.2, 1, 1.2] }}
                            transition={{ duration: 10, repeat: Infinity }}
                          />
                          <motion.div 
                            className="w-40 h-40 rounded-full bg-blue-500/10 absolute"
                            animate={{ scale: [0.8, 1, 0.8] }}
                            transition={{ duration: 6, repeat: Infinity }}
                          />
                        </div>
                        
                        <motion.div 
                          className="bg-black/40 backdrop-blur-sm border border-white/10 p-8 rounded-xl relative"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <h3 className="text-xl font-bold mb-3 text-tedxred">Our Impact</h3>
                          <ul className="space-y-3 text-white/80">
                            <li className="flex items-start">
                              <span className="text-tedxred mr-2">→</span> 
                              <span>500+ attendees in past events</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-tedxred mr-2">→</span> 
                              <span>25+ speakers who have shared ideas</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-tedxred mr-2">→</span> 
                              <span>3,000+ online viewers of our talks</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-tedxred mr-2">→</span> 
                              <span>50+ student volunteers engaged</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-tedxred mr-2">→</span> 
                              <span>15+ local partnerships formed</span>
                            </li>
                          </ul>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </TabsContent>
                
                <TabsContent value="history" className="mt-0">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Journey</h2>
                  
                  <div className="relative">
                    {/* Timeline connector */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-tedxred via-amber-500/70 to-tedxred/50"></div>
                    
                    <div className="relative z-10">
                      {timelineEvents.map((event, index) => (
                        <motion.div 
                          key={event.year}
                          className="mb-12 md:mb-16 last:mb-0"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                            <div className="flex-1 md:text-right pb-6 md:pb-0 md:px-8">
                              <h3 className="text-xl md:text-2xl font-bold mb-2">{event.title}</h3>
                              <p className="text-white/70">{event.description}</p>
                            </div>
                            
                            <div className="relative flex justify-center items-center">
                              <div className="absolute w-6 h-6 rounded-full bg-white"></div>
                              <div className="w-12 h-12 rounded-full bg-tedxred flex items-center justify-center">
                                <span className="font-bold text-sm">{event.year}</span>
                              </div>
                            </div>
                            
                            <div className="flex-1 pt-6 md:pt-0 md:px-8">
                              <div className="h-24 md:h-32 overflow-hidden rounded-lg">
                                <div 
                                  className="bg-gradient-to-r from-tedxred/20 to-amber-500/20 h-full w-full flex items-center justify-center"
                                  style={{ opacity: index % 2 === 0 ? 1 : 0.7 }}
                                >
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="theme" className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                    >
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">Theme of TEDxVCE 2025</h2>
                      
                      <div className="bg-gradient-to-r from-tedxred/20 to-amber-500/20 px-4 py-2 inline-block rounded-lg mb-6">
                        <span className="text-xl font-bold">Synergy Surge</span>
                      </div>
                      
                      <div className="prose prose-lg prose-invert">
                        <p>
                          Our upcoming event explores "Synergy Surge" – examining how the power of collaboration, 
                          combined effort, and collective energy can create exponential impact and drive innovation forward.
                        </p>
                        
                        <p>
                          In a world where people work together, the biggest ideas don't come from lone individuals, 
                          but from the combined energy of many different thoughts coming together. The celebration of 
                          that spark, the unexpected momentum that emerges when people connect, ideas align, and 
                          communities advance together, is known as Synergy Surge.
                        </p>
                        
                        <p>
                          Come explore how collaboration propels advancements in science, art, technology, social 
                          impact, and other fields via a day of thought-provoking presentations, interactive 
                          experiences, and compelling anecdotes from speakers from a variety of disciplines.
                        </p>
                        
                        <p>
                          In a world where individual efforts are amplified through strategic partnerships and 
                          collaborative networks, we aim to showcase ideas that demonstrate the transformative 
                          power of synergy across disciplines, industries, and communities.
                        </p>
                        
                        <p>
                          Our speakers will share insights on harnessing collective intelligence, building 
                          powerful partnerships, and creating momentum through collaborative innovation 
                          that propels us toward breakthrough solutions.
                        </p>
                      </div>
                      
                      <motion.div 
                        className="mt-8"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Button className="bg-tedxred hover:bg-tedxred/90 text-white group">
                          <span>Apply to Speak</span>
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </motion.div>
                    </motion.div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {pastEventImages.map((img, index) => (
                        <motion.div
                          key={index}
                          className="relative rounded-lg overflow-hidden aspect-square"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                          onMouseEnter={() => setHoveredImg(index)}
                          onMouseLeave={() => setHoveredImg(null)}
                        >
                          <img 
                            src={img} 
                            alt="Past TEDxVCE Event" 
                            className="w-full h-full object-cover transition-transform duration-700"
                            style={{
                              transform: hoveredImg === index ? 'scale(1.1)' : 'scale(1)'
                            }}
                          />
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hoveredImg === index ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="p-3">
                              <span className="text-sm font-medium">Past Event Highlight</span>
                            </div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </motion.div>
            </Tabs>
            
            {/* Connect section */}
            <motion.div 
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 lg:p-10 relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Background decorative elements */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div 
                  className="absolute top-0 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-tedxred/10 to-amber-500/5 blur-3xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
              </div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Connect With Us</h3>
                  <p className="mb-4 text-white/70">
                    Want to get involved with TEDxVCE? We're always looking for volunteers, partners, and speakers 
                    who share our passion for ideas worth spreading.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                    <motion.div
                      className="bg-black/40 backdrop-blur-sm border border-white/10 p-4 rounded-lg hover:border-tedxred/40 transition-colors"
                      whileHover={{ y: -5, borderColor: "rgba(230, 43, 30, 0.5)" }}
                    >
                      <h4 className="font-medium text-tedxred">Become a Speaker</h4>
                      <p className="text-white/70 text-sm mt-2">Have an idea worth sharing? Apply to speak at our next event.</p>
                    </motion.div>
                    
                    <motion.div
                      className="bg-black/40 backdrop-blur-sm border border-white/10 p-4 rounded-lg hover:border-tedxred/40 transition-colors"
                      whileHover={{ y: -5, borderColor: "rgba(230, 43, 30, 0.5)" }}
                    >
                      <h4 className="font-medium text-tedxred">Volunteer With Us</h4>
                      <p className="text-white/70 text-sm mt-2">Join our dedicated team in organizing future TEDxVCE events.</p>
                    </motion.div>
                    
                    <motion.div
                      className="bg-black/40 backdrop-blur-sm border border-white/10 p-4 rounded-lg hover:border-tedxred/40 transition-colors"
                      whileHover={{ y: -5, borderColor: "rgba(230, 43, 30, 0.5)" }}
                    >
                      <h4 className="font-medium text-tedxred">Partner With Us</h4>
                      <p className="text-white/70 text-sm mt-2">Support ideas worth spreading as a sponsor or partner.</p>
                    </motion.div>
                  </div>
                </div>
                
                <div className="bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Mail className="w-5 h-5 text-tedxred mr-2" />
                    <h4 className="font-bold text-lg">Get In Touch</h4>
                  </div>
                  
                  <ContactForm />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
