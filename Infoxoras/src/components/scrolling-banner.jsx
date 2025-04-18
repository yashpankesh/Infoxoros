"use client";

import { ArrowRight } from "lucide-react";

const ScrollingBanner = () => {
  const services = [
    "Branding",
    "Digital Marketing",
    "Web Design",
    "Web Development",
    "UI/UX Design",
    "Software Solution",
  ];

  // Duplicate the items to create a seamless loop
  const scrollContent = [...services, ...services,...services, ...services,...services, ...services];

  return (
    <div className="relative flex overflow-hidden bg-zinc-900 py-4 text-xl">
      <div className="animate-scroll flex items-center whitespace-nowrap">
        {scrollContent.map((service, index) => (
          <div key={index} className="flex items-center">
            <span className="text-gray-300">{service}</span>
            <ArrowRight className="mx-4 h-4 w-4 text-gray-300 w-12 h-12" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
