import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Index from "./Components/Index/Index";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";


import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import ServicesDetails from "./Pages/Services/ServicesDetails";
import Testimonials from "./Pages/Testimonials/Testimonials";
import TourGuide from "./Pages/TourGuide/TourGuide";
import TourGuideDetails from "./Pages/TourGuide/TourGuideDetails";
import Faqs from "./Pages/Faqs/Faqs";
import PricingPlan from "./Pages/PricingPlan/PricingPlan";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<ServicesDetails />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/tourguide" element={<TourGuide />} />
          <Route path="/tourguide/:id" element={<TourGuideDetails />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/pricing" element={<PricingPlan />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
