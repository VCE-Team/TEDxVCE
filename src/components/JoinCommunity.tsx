
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight, Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const JoinCommunity = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
      
      toast({
        title: "Success!",
        description: "You've been added to our mailing list.",
        variant: "default"
      });
      
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-tedxred/20"
            style={{ 
              width: `${2 + Math.random() * 4}px`, 
              height: `${2 + Math.random() * 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{ 
              y: [0, -100],
              opacity: [0, 0.7, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 5 + Math.random() * 10,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our <span className="text-tedxred">Community</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Subscribe to our newsletter to stay updated with the latest news, 
              speaker announcements, and exclusive content from TEDxVCE.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-tedxdark/80 backdrop-blur-lg border border-white/10 p-8 md:p-10 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 pointer-events-none" />
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-black/40 border-white/10 pl-10 h-12 text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting || isSuccess}
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className={`h-12 px-6 ${isSuccess ? 'bg-green-600 hover:bg-green-700' : 'bg-tedxred hover:bg-tedxred/90'} transition-all duration-300`}
              >
                {isSubmitting ? (
                  <motion.div 
                    className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : isSuccess ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
            
            <div className="mt-6 text-sm text-white/50 text-center">
              By subscribing, you agree to receive email communications from TEDxVCE.
              <br />We respect your privacy and will never share your information.
            </div>
            
            <motion.div 
              className="mt-8 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {["Previous Events", "Speaker Applications", "Volunteer", "Sponsorship"].map((tag, index) => (
                <motion.div 
                  key={tag}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm cursor-pointer transition-colors"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(230, 43, 30, 0.2)" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tag}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
