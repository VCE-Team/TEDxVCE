
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Speakers = () => {
  // Sample speakers data - in a real app, this would come from an API or database
  // const speakers = [
  //   {
  //     id: 1,
  //     name: "Dr. Priya Shah",
  //     title: "Neuroscientist & Innovation Expert",
  //     topic: "The Neuroscience of Creativity",
  //     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  //     bio: "Dr. Priya Shah is a leading neuroscientist researching the intersection of brain science and innovation."
  //   },
  //   {
  //     id: 2,
  //     name: "Arjun Mehta",
  //     title: "Climate Tech Entrepreneur",
  //     topic: "Sustainable Solutions for the Future",
  //     image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  //     bio: "Arjun Mehta has founded three successful climate tech startups and is dedicated to creating sustainable solutions."
  //   },
  //   {
  //     id: 3,
  //     name: "Leila Johnson",
  //     title: "Digital Rights Advocate",
  //     topic: "Protecting Privacy in the Digital Age",
  //     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  //     bio: "Leila Johnson has been at the forefront of digital rights advocacy for over a decade."
  //   },
  //   {
  //     id: 4,
  //     name: "Dr. Raj Patel",
  //     title: "Quantum Computing Researcher",
  //     topic: "Quantum Computing: The Next Frontier",
  //     image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  //     bio: "Dr. Raj Patel leads groundbreaking research in quantum computing applications."
  //   }
  // ];

  return (
    <div className="bg-tedxdark min-h-screen text-white">
      <Navbar />
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-tedxred">Speakers</span>
            </h1>
            <p className="text-xl text-white/80">
              Meet the innovative thinkers, creators, and doers who will be sharing their ideas
              worth spreading at TEDxVCE 2025.
            </p>
          </div>

          {/* Coming Soon Section */}
          <div className="text-center py-20">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-12 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tedxred">Coming Soon</h2>
              <p className="text-xl text-white/80 mb-6">
                We're carefully curating an amazing lineup of speakers for TEDxVCE 2025.
              </p>
              <p className="text-white/70 mb-8">
                Stay tuned as we announce our inspiring speakers who will share their ideas worth spreading 
                under the theme of "Synergy Surge".
              </p>
              <Button className="bg-tedxred hover:bg-tedxred/90 text-white px-8 py-6">
                Get Notified
              </Button>
            </div>
          </div>

          {/* Commented out speakers grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker) => (
              <div 
                key={speaker.id}
                className="group bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-tedxred/50 transition-all duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                  <p className="text-tedxred mb-2">{speaker.title}</p>
                  <p className="text-white/70 text-sm mb-4">{speaker.bio}</p>
                  <p className="font-medium">Talk: <span className="text-white/80">{speaker.topic}</span></p>
                </div>
              </div>
            ))}
          </div>
          */}

          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Want to speak at TEDxVCE?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              We're always looking for speakers with ideas worth spreading. If you have a unique perspective, 
              innovative solution, or compelling story, we'd love to hear from you.
            </p>
            <Button 
              className="bg-tedxred hover:bg-tedxred/90 text-white px-8 py-6"
              onClick={() => window.open('https://forms.gle/jQ6e5ukRA99hdQy47', '_blank')}
            >
              Apply to Speak
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Speakers;
