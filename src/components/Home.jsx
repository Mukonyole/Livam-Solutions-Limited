import React, { useEffect } from "react";
import Stats from "./Stats";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "./Testimonials";
import HeroSection from "./HeroSection";
import HomeServices from "./HomeServices";
import AskedQuestions from "./AskedQuestions";
import Chatbot from "./Chatbot";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <HeroSection />
      <HomeServices />
      <Stats />

      <Testimonials />
      <AskedQuestions />
      <Chatbot />
    </div>
  );
};

export default Home;