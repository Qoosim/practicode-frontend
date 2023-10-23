import WhyUs from './components/Why-us/Why-us';
import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import HomeNavbar from "./components/HomeHeader/HomeHeader";
import PagesNavbar from "./components/PagesHeader/PagesHeader";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Courses from "./pages/Courses/Courses";
import Enrollment from "./pages/Enrollment/Enrollment";
import FAQs from "./pages/FAQs/FAQs";
import HomePage from "./pages/HomePage/HomePage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

export default function App() {
  const location = useLocation();
  return (
    <div>
      {
        location.pathname === '/' ? <HomeNavbar /> : <PagesNavbar />
      }
      <WhyUs />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
