import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/header";
import Footer from "./Footer";
import { ArrowUp } from "lucide-react";

const AppLayout = () => {
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <div className="">
    <div className="grid-background"></div>
    <Header/>
    <Outlet/>
    <Footer/>
    
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition duration-300"
        aria-label="Scroll to Top"
      >
        <ArrowUp size={24} />
      </button>
    
  </div>;
};

export default AppLayout;
