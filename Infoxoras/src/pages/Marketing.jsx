import React, { useEffect } from 'react';
import { Instagram, Linkedin, Facebook, Twitter, Globe, Laptop, Blocks, Cpu, ArrowRight } from 'lucide-react';
import MarketingHero from '../components/marketingHero';
import MarketingScroller from '../components/marketingScroller';
import Testimonials from '../components/Testimonials';

const Marketing = () => {
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
    <div className="relative min-h-screen bg-zinc-900 overflow-hidden mt-12">
      {/* Purple blur effect */}
      <MarketingHero/>
      <MarketingScroller/>
      <div className="h-screen bg-[#202020] text-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between py-12 lg:py-20 gap-8">
            {/* Image with Glow Effect */}
            <div className="lg:w-1/2 relative flex justify-center items-center p-8 rounded-lg">
              <div className="relative flex justify-center items-center">
                <div className="absolute w-[506px] h-[604px] rounded-t-[250px] bg-gradient-to-br from-[#3771C8] to-[#349971] blur-[109.6px]"></div>
                <img
                  src="src/images/marketing.png"
                  alt="Business Professional with Laptop"
                  width={500}
                  height={500}
                  className="relative max-w-full h-auto"
                />
              </div>
            </div>

            {/* Content (Now parallel to image top) */}
            <div className="lg:w-1/2 space-y-6  bg-[#202020] p-8 rounded-lg lg:pt-13">
              <h1 className="font-inter text-[28px] font-bold text-white max-w-[500px] text-left">
                Realizing business goal to get More Profit
              </h1>
              <p className="font-inter text-[16px] text-gray-300 leading-relaxed">
                Achieving higher profitability is at the heart of every successful business. By leveraging innovative
                strategies, optimizing operations, and delivering exceptional value to customers, we drive sustainable
                growth and maximize returns.
              </p>

              {/* Explore Services Button */}
              <button className="group bg-black text-white font-semibold text-lg font-poppins mr-2.5 px-6 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#57FFBC] hover:text-black hover:shadow-md hover:px-7">
                <span className="flex items-center justify-center relative">
                  <span className="transition-all duration-300 ease-in-out group-hover:mr-6">Explore Services</span>
                  <ArrowRight
                    className="absolute right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                    size={20}
                  />
                </span>
              </button>
            </div>
          </div>
          </div>
          </div>
          <div className="mt-8 relative flex overflow-visible bg-zinc-900 py-4 text-3xl w-full">
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
          <Testimonials/>

    </div>
  );
};

export default Marketing;