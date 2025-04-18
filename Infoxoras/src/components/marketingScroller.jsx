import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Globe, Palette, Smartphone, Coffee } from 'lucide-react';

const MarketingScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Web Development",
      description: "Web development is the process of creating and maintaining websites, involving front-end design, back-end functionality, and user interactivity.",
      iconColor: "text-blue-400 group-hover:text-blue-300"
    },
    {
      icon: <Palette className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "UI/UX Design",
      description: "Learn UI/UX design with our comprehensive course, designed to teach you how to create user-friendly, visually appealing, and functional digital experiences.",
      iconColor: "text-purple-400 group-hover:text-purple-300"
    },
    {
      icon: <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Flutter Development",
      description: "Master Flutter with our course and learn to build high-performance, cross-platform mobile apps. Gain hands-on experience with Dart, Flutter widgets, and UI design.",
      iconColor: "text-green-400 group-hover:text-green-300"
    },
    {
      icon: <Coffee className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Java Development",
      description: "Learn core and advanced Java programming to build robust, scalable applications, covering OOP, frameworks, and hands-on projects for real-world development.",
      iconColor: "text-orange-400 group-hover:text-orange-300"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const visibleServices = () => {
    const result = [];
    const numVisible = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 2 : 1;
    for (let i = 0; i < numVisible; i++) {
      const index = (currentIndex + i) % services.length;
      result.push(services[index]);
    }
    return result;
  };

  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex(0); // Reset index on resize to avoid out-of-bounds errors
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Our Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Discover a comprehensive range of IT and marketing solutions tailored to elevate your
            business. From cutting-edge digital marketing strategies to seamless IT support.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {visibleServices().map((service, index) => (
              <div
                key={index}
                className="bg-zinc-800/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 transition-all duration-300 
                  hover:scale-105 hover:bg-zinc-800/50 group cursor-pointer
                  border border-white/5 hover:border-white/10"
              >
                <div className={`flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 group-hover:-translate-y-2 ${service.iconColor}`}>
                  {service.icon}
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-center mb-2 sm:mb-3 transition-colors group-hover:text-white/90">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-center text-xs sm:text-sm transition-colors group-hover:text-white/70">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevSlide}
              className="p-2 sm:p-3 rounded-full bg-zinc-800/50 hover:bg-zinc-700/70 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="flex justify-center gap-2">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-500' : 'bg-zinc-700'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 sm:p-3 rounded-full bg-zinc-800/50 hover:bg-zinc-700/70 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingScroller;