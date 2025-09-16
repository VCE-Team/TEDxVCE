import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Twitter, Mail, ChevronDown, Users, Filter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Team = () => {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);
  
  // Sample team data - in a real app, this would come from an API or database
  const teamMembers = [
    {
      id: 1,
      name: "Aniketh Kanna",
      role: "Organizer",
      department: "core",
      image: "/uploads/ani.png",
      linkedin: "https://www.linkedin.com/in/aniketh-kanna-003677299/",
      instagram: "https://www.instagram.com/aniketh.06/",
      email: "anikethdegala@gmail.com",
      bio: "Aniketh works closely with the Co-organizer to coordinate all aspects of TEDxVCE, ensuring seamless execution and maintaining the high standards of the event."
    },
    {
      id: 2,
      name: "Sudeep Banerjee Chopra",
      role: "Co-organizer",
      department: "core",
      image: "/uploads/sirboy.png",
      linkedin: "https://www.linkedin.com/in/sudeepbanerjeechopra/",
      instagram: "https://www.instagram.com/sudeep_almost_found/",
      email: "sudeepbanerjee@ieee.org",
      bio: "Sudeep leads the TEDxVCE organizing team with 5+ years of experience in event management. His passion for spreading ideas drives the vision for our annual conference."
    },
    // {
    //   id: 3,
    //   name: "TBD",
    //   role: "Technical Lead",
    //   department: "technical",
    //   image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
    //   linkedin: "#",
    //   instagram: "#",
    //   email: "technical@vardhaman.org",
    //   bio: "Position to be filled. The Technical Lead will ensure flawless technical execution of the TEDxVCE event, from sound quality to lighting and presentation support."
    // },
    // {
    //   id: 4,
    //   name: "TBD",
    //   role: "Marketing Head",
    //   department: "marketing",
    //   image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
    //   linkedin: "#",
    //   instagram: "#",
    //   email: "marketing@vardhaman.org",
    //   bio: "Position to be filled. The Marketing Head will lead brand strategy and promotional campaigns for TEDxVCE, leveraging digital marketing and community outreach."
    // },
    // {
    //   id: 5,
    //   name: "TBD",
    //   role: "Design Lead",
    //   department: "creative",
    //   image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
    //   linkedin: "#",
    //   instagram: "#",
    //   email: "design@vardhaman.org",
    //   bio: "Position to be filled. The Design Lead will oversee the visual identity of TEDxVCE, from event branding to stage design, creating immersive experiences."
    // },
    {
      id: 6,
      name: "Lohith Kumar Teerthala",
      role: "Curator",
      department: "core",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "https://www.linkedin.com/in/lohith-kumar-teerthala-9b04aa197/",
      instagram: "https://www.instagram.com/_nani_lohith_19_/",
      email: "curator@vardhaman.org",
      bio: "Lohith Kumar Teerthala serves as the Curator for TEDxVCE, overseeing speaker selection and content development. He ensures each talk delivers powerful ideas worth spreading and maintains the high standards of TEDx events."
    },
    // {
    //   id: 7,
    //   name: "TBD",
    //   role: "Volunteer Coordinator",
    //   department: "operations",
    //   image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
    //   linkedin: "#",
    //   instagram: "#",
    //   email: "volunteer@vardhaman.org",
    //   bio: "Position to be filled. The Volunteer Coordinator will recruit, train, and manage the TEDxVCE volunteer team, ensuring smooth operations on event day."
    // },
    // {
    //   id: 8,
    //   name: "TBD",
    //   role: "Sponsorship Coordinator",
    //   department: "marketing",
    //   image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
    //   linkedin: "#",
    //   instagram: "#",
    //   email: "sponsorship@vardhaman.org",
    //   bio: "Position to be filled. The Sponsorship Coordinator will build partnerships with sponsors and supporters, securing resources for an exceptional TEDxVCE experience."
    // },
    {
      id: 9,
      name: "Dr. JVR Ravindra",
      role: "Principal, VCE",
      department: "faculty",
      image: "/uploads/dr-jvr-ravindra.png",
      linkedin: "#",
      email: "principal@vardhaman.org",
      bio: "Dr. JVR Ravindra serves as the Principal of Vardhaman College of Engineering, providing overall leadership and guidance for the institution."
    },
    {
      id: 10,
      name: "Dr. E. R. Aruna",
      role: "Dean, IQAC",
      department: "faculty",
      image: "/uploads/dr-e-r-aruna.png",
      linkedin: "#",
      email: "iqac@vardhaman.org",
      bio: "Dr. E. R. Aruna serves as the Dean of Internal Quality Assurance Cell, ensuring academic excellence and quality standards."
    },
    {
      id: 11,
      name: "Dr. Muni Shekar Velpuru",
      role: "Dean, CDC",
      department: "faculty",
      image: "/uploads/muni.png",
      linkedin: "#",
      email: "cdc@vardhaman.org",
      bio: "Dr. Muni Shekar Velpuru serves as the Dean of Career Development Cell, guiding students in their professional development."
    },
    {
      id: 12,
      name: "Dr. Siddartha Reddy",
      role: "Assistant COE, Examinations",
      department: "faculty",
      image: "/uploads/dr-siddartha-reddy.png",
      linkedin: "#",
      email: "examinations@vardhaman.org",
      bio: "Dr. Siddartha Reddy serves as the Assistant COE of Examinations, overseeing academic assessment and evaluation processes."
    },
    {
      id: 13,
      name: "Dr. P. Venkateshwar Reddy",
      role: "HoD, Mechanical Engineering",
      department: "faculty",
      image: "/uploads/dr-p-venkateshwar-reddy.png",
      linkedin: "#",
      email: "mech.hod@vardhaman.org",
      bio: "Dr. P. Venkateshwar Reddy serves as the Head of Department for Mechanical Engineering, leading the department's academic and research initiatives."
    },
    {
      id: 14,
      name: "Dr. Md Asif",
      role: "Dean, Student Affairs Cell",
      department: "faculty",
      image: "/uploads/dr-md-asif.png",
      linkedin: "#",
      email: "studentaffairs@vardhaman.org",
      bio: "Dr. Md Asif serves as the Dean of Student Affairs Cell, supporting student welfare and extracurricular activities."
    },
    {
      id: 15,
      name: "Dr. S. Rajender",
      role: "Dean, Academics",
      department: "faculty",
      image: "/uploads/dr-s-rajender.png",
      linkedin: "#",
      email: "academics@vardhaman.org",
      bio: "Dr. S. Rajender serves as the Dean of Academics, overseeing academic programs and curriculum development."
    },
    {
      id: 16,
      name: "Prof. Vivek Kulkarni",
      role: "Dean, Faculty Affairs",
      department: "faculty",
      image: "/uploads/prof-vivek-kulkarni.png",
      linkedin: "#",
      email: "facultyaffairs@vardhaman.org",
      bio: "Prof. Vivek Kulkarni serves as the Dean of Faculty Affairs, managing faculty development and administrative matters."
    },
    {
      id: 17,
      name: "Aron D'Souza",
      role: "Executive Producer",
      department: "core",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "https://www.linkedin.com/in/arondsouza369/",
      instagram: "https://www.instagram.com/arondsouza3/",
      email: "executive.producer@vardhaman.org",
      bio: "Aron D'Souza serves as the Executive Producer for TEDxVCE, overseeing the overall production and execution of TEDxVCE, ensuring all elements come together seamlessly."
    },
    {
      id: 18,
      name: "Manish Palusam ",
      role: "Operations Manager ",
      department: "operations",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 19,
      name: "Buddavaram Sheshaswi",
      role: "Associate Manager",
      department: "operations",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 20,
      name: "Dhiren Rao",
      role: "Associate Manager",
      department: "operations",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 21,
      name: "Ananya Charaka",
      role: "Associate Manager",
      department: "operations",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 22,
      name: "Franzonia",
      role: "Manager",
      department: "Finance",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 23,
      name: "M Tanvi",
      role: "Associate Manager",
      department: "Finance",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 24,
      name: "Akshaya Peddapatla",
      role: "Associate Manager",
      department: "Finance",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 25,
      name: "G Vaishnavi",
      role: "Associate Manager",
      department: "Finance",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 26,
      name: "Satya Subham",
      role: "Associate Manager",
      department: "Finance",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 27,
      name: "K Spandana",
      role: "Associate Manager",
      department: "Finance",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 28,
      name: "Karnakoti Nandini",
      role: "Manager",
      department: "marketing",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 29,
      name: "G Rishikesh",
      role: "Associate Manager",
      department: "marketing",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 30,
      name: "Sathvik Reddy",
      role: "Associate Manager",
      department: "marketing",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 31,
      name: "Pavan Kumar",
      role: "Associate Manager",
      department: "marketing",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 32,
      name: "Edla Rohan",
      role: "Associate Manager",
      department: "marketing",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 33,
      name: "P Yasawini",
      role: "Associate Manager",
      department: "marketing",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 34,
      name: "Himavardhan Reddy Venna ",
      role: "Website Manager",
      department: "technical",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 35,
      name: "Mayur Rathi",
      role: "Production Manager",
      department: "technical",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 36,
      name: "Mohit Chandra",
      role: "Manager",
      department: "social",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 37,
      name: "Omar Ayub",
      role: "Designer",
      department: "social",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 38,
      name: "Herakar Nithish",
      role: "Associate Manager",
      department: "social",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 39,
      name: "Shradha",
      role: "Content Writer",
      department: "social",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 40,
      name: "Kushi Sajjan",
      role: "Manager",
      department: "hospitality",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 41,
      name: "G Durga Prasad",
      role: "Associate Manager",
      department: "hospitality",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 42,
      name: "P Manasa",
      role: "Associate Manager",
      department: "hospitality",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 43,
      name: "Akshaya",
      role: "Associate Manager",
      department: "hospitality",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 44,
      name: "Bandari Sai Ritheesh",
      role: "Associate Manager",
      department: "hospitality",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 45,
      name: "Farhath",
      role: "Associate Manager",
      department: "hospitality",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 46,
      name: "E Durga Prasad",
      role: "Associate Manager",
      department: "hospitality",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 47,
      name: "Sreya Monala",
      role: "Manager",
      department: "anchoring",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 48,
      name: "Anumita Choubey",
      role: "Associate Manager",
      department: "anchoring",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 49,
      name: "Arjun",
      role: "Associate Manager",
      department: "anchoring",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 50,
      name: "Aishwarya Reddy",
      role: "Associate Manager",
      department: "anchoring",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    {
      id: 51,
      name: "Sidda Sankalp",
      role: "Associate Manager",
      department: "anchoring",
      image: "/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png",
      linkedin: "#",
      instagram: "#",
      email: "#",
      bio: ""
    },
    
  ];

  const toggleMember = (id: number) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  return (
    <div className="bg-tedxdark min-h-screen text-white">
      <Navbar />
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="mb-12 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-tedxred/20 to-amber-500/20 px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4 mr-2 text-tedxred" />
              <span className="text-sm font-medium">Our Team</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet The <span className="text-tedxred">Minds</span> Behind TEDxVCE
            </h1>
            
            <motion.div 
              className="w-20 h-1 bg-tedxred mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            
            <p className="text-white/70 text-center max-w-3xl mx-auto mb-12">
              Dedicated individuals working together to bring ideas worth spreading to Vardhaman College of Engineering.
            </p>
          </motion.div>

          <Tabs defaultValue="core" className="mb-12">
          <div className="flex justify-start sm:justify-center mb-8 w-full">
                <TabsList className="flex overflow-x-auto whitespace-nowrap scrollbar-hide bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg px-2 py-1 w-full sm:w-auto">
                  <TabsTrigger value="core" className="data-[state=active]:bg-tedxred px-4 py-2">Core Team</TabsTrigger>
                  <TabsTrigger value="faculty" className="data-[state=active]:bg-tedxred px-4 py-2">Faculty</TabsTrigger>
                  <TabsTrigger value="technical" className="data-[state=active]:bg-tedxred px-4 py-2">Technical</TabsTrigger>
                  <TabsTrigger value="Finance" className="data-[state=active]:bg-tedxred px-4 py-2">Finance</TabsTrigger>
                  <TabsTrigger value="operations" className="data-[state=active]:bg-tedxred px-4 py-2">Operations</TabsTrigger>
                  <TabsTrigger value="marketing" className="data-[state=active]:bg-tedxred px-4 py-2">Marketing & PR</TabsTrigger>
                  <TabsTrigger value="social" className="data-[state=active]:bg-tedxred px-4 py-2">Social Media & Designing</TabsTrigger>
                  <TabsTrigger value="hospitality" className="data-[state=active]:bg-tedxred px-4 py-2">Hospitality</TabsTrigger>
                  <TabsTrigger value="anchoring" className="data-[state=active]:bg-tedxred px-4 py-2">Anchoring</TabsTrigger>
                </TabsList>
              </div>



            <TabsContent value="core" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teamMembers
                  .filter(member => member.department === "core")
                  .map((member, index) => (
                    <TeamMemberCard 
                      key={member.id}
                      member={member} 
                      index={index}
                      isExpanded={expandedMember === member.id} 
                      toggleExpanded={() => toggleMember(member.id)} 
                    />
                  ))}
              </div>
            </TabsContent>

            {/* <TabsContent value="creative" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teamMembers
                  .filter(member => member.department === "creative")
                  .map((member, index) => (
                    <TeamMemberCard 
                      key={member.id}
                      member={member} 
                      index={index}
                      isExpanded={expandedMember === member.id} 
                      toggleExpanded={() => toggleMember(member.id)} 
                    />
                  ))}
              </div>
            </TabsContent> */}

            <TabsContent value="technical" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teamMembers
                  .filter(member => member.department === "technical")
                  .map((member, index) => (
                    <TeamMemberCard 
                      key={member.id}
                      member={member} 
                      index={index}
                      isExpanded={expandedMember === member.id} 
                      toggleExpanded={() => toggleMember(member.id)} 
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teamMembers
                  .filter(member => member.department === "marketing")
                  .map((member, index) => (
                    <TeamMemberCard 
                      key={member.id}
                      member={member} 
                      index={index}
                      isExpanded={expandedMember === member.id} 
                      toggleExpanded={() => toggleMember(member.id)} 
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="Finance" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teamMembers
                  .filter(member => member.department === "Finance")
                  .map((member, index) => (
                    <TeamMemberCard 
                      key={member.id}
                      member={member} 
                      index={index}
                      isExpanded={expandedMember === member.id} 
                      toggleExpanded={() => toggleMember(member.id)} 
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="social" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teamMembers
                  .filter(member => member.department === "social")
                  .map((member, index) => (
                    <TeamMemberCard 
                      key={member.id}
                      member={member} 
                      index={index}
                      isExpanded={expandedMember === member.id} 
                      toggleExpanded={() => toggleMember(member.id)} 
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="hospitality" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teamMembers
                  .filter(member => member.department === "hospitality")
                  .map((member, index) => (
                    <TeamMemberCard 
                      key={member.id}
                      member={member} 
                      index={index}
                      isExpanded={expandedMember === member.id} 
                      toggleExpanded={() => toggleMember(member.id)} 
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="anchoring" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teamMembers
                  .filter(member => member.department === "anchoring")
                  .map((member, index) => (
                    <TeamMemberCard 
                      key={member.id}
                      member={member} 
                      index={index}
                      isExpanded={expandedMember === member.id} 
                      toggleExpanded={() => toggleMember(member.id)} 
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="operations" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teamMembers
                  .filter(member => member.department === "operations")
                  .map((member, index) => (
                    <TeamMemberCard 
                      key={member.id}
                      member={member} 
                      index={index}
                      isExpanded={expandedMember === member.id} 
                      toggleExpanded={() => toggleMember(member.id)} 
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="faculty" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teamMembers
                  .filter(member => member.department === "faculty")
                  .map((member, index) => (
                    <TeamMemberCard 
                      key={member.id}
                      member={member} 
                      index={index}
                      isExpanded={expandedMember === member.id} 
                      toggleExpanded={() => toggleMember(member.id)} 
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <motion.div 
            className="mt-20 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center max-w-4xl mx-auto relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Animated background elements */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`circle-${i}`}
                  className="absolute rounded-full bg-tedxred/5"
                  style={{ 
                    width: `${80 + i * 20}px`, 
                    height: `${80 + i * 20}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    x: [0, 10, 0],
                    y: [0, 15, 0]
                  }}
                  transition={{ 
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              ))}
            </motion.div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-white/80 mb-8">
                Passionate about ideas worth spreading? Interested in event organizing, marketing, design, or technical production?
                Join our team of volunteers and help make TEDxVCE a success!
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-tedxred hover:bg-tedxred/90 text-white font-medium py-3 px-8 rounded-md transition-colors"
                >
                  Apply to Volunteer
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

interface TeamMemberCardProps {
  member: {
    id: number;
    name: string;
    role: string;
    department: string;
    image: string;
    linkedin: string;
    instagram?: string;
    email: string;
    bio: string;
  };
  index: number;
  isExpanded: boolean;
  toggleExpanded: () => void;
}

const TeamMemberCard = ({ member, index, isExpanded, toggleExpanded }: TeamMemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-black/40 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 ${
        isExpanded ? "border-tedxred/50 shadow-lg shadow-tedxred/5" : "border-white/10 hover:border-white/30"
      }`}
    >
      <div className="aspect-square overflow-hidden">
        <motion.img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover object-center transition-transform duration-300"
          animate={{ scale: isExpanded ? 1.1 : 1 }}
          whileHover={{ scale: 1.05 }}
        />
      </div>
      
      <div className="p-4">
        <div className="text-center">
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-tedxred">{member.role}</p>
          
          <motion.div 
            className="mt-3 flex justify-center space-x-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <a 
              href={member.linkedin} 
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-tedxred/90 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            {member.instagram && (
              <a 
                href={member.instagram} 
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-tedxred/90 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            )}
            <a 
              href={`mailto:${member.email}`} 
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-tedxred/90 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
          
          <Button 
            onClick={toggleExpanded}
            variant="ghost" 
            className="mt-4 text-sm text-white/70 hover:text-white flex items-center justify-center w-full"
            size="sm"
          >
            {isExpanded ? "Show Less" : "Read Bio"} 
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="ml-1 w-4 h-4" />
            </motion.div>
          </Button>
        </div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-3 pb-2 border-t border-white/10 mt-3">
                <p className="text-sm text-white/70">{member.bio}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Team;