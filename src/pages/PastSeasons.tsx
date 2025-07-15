
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PastSeasons = () => {
  const navigate = useNavigate();
  
  // Past events data for TEDxVCE
  const pastEvents = [
    {
      id: 1,
      year: "2024",
      theme: "Beyond Limits",
      season: "Season 4",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "TEDxVCE 2024 explored the concept of pushing beyond conventional boundaries and limitations. Speakers shared insights on transcending perceived barriers in technology, society, and personal achievement.",
      speakers: [
        "Chinna Gangaram Nagula - Farmer",
        "Deepa Chandrasekaran - Author",
        "Dr. Guru Prasad - Managing Director, Kanaada Phonetics Pvt. Ltd",
        "Dr. Sudheer Dara - Founder & Director, EPIONE Centre For Pain Relief",
        "Dr. Sujatha R - Principal (Entrepreneur Education), Wadhwani Entrepreneur",
        "Dr. Vishwanand Pattar - HR Business Partner",
        "Prabhakar Alladi - Innovator & Social Entrepreneur",
        "Shrikant Sinha - CEO, Telangana Academy for Skill and Knowledge",
        "Srinivasa Reddy Y - Actor",
        "Tejaswini Pagadala - Director (Communications), TechDoQuest",
        "Yeshwanth Nag M - Founder, The ThickShake Factory"
      ],
      videos: "https://www.youtube.com/playlist?list=example2024"
    },
    {
      id: 2,
      year: "2022",
      theme: "Breakthrough",
      season: "Season 3",
      image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Our 2022 event focused on breakthrough innovations and discoveries that were reshaping our world. The talks highlighted revolutionary ideas and transformative solutions across various fields.",
      speakers: [
        "Amit Bansal - Founder, Smart Interviews",
        "Hari Chandana Dasari - IAS Officer",
        "Kranthi R Vardhan - Ayurveda Spine Specialist",
        "Mahesh Sharma - Air Force Veteran",
        "Mallesham Chintakindi - Traditional Weaver",
        "Nahyr Sehgal - Innovator",
        "Praveen Thomas Varghese - Program Manager, Tutorialspoint",
        "Ramniet S Mukherjee - Philanthropist",
        "Shakeel Ahmed - Professor",
        "Srinivos Mimicry - Mimicry Artist",
        "Sujit Jha - Co-founder, Legal Salah"
      ],
      videos: "https://www.youtube.com/playlist?list=example2022"
    },
    {
      id: 3,
      year: "2021",
      theme: "Breaking Barriers",
      season: "Season 2",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "TEDxVCE 2021 explored the concept of breaking barriers in society, technology, and personal development. Speakers shared powerful stories of overcoming obstacles and creating positive change.",
      speakers: [
        "Ankur Mittal - Student, IIM Calcutta",
        "Atun Roy Choudhury - Technical HoD, Faecal Sludge Management division, Banka BioLoo Limited",
        "Diwakar Singh - CEO, Avishkar Soft Labs Pvt Ltd",
        "Dr. Amit Verma - CEO & Founder, Vrikshakalpa Ayurveda",
        "Dr. Nancy Juneja - Founder, RevUp Life Skills",
        "Dr. Seema Gupta - Author & Consultant",
        "Raj Janagam - Serial Social Entrepreneur",
        "Santosh Avvannavar - CEO, QtSTEAM",
        "Suresh Mansharamani - Founder, Tajurba Business Network Pvt Ltd",
        "Thavamani Kotishwaran - Independent Consultant, Kognitif Solutions"
      ],
      videos: "https://www.youtube.com/playlist?list=example2021"
    },
    {
      id: 4,
      year: "2019",
      theme: "Imagination",
      season: "Season 1",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "The inaugural TEDxVCE 2019 event celebrated the power of imagination and creativity. Our first season brought together visionaries who shared ideas that sparked innovation and inspired change.",
      speakers: [
        "Dr. Priya Shah - Innovation Expert",
        "Rahul Mehta - Creative Technologist",
        "Dr. Anjali Desai - Research Pioneer",
        "Vikram Singh - Entrepreneur"
      ],
      videos: "https://youtube.com/playlist?list=PLsRNoUx8w3rMWpIyO_ON4wJuTWq1L9Aho&si=eCqb4Ng-z8ZJ8sdQ"
    }
  ];

  return (
    <div className="bg-tedxdark min-h-screen text-white">
      <Navbar />
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Past <span className="text-tedxred">Seasons</span>
            </h1>
            <p className="text-xl text-white/80">
              Explore the history of TEDxVCE and revisit our previous events.
            </p>
          </div>

          <div className="space-y-20">
            {pastEvents.map((event, index) => (
              <div 
                key={event.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div 
                  className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className="relative">
                    <div className="absolute -inset-1 bg-tedxred/20 rounded-lg blur-md"></div>
                    <div className="relative aspect-video bg-black/70 border border-white/10 rounded-lg overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={`TEDxVCE ${event.year}`} 
                        className="w-full h-full object-cover object-center opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                        <div>
                          <div className="text-sm text-tedxred font-medium mb-1">{event.season}</div>
                          <h3 className="text-xl md:text-2xl font-bold">TEDxVCE {event.year}</h3>
                          <p className="text-white/90">{event.theme}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="mb-4">
                    <div className="text-sm text-tedxred font-medium mb-1">{event.season}</div>
                    <h2 className="text-3xl font-bold">
                      <span className="text-tedxred">{event.year}:</span> {event.theme}
                    </h2>
                  </div>
                  <p className="text-white/80 mb-6">
                    {event.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-xl mb-3">Featured Speakers</h4>
                    <ul className="space-y-1 text-white/70">
                      {event.speakers.map((speaker, i) => (
                        <li key={i} className="flex items-center">
                          <span className="mr-2 text-tedxred">•</span> {speaker}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={event.videos} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-tedxred hover:bg-tedxred/90 text-white px-4 py-2 rounded-md transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                      Watch Talks
                    </a>
                    <Button variant="outline" className="border-white text-white hover:bg-white/10">
                      View Photos
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Looking Forward</h2>
            <p className="text-white/80 max-w-3xl mx-auto mb-8">
              TEDxVCE continues to bring inspiring speakers and ideas to our community. 
              Join us for our upcoming event and be part of the TEDx experience.
            </p>
            <Button 
              className="bg-tedxred hover:bg-tedxred/90 text-white"
              onClick={() => {
                window.location.href = '/about#theme';
              }}
            >
              Learn About Our Next Event
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PastSeasons;
