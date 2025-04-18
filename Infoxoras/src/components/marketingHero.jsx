import React from 'react';
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

const MarketingHero = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Purple blur effect */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Streamline Your <span className="text-emerald-400">Campaigns</span>,
              <br className="hidden sm:block" />
              Maximize Your Reach
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Simplify marketing and IT solutions with powerful tools that drive
              growth and audience impact.
            </p>
            <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
              Schedule a Call
            </button>
          </div>

          {/* Right content with image and floating icons */}
          <div className="w-full lg:w-1/2 relative flex justify-center ">
            {/* Main image container with relative size */}
            <div className="relative  rounded-xl w-[280px] sm:w-[340px]  md:w-[400px] h-[350px] sm:h-[420px] md:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&fm=png&fit=crop&crop=faces&auto=format"
                alt="Professional"
                className="w-full h-full object-contain rounded-lg shadow-lg"
              />
              
              {/* Floating social icons with improved responsive positioning */}
              <div className="absolute -top-4 sm:-top-8 floating -right-4 sm:-right-8 p-2 sm:p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg shadow-lg animate-float-delay-1">
                <Instagram size={20} className="text-white  sm:w-6 sm:h-6" />
              </div>
              
              <div className="absolute -left-8 sm:-left-12 floating top-1/4 p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg animate-float-delay-2">
                <Linkedin size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
              
              <div className="absolute -right-8 sm:-right-12 floating top-1/4 p-2 sm:p-3 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg shadow-lg animate-float-delay-3">
                <Facebook size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
              
              <div className="absolute -left-8 sm:-left-12 floating bottom-1/4 p-2 sm:p-3 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-lg animate-float-delay-4">
                <Twitter size={20} className="text-white sm:w-6 sm:h-6" />
              </div>

              {/* Customer counter at bottom */}
              {/* <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-gray-800/50 backdrop-blur-sm p-2 sm:p-4 rounded-xl">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex -space-x-2 sm:-space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <img
                          key={i}
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
                          alt="Customer"
                          className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-gray-800"
                        />
                      ))}
                    </div>
                    <span className="text-xl sm:text-2xl font-bold text-white">30+</span>
                  </div>
                </div>
              </div> */}

              {/* Customer avatars at top */}
              {/* <div className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-gray-800/50 backdrop-blur-sm p-2 sm:p-3 rounded-xl">
                  <div className="flex -space-x-2 sm:-space-x-3">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
                        alt="Customer"
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-gray-800"
                      />
                    ))}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingHero;
