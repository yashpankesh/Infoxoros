import React, { useEffect, useState } from 'react';
import { ArrowRight, Building2, LineChart, Laptop, Globe2, Rocket, Gem, Code, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

function Hiring() {

  const clientLogos = [
    {
      name: "Gartak Solutions",
      path: 'src/images/companies/ghartak.png',
      description: "Enterprise Solutions"
    },
    {
      name: "Researchlyne",
      path: 'src/images/companies/research.png',
      description: "Data Analytics"
    },
    {
      name: "Sachdeva Tech",
      path: 'src/images/companies/sachdeva.png',
      description: "Software Development"
    },
    {
      name: "Avan Inc",
      path: 'src/images/companies/av.png',
      description: "Cloud Services"
    },
    {
      name: "Orro Systems",
      path: 'src/images/companies/orro.png',
      description: "Global Technology"
    },
    {
      name: "Vrinda Tech",
      path: 'src/images/companies/vrinda.png',
      description: "Innovation Hub"
    },
    {
      name: "Finlens",
      path: 'src/images/companies/finlens.png',
      description: "Financial Technology"
    }
  ];

  const scrollContent = [...clientLogos, ...clientLogos,...clientLogos, ...clientLogos,...clientLogos, ...clientLogos];
  // const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === clientLogos.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-800 text-white ">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8  items-center">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              We're hiring
            </h1>
            <p className="text-base sm:text-md md:text-lg text-gray-300">
              We are always looking for great people! Let's work Together
            </p>
            
            <Link to="/careers" className="w-full md:w-auto group inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300">
              Explore open roles
              <ArrowRight className="ml-2 h-5 w-5  transition-transform group-hover:rotate-45" />
            </Link>
            
          </div>
          
          {/* Team Section - Visible on both mobile and desktop */}
          <div className="relative text-center md:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              30+ Infoxoras Family is waiting for you
            </h2>
            <div className="flex justify-center md:justify-start -space-x-4">
              {[
                'src/images/Nachiketpatel.png',
                'src/images/Rajkanzariya.png',
                'src/images/Aeshadevani.jpeg'
                // 'src/images/VasuLadani.jpg'
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Team member ${index + 1}`}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white shadow-lg transform hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Attorney Section */}
      <section className="bg-zinc-900 py-12 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our Attorney
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-4">
            "Expert legal guidance you can trust. Our attorney is dedicated to providing
            personalized solutions to protect your rights and achieve the best outcomes.
            Compassionate, skilled, and committed to your success."
          </p>
        </div>
      </section>

      {/* Clients Section with Animation */}
      <section className="bg-zinc-900 py-12 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our Clients
          </h2>
          


    <div className="relative flex overflow-visible bg-zinc-900 py-4 text-3xl w-full">
      <div className="animate-scroll flex items-center whitespace-nowrap">
        {scrollContent.map((clientLogos, index) => (
          <div key={index} className="flex items-center">
            <div className="xyz ml-16">
            <center>

            <img src={clientLogos.path} className='h-8 mb-4'/>
            <span className="text-gray-300 mt-6 text-2xl">{clientLogos.name}</span>
            </center>
            </div>
            {/* <ArrowRight className="mx-4 h-4 w-4 text-gray-300 w-12 h-12" /> */}
          </div>
        ))}
      </div>
    </div>
        </div>
      </section>
    </div>
  );
}

export default Hiring;