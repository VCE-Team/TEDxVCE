
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventDetails = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-tedxdark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Join Us at <span className="text-tedxred">TEDxVCE 2025</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Mark your calendar for our upcoming event featuring thought-provoking talks and inspiring performances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-black/50 backdrop-blur-sm border border-white/10 p-8 rounded-xl flex flex-col items-center text-center hover:border-tedxred/50 transition-colors">
            <Calendar className="w-12 h-12 text-tedxred mb-4" />
            <h3 className="text-2xl font-bold mb-2">Date</h3>
            <p className="text-white/80">September 20, 2025</p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-white/10 p-8 rounded-xl flex flex-col items-center text-center hover:border-tedxred/50 transition-colors">
            <MapPin className="w-12 h-12 text-tedxred mb-4" />
            <h3 className="text-2xl font-bold mb-2">Venue</h3>
            <p className="text-white/80">Vardhaman College of Engineering</p>
            <p className="text-white/80 text-sm">7835+R26, Narkhuda, Nagarguda - Shamshabad Rd</p>
            <p className="text-white/80 text-sm">Kacharam, Telangana 501218</p>
            <a 
              href="https://maps.google.com/maps?q=Vardhaman+College+of+Engineering,+7835%2BR26,+Narkhuda,+Nagarguda+-+Shamshabad+Rd,+Kacharam,+Telangana+501218"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-tedxred hover:text-tedxred/80 text-sm mt-2"
            >
              Get Directions
            </a>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-white/10 p-8 rounded-xl flex flex-col items-center text-center hover:border-tedxred/50 transition-colors">
            <Clock className="w-12 h-12 text-tedxred mb-4" />
            <h3 className="text-2xl font-bold mb-2">Time</h3>
            <p className="text-white/80">9:00 AM - 5:00 PM</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            className="bg-gray-500 text-white text-lg px-8 py-6 cursor-not-allowed opacity-75"
            disabled
          >
            Registrations Closed
          </Button>
          <p className="text-white/70 text-sm mt-3">
            Thank you for the support and lot of registrations!
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
