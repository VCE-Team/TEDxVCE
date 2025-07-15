
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const Gallery = () => {
  // Sample gallery items - in a real app, this would come from an API or database
  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "TEDxVCE 2023 Opening Talk",
      event: "TEDxVCE 2023"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Audience engagement during Q&A session",
      event: "TEDxVCE 2023"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Panel discussion on technology and society",
      event: "TEDxVCE 2022"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Keynote speaker Dr. Anand Patel",
      event: "TEDxVCE 2023"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Interactive workshop during break session",
      event: "TEDxVCE 2022"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1475721027785-f74ec9c409d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "TEDxVCE 2022 stage setup",
      event: "TEDxVCE 2022"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Team photo from TEDxVCE 2023",
      event: "TEDxVCE 2023"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Networking session in lobby area",
      event: "TEDxVCE 2023"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Performance by local artists",
      event: "TEDxVCE 2022"
    }
  ];

  // Filter state
  const [filter, setFilter] = useState("all");
  const uniqueEvents = [...new Set(galleryItems.map(item => item.event))];
  
  // Filtered gallery items
  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.event === filter);

  return (
    <div className="bg-tedxdark min-h-screen text-white">
      <Navbar />
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Event <span className="text-tedxred">Gallery</span>
            </h1>
            <p className="text-xl text-white/80">
              Relive the moments from our past TEDxVCE events.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === "all" 
                  ? "bg-tedxred text-white" 
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              All Events
            </button>
            
            {uniqueEvents.map(event => (
              <button
                key={event}
                onClick={() => setFilter(event)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  filter === event 
                    ? "bg-tedxred text-white" 
                    : "bg-white/10 text-white/80 hover:bg-white/20"
                }`}
              >
                {event}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="group bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-tedxred/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.caption} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="font-medium text-white/90">{item.caption}</p>
                  <p className="text-tedxred text-sm">{item.event}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-white/70 mb-6">
              Want to see more photos from our events?
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-white hover:text-tedxred transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </a>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-white hover:text-tedxred transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
