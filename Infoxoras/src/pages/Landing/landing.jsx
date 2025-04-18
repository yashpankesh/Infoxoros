import React, { useEffect } from "react";
// import Button1 from "../../components/Button1/button1";
import Herogrid from "../../components/herogrid/herogrid";
// import Whychooseus from "../../components/whychooseus";
import Contactus from "../../components/Contactus";
import './landing.css'
import { ArrowUpRight } from "lucide-react";
import IndustrySection from "../../components/industry-section";
import ScrollingBanner from "../../components/scrolling-banner";
import Ourteam from "../../components/Ourteam";
import Testimonials from "../../components/Testimonials";
import WhyChooseUs from "../../components/whychooseus";
import Hiring from "../../components/Hiring";
import { Link } from "react-router-dom";


const LandingPage = () => {
  useEffect(() => {
    const cursor1 = document.querySelector(".ellipse49");
    const cursor2 = document.querySelector(".ellipse50");
    const cursor3 = document.querySelector(".ellipse52");

    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;

      setTimeout(() => {
        cursor1.style.left = `${x}px`;
        cursor1.style.top = `${y}px`;
        // cursor1.style.transitionDuration = "0.1s";
      }, );

      setTimeout(() => {
        cursor2.style.left = `${x}px`;
        cursor2.style.top = `${y}px`;
        cursor2.style.transitionDuration = "1s";
      }, 200);

      setTimeout(() => {
        cursor3.style.left = `${x}px`;
        cursor3.style.top = `${y}px`;
        cursor3.style.transitionDuration = "1.3s";
      }, 300);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="background ">
        <div className="linear"></div>
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/95 via-black/60 to-black/0"></div> */}
        <div className=" ellipse49 w-[44.125rem] h-[44.125rem] bg-blue-500/40 blur-[130.7px] rounded-full absolute pointer-events-none transform translate-x-[-50%] translate-y-[-50%]"></div>
        <div className=" ellipse50 w-[44.125rem] h-[44.125rem] bg-purple-500/40 blur-[130.7px] rounded-full absolute bottom-50 left-50"></div>
        <div className=" ellipse52 w-[22rem] h-[22rem] bg-blue-400/40 blur-[113.75px] rounded-full absolute top-[500px] right-[500px]"></div>
      </div>
<div className="">
      <center>

      <div className="flex justify-center items-center md:w-[80%] m-4 pt-24">
        <div className="flex items-center justify-center md:px-[50px] md:py-[10px] px-[20px] py-[5px]  border border-white/50 rounded-[64px] text-lg text-white backdrop-blur-md bg-[#1e1e1e97]">
          <p>Unlock your Software Development Service</p>
        </div>
      </div>
      </center>

      <h2 className="mt-[10px] text-center w-9/10 mx-auto text-white font-sans text-3xl font-bold leading-normal text-shadow-md">
        Helping businesses optimize processes, enhance security with expert IT
        consulting services.
      </h2>

      {/* <center>
        <Button1 title="Schedule a Consultation" className="pb-20" />
      </center> */}
      <div className="flex w-full justify-center mt-4">

      <button className="group flex gap-3 bg-green-300 text-black px-6 py-3 rounded-full hover:bg-green-200 transition-colors mb-8">
      <Link to="/get-in-touch">
      Schedule a Consultation
      </Link>
                  <ArrowUpRight className="w-6 h-6 transition-transform group-hover:rotate-45" />
                </button>
      </div>
</div>

      <div >
        <Herogrid/>
        <ScrollingBanner/>
        <IndustrySection/>
        <Ourteam/>
        <Hiring/>
        <Testimonials />
        <WhyChooseUs />
        <Contactus />
      </div>
    </>
  );
};

export default LandingPage;
