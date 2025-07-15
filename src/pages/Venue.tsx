
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin } from "lucide-react";

const Venue = () => {
  return (
    <div className="bg-tedxdark min-h-screen text-white">
      <Navbar />
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Event <span className="text-tedxred">Venue</span>
            </h1>
            <p className="text-xl text-white/80">
              Join us at Vardhaman College of Engineering for TEDxVCE 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden h-fit">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.542574398393!2d78.30489377489174!3d17.254409406622912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbe831da8cbad%3A0x4a90e51ab5b5a62c!2sVardhaman%20College%20of%20Engineering!5e1!3m2!1sen!2sin!4v1752595988884!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Vardhaman College of Engineering
              </h2>
              <div className="mb-8">
                <p className="text-white/80 mb-2">
                  7835+R26, Narkhuda, Nagarguda - Shamshabad Rd, Kacharam, Telangana 501218
                </p>
                <a 
                  href="https://maps.google.com/maps?q=Vardhaman+College+of+Engineering,+7835%2BR26,+Narkhuda,+Nagarguda+-+Shamshabad+Rd,+Kacharam,+Telangana+501218" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-tedxred hover:text-tedxred/80"
                >
                  Get Directions
                </a>
              </div>
              
              <div className="space-y-8">
                <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-tedxred">About the Venue</h3>
                  <p className="text-white/80 leading-relaxed">
                    Vardhaman College of Engineering provides a modern, comfortable setting for TEDxVCE. 
                    The main auditorium offers excellent acoustics and visibility, ensuring all attendees 
                    have an immersive experience that matches the high standards of TEDx events worldwide.
                  </p>
                </div>
                
                <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-tedxred">Facilities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-tedxred rounded-full"></div>
                      <span className="text-white/80">500+ seating capacity</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-tedxred rounded-full"></div>
                      <span className="text-white/80">State-of-the-art audio-visual equipment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-tedxred rounded-full"></div>
                      <span className="text-white/80">Wheelchair accessibility</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-tedxred rounded-full"></div>
                      <span className="text-white/80">Ample parking space</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-tedxred rounded-full"></div>
                      <span className="text-white/80">Refreshment area</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-tedxred rounded-full"></div>
                      <span className="text-white/80">Wi-Fi connectivity</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-tedxred">Transportation</h3>
                  <p className="text-white/80 mb-4">
                    The venue is conveniently located and accessible via multiple transportation options:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-tedxred rounded-full"></div>
                      <span className="text-white/80">Close to Hyderabad Outer Ring Road</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-tedxred rounded-full"></div>
                      <span className="text-white/80">Regular bus service from Hyderabad</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-tedxred rounded-full"></div>
                      <span className="text-white/80">Taxi and ride-sharing services available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-tedxred rounded-full"></div>
                      <span className="text-white/80">Nearest airport: Rajiv Gandhi International Airport</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Accommodation Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Luxury</h3>
                <p className="text-white/80 mb-3">Premium hotels within 10-15km of the venue.</p>
                <ul className="text-white/70 space-y-1">
                  <li>Novotel Hyderabad Airport</li>
                  <li>Radisson Hyderabad Airport</li>
                  <li>Lemon Tree Premier, HITEC City</li>
                  <li>Hyatt Place Hyderabad Banjara Hills</li>
                </ul>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Mid-Range</h3>
                <p className="text-white/80 mb-3">Comfortable stays at reasonable prices.</p>
                <ul className="text-white/70 space-y-1">
                  <li>Hotel Sitara Grand</li>
                  <li>Hotel Green Park</li>
                  <li>Hotel Fortune Select Manohar</li>
                  <li>Hotel Katriya</li>
                </ul>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Budget</h3>
                <p className="text-white/80 mb-3">Economical options for cost-conscious attendees.</p>
                <ul className="text-white/70 space-y-1">
                  <li>OYO Rooms near Shamshabad</li>
                  <li>Treebo Hotels</li>
                  <li>FabHotels</li>
                  <li>Local Guest Houses</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-white/60 text-sm">
                * All hotels are located within 10-15km of Vardhaman College of Engineering. 
                We recommend booking in advance, especially during peak season.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Venue;
