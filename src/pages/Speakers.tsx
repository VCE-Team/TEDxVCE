
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Speakers = () => {
  // Speakers data - in a real app, this would come from an API or database
  const speakers = [
    {
      id: 1,
      name: "Rakesh Kurapati",
      title: "Founder, Fast Tracks Car Care",
      image: "/uploads/rakesh.png",
      bio: "Rakesh Kurapati is the Founder of Fast Tracks Car Care, a venture dedicated to delivering innovative and reliable automotive solutions. With his entrepreneurial vision, he has built a brand that stands for quality, trust, and customer-focused service in the automobile industry."
    },
    {
      id: 2,
      name: "Ashok Kapatkar",
      title: "Health Educator",
      image: "/uploads/ashok.png",
      bio: "A globally certified health professional, Ashok Kapatkar brings expertise in nutrition, fitness, and wellness with a strong track record of empowering individuals and organizations toward healthier lifestyles. With a passion for driving growth and impact, he continues to inspire others to embrace holistic well-being."
    }
  ];

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

          {/* Speakers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {speakers.map((speaker) => (
              <div 
                key={speaker.id}
                className="group bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-tedxred/50 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                  <p className="text-tedxred mb-2">{speaker.title}</p>
                  <p className="text-white/70 text-sm">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* More Speakers Coming Soon */}
          <div className="text-center py-12">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-tedxred">More Speakers Coming Soon</h2>
              <p className="text-white/80 mb-6">
                We're carefully curating an amazing lineup of speakers for TEDxVCE 2025.
              </p>
              <p className="text-white/70">
                Stay tuned as we announce more inspiring speakers who will share their ideas worth spreading 
                under the theme of "Synergy Surge".
              </p>
            </div>
          </div>

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
