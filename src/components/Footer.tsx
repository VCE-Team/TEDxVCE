
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              src="/uploads/d0b3c019-2de4-4637-88e6-07b01eff5881.png" 
              alt="TEDxVCE Logo" 
              className="h-12 mb-4"
            />
            <p className="text-white/70 mb-4">
              This independent TEDx event is operated under license from TED.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-tedxred transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-tedxred transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-tedxred transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-tedxred transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-tedxred transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-tedxred transition-colors">About</Link>
              </li>
              <li>
                <Link to="/speakers" className="text-white/70 hover:text-tedxred transition-colors">Speakers</Link>
              </li>
              <li>
                <Link to="/team" className="text-white/70 hover:text-tedxred transition-colors">Team</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/past-seasons" className="text-white/70 hover:text-tedxred transition-colors">Past Seasons</Link>
              </li>
              <li>
                <a href="https://www.ted.com/about/programs-initiatives/tedx-program" 
                   className="text-white/70 hover:text-tedxred transition-colors">
                  About TEDx Program
                </a>
              </li>
              <li>
                <a href="https://www.ted.com" className="text-white/70 hover:text-tedxred transition-colors">
                  TED
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/70">
                Email: tedxvce@vardhaman.org
              </li>
              <li className="text-white/70">
                Phone: +91 9010736004
              </li>
              <li className="text-white/70">
                Vardhaman College of Engineering<br />
                7835+R26, Narkhuda, Nagarguda - Shamshabad Rd, Kacharam<br />
                Telangana 501218, India
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/50">
          <p>© {new Date().getFullYear()} TEDxVCE. This independent TEDx event is operated under license from TED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
