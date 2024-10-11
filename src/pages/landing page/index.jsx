import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Why from "./components/Why";
import How from "./components/How";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Why />
      <How />
      <Testimonials />
      <Footer />
    </>
  );
};

export default LandingPage;
