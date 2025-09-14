import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, ExternalLink, GraduationCap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => {
  const [selectedOption, setSelectedOption] = useState<'vardhaman' | 'outside' | null>(null);

  const facultyCoordinators = [
    { name: "Dr. Indrajeet Sahu", department: "Civil" },
    { name: "Dr. Praveen Kumar B", department: "EEE" },
    { name: "Dr. S Navya Sree", department: "Mech" },
    { name: "Mr. R Phani Vidyadhar", department: "ECE" },
    { name: "Mr. Mohan V", department: "CSE" },
    { name: "Mr. BJV Varma", department: "CSE" },
    { name: "Dr. Bhasker Reddy K", department: "IT" },
    { name: "Mr. A Sai Madhav Raj", department: "CSM" },
    { name: "Mr. M Ashwan Kumar", department: "CSD" },
    { name: "Dr. J Naga Padmaja", department: "AIML & AIDS" },
    { name: "Dr. G Padma", department: "Maths" },
    { name: "Dr. Shree Charan C", department: "MBA" }
  ];

  const handleOutsideClick = () => {
    window.open('https://www.meraevents.com/event/tedxvce2025', '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-tedxdark border border-white/10 rounded-2xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🎤 TEDx <span className="text-tedxred">Registrations</span> Open!
              </h2>
              <div className="flex items-center justify-center gap-4 text-tedxred mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🍱</span>
                  <span className="text-sm">Lunch Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎁</span>
                  <span className="text-sm">Goodie Bag</span>
                </div>
              </div>
              <p className="text-white/80">
                Choose your registration option below
              </p>
            </div>

            {/* Registration Options */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Vardhaman Students */}
              <motion.div
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedOption === 'vardhaman'
                    ? 'border-tedxred bg-tedxred/10'
                    : 'border-white/20 bg-black/40 hover:border-white/40'
                }`}
                onClick={() => setSelectedOption('vardhaman')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-tedxred/20 rounded-lg">
                    <GraduationCap className="text-tedxred" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Vardhaman Students</h3>
                    <p className="text-white/70 text-sm">Register through Faculty Coordinators</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-tedxred font-bold">₹600</span>
                    <span className="text-white/70">per ticket</span>
                  </div>
                  <div className="bg-tedxred/20 p-3 rounded-lg">
                    <p className="text-tedxred font-semibold text-sm">
                      ✨ Buy 5, Get 1 Free
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Outside Participants */}
              <motion.div
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedOption === 'outside'
                    ? 'border-tedxred bg-tedxred/10'
                    : 'border-white/20 bg-black/40 hover:border-white/40'
                }`}
                onClick={() => setSelectedOption('outside')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-tedxred/20 rounded-lg">
                    <Building2 className="text-tedxred" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Outside Participants</h3>
                    <p className="text-white/70 text-sm">Register online via MeraEvents</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-tedxred font-bold">₹600</span>
                    <span className="text-white/70">per ticket</span>
                  </div>
                  <div className="bg-tedxred/20 p-3 rounded-lg">
                    <p className="text-tedxred font-semibold text-sm">
                      ✨ Buy 5, Get 1 Free
                    </p>
                    <p className="text-tedxred font-semibold text-sm mt-1">
                      🌐 Online Registration Available
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Faculty Coordinators Section */}
            {selectedOption === 'vardhaman' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="text-tedxred" size={20} />
                  Faculty Coordinators
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {facultyCoordinators.map((coordinator, index) => (
                    <div
                      key={index}
                      className="bg-black/40 border border-white/10 rounded-lg p-4"
                    >
                      <p className="font-semibold text-white">{coordinator.name}</p>
                      <p className="text-tedxred text-sm">{coordinator.department}</p>
                    </div>
                  ))}
                </div>
                <p className="text-white/70 text-sm mt-4 text-center">
                  ✨ For registrations, reach out to your respective coordinator!
                </p>
              </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {selectedOption === 'vardhaman' && (
                <Button
                  onClick={onClose}
                  className="bg-tedxred hover:bg-tedxred/90 text-white px-8 py-3"
                >
                  Contact Your Coordinator
                </Button>
              )}
              
              {selectedOption === 'outside' && (
                <Button
                  onClick={handleOutsideClick}
                  className="bg-tedxred hover:bg-tedxred/90 text-white px-8 py-3 flex items-center gap-2"
                >
                  Register on MeraEvents
                  <ExternalLink size={16} />
                </Button>
              )}
              
              <Button
                onClick={onClose}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3"
              >
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegistrationModal;


