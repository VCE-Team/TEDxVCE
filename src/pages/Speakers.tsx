
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
    },
    {
      id: 3,
      name: "Harika Narayan",
      title: "Playback Singer",
      image: "/uploads/harika.png",
      bio: "Harika Narayan is a renowned playback singer in the Indian film industry, known for her soulful voice and versatile singing style. Born in Razole, Andhra Pradesh, she has made a mark with her melodious contributions to cinema, continuing to inspire audiences with her passion for music."
    },
    {
      id: 4,
      name: "Bhagwat Das Brahmachari",
      title: "World's Youngest TEDx Speaker",
      image: "/uploads/das.png",
      bio: "At just 5 years and 6 months old, Bhagwat Das Brahmachari, fondly known as Bhakt Bhagwat, created history as the world's youngest TEDx speaker. With his inspiring presence and unique perspective, he embodies wisdom beyond his years, leaving audiences moved by his clarity and devotion."
    },
    {
      id: 5,
      name: "Niharika Sood",
      title: "Miss Universe Telangana",
      image: "/uploads/niharika.png",
      bio: "Crowned Miss Universe Telangana 2024, Niharika is a model, content creator, and entrepreneur who transitioned from a career in software engineering to becoming a full-time face of fashion, beauty, and lifestyle. She has collaborated with leading global brands and has been featured in renowned international magazines including iMirage, VIGOUR, TheVanillaFeature, Uniting World Through Fashion, and WKND. Beyond her achievements in modeling, she is passionate about inspiring women through her journey—sharing unfiltered insights on independence, wellness, and breaking barriers in creative industries. With her unique blend of tech expertise and fashion influence, Niharika embodies the voice of a modern, multi-faceted woman who dares to dream big and turn those dreams into reality."
    },
    {
      id: 6,
      name: "Major SPS Oberoi",
      title: "Ex-Army, Academic Director at Ekam IAS Academy",
      image: "/uploads/major.png",
      bio: "Major SPS Oberoi is a retired officer of the Indian Army with over 11 years of distinguished service. Following his tenure in the armed forces, he transitioned to the field of civil services education, where he has been actively mentoring UPSC aspirants. He is presently the Academic Director at Ekam IAS Academy, specializing in Ethics, Internal Security, and International Relations. In this capacity, he also mentors the Civil Services Foundation Batch, guiding students with a blend of academic rigor, practical insights, and the values of discipline and integrity instilled during his military career."
    },
    {
      id: 7,
      name: "Dr. Manjula Anagani",
      title: "Padma Shri Awardee • Pioneer in Minimally Invasive Gynecology",
      image: "/uploads/manjula.png",
      bio: "Dr. Manjula Anagani is an internationally acclaimed gynecologist and laparoscopic surgeon, known for revolutionizing women's healthcare in India. A Padma Shri recipient, she has pioneered several innovative surgical techniques, especially in minimally invasive gynecology, and holds records for performing rare and complex procedures. Beyond clinical excellence, she is a passionate advocate for women's health awareness, author, mentor, and a regular voice at global medical forums."
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
