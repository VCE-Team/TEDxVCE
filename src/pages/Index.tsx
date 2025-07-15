
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import EventDetails from "@/components/EventDetails";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialSection from "@/components/TestimonialSection";
import CountdownSection from "@/components/CountdownSection";
import JoinCommunity from "@/components/JoinCommunity";

const Index = () => {
  return (
    <div className="bg-tedxdark min-h-screen text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <CountdownSection />
      <EventDetails />
      <TestimonialSection />
      <JoinCommunity />
      <Footer />
    </div>
  );
};

export default Index;
