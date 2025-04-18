import path from "path";
import React, { useState } from "react";
import { FaPlay, FaLightbulb, FaSyncAlt, FaBrain, FaRocket } from "react-icons/fa";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Link } from "react-router-dom";
  

const Aboutus = () => {
  const teamMembers = [
    {
      name: "Nachiket Patel",
      role: "CEO",
      path: "src/images/Nachiketpatel.png",
    },
    {
      name: "Raj Knazariya",
      role: "Founder",
      path: "src/images/Rajkanzariya.png",
    },
    {
      name: "Vasu Ladani",
      role: "Business Strategy",
      path: "src/images/VasuLadani.jpg",
    },
  ];

  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const handleNextTeamMember = (index) => {
    setActiveTeamMember(index);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-800 to-zinc-900">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <span>Home</span>
            <span>/</span>
            <span>About us</span>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-8">Our Story</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="h-2 w-16 bg-emerald-500 mb-6"></div>
            <h3 className="text-3xl font-bold mb-6">
              Your Vision our expertise Your Success get noticed Generate Lead Dominate
            </h3>
            <div className=" gap-4 mt-8">
              {/* <img
                src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team meeting"
                className="rounded-lg w-full h-48 object-cover"
              /> */}
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
                alt="Office collaboration"
                className="rounded-lg w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="rounded-lg w-full h-64 object-cover mb-8"
            />
            <p className="text-gray-300 mb-8">
            INFOXORAS is a dynamic Marketing, Designing, Software Development, Information Technology Services, and Consultancy firm, specializing in providing competitively priced outsourcing solutions to businesses worldwide. With a robust local presence in India, we have rapidly established ourselves as a well-respected organization, driven by highly skilled professionals with extensive expertise across various areas of Information Technology. Our vision is to become a global leader in technology solutions, delivering measurable business value through the strategic use of technology and resources. We take pride in our ability to understand client needs, offering tailored, scalable solutions that enhance operational efficiency and drive success.
            </p>
            {/* <button className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors">
              <FaPlay size={20} />
              Watch Tutorial
            </button> */}
          </div>
        </div>
      </div>

      {/* Strategies Section */}
      <div className="bg-zinc-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="text-emerald-500">Infoxoras</span> Strategies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: <FaLightbulb className="h-12 w-12"/>, title: "Making Idea", desc: "Define clear, measurable objectives." },
              { icon: <FaSyncAlt className="h-12 w-12"/>, title: "Working Plan", desc: "Establish a clear timeline for each task." },
              { icon: <FaBrain className="h-12 w-12"/>, title: "Research", desc: "Clearly outline the research question or objective." },
              { icon: <FaRocket className="h-12 w-12"/>, title: "Launch project", desc: "Roll out the project as planned." },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-300 text-zinc-900 rounded-full p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-emerald-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            Craft visionary ideas
            <span className="block text-emerald-500 mb-6">That Inspired</span>
          </h2>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 bg-emerald-500 rounded-full hover:bg-emerald-600 transition-colors">
              View all team
            </button>
            <Link to="/get-in-touch">
            <button className="px-6 py-2 border border-emerald-500 rounded-full hover:bg-emerald-500/10 transition-colors">
              Join our team
            </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 w-full  items-center justify-center ">
          <div className="space-y-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`flex justify-between items-center border-b border-zinc-700 py-4 ${
                  activeTeamMember === index ? "bg-zinc-800/50 rounded-lg px-4" : "px-4"
                }`}
              >
                <div>
                  <span className="text-zinc-400 mr-4">{index + 1}</span>
                  <span className="font-semibold">{member.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-zinc-400">{member.role}</span>
                  <button
                    onClick={() => handleNextTeamMember(index)}
                    className={`w-8 h-8 flex items-center justify-center border border-zinc-600 rounded-full hover:bg-emerald-500 hover:border-emerald-500 transition-colors ${
                      activeTeamMember === index ? "bg-emerald-500 border-emerald-500" : ""
                    }`}
                  >
                    →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="relative w-full flex items-center justify-center">
            <img
              src={teamMembers[activeTeamMember].path}
              alt={teamMembers[activeTeamMember].name}
              className="w-[400px] h-[400px] rounded-tr-[50px] rounded-bl-[50px] object-cover object-left-top transition-all duration-300"
            />
            <div className="absolute bottom-0 left-20 pl-10 right-0 bg-gradient-to-t from-zinc-900 to-transparent p-6">
              <h3 className="text-2xl font-bold">{teamMembers[activeTeamMember].name}</h3>
              <p className="text-emerald-500">{teamMembers[activeTeamMember].role}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full  justify-center">

      <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>What services does INFOXORAS provide?</AccordionTrigger>
    <AccordionContent>
      INFOXORAS provides Marketing, Design, Software Development, IT Services, and Consultancy solutions, tailored to enhance efficiency and drive business success globally.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>How does INFOXORAS ensure cost-effective solutions?</AccordionTrigger>
    <AccordionContent>
      INFOXORAS ensures cost-effective solutions by leveraging skilled professionals, scalable resources, and innovative technologies to deliver tailored services that maximize value while minimizing costs.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Which industries does INFOXORAS serve?</AccordionTrigger>
    <AccordionContent>
      INFOXORAS serves a wide range of industries, including Healthcare, E-commerce, Education, Finance, Manufacturing, Retail, and more, offering tailored solutions to meet specific business needs.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-4">
    <AccordionTrigger>Why choose INFOXORAS for outsourcing?</AccordionTrigger>
    <AccordionContent>
      Choose INFOXORAS for outsourcing to benefit from our expertise, tailored solutions, cost-effectiveness, and commitment to delivering measurable results, ensuring your business achieves its goals efficiently.
    </AccordionContent>
  </AccordionItem>
</Accordion>
        </div>
      </div>

    </div>
  );
};

export default Aboutus;
