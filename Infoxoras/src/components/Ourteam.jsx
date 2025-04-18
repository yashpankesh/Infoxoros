import React from "react";
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const SocialButton = ({ children, link }) => (
  <button
    onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
    className="p-2 text-gray-400 hover:text-white hover:scale-125 transition-all duration-300 ease-in-out"
  >
    {children}
  </button>
);

function Ourteam() {
  return (
    <div className="min-h-screen bg-zinc-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            "Meet the passionate individuals behind Infoxoras. Our team is dedicated to bringing
            innovation, creativity, to every project we undertake. Together, we turn ideas into reality!"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Team Member Card 1 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#57FFBC]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative flex flex-col items-center p-8 space-y-6 bg-zinc-800/50 backdrop-blur-sm rounded-2xl border border-zinc-700/50 group-hover:border-white/10 transition-all duration-500">
              <div className="w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-2xl ring-2 ring-white/5 group-hover:ring-[#57FFBC]/20 transition-all duration-500">
                <img
                  src="src\images\Nachiketpatel.png"
                  alt="Nachiket Patel"
                  className="w-full h-full object-cover object-left-top transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-[#eeeeee] group-hover:text-white transition-colors duration-300">
                  Nachiket Patel
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Director & CEO of Infoxoras Company Pvt Ltd
                  </p>
                  </div>
                  <div className="flex items-center space-x-4 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                
                <SocialButton link="https://www.instagram.com/patelnachiketofficial/">
                  <Instagram size={20}  />
                </SocialButton>
                <SocialButton link="https://www.linkedin.com/in/nachiketpatel">
                  <Linkedin size={20} />
                </SocialButton>
                </div>
            </div>
          </div>
              {/* <div className="h-8 w-px bg-gray-600 mx-2"></div> */}
              
              <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#57FFBC]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative flex flex-col items-center p-8 space-y-6 bg-zinc-800/50 backdrop-blur-sm rounded-2xl border border-zinc-700/50 group-hover:border-white/10 transition-all duration-500">
              <div className="w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-2xl ring-2 ring-white/5 group-hover:ring-[#57FFBC]/20 transition-all duration-500">
                <img
                  src="src\images\Rajkanzariya.png"
                  alt="Raj Kanzariya"
                  className="w-full h-full object-cover object-left-top transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-[#eeeeee] group-hover:text-white transition-colors duration-300">
                  Raj Kanzariya
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Founder of Infoxoras Company Pvt Ltd
                  </p>
            </div>
            <div className="flex items-center space-x-4 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                
                <SocialButton link="https://www.instagram.com/rajkanza/">
                  <Instagram size={20} />
                </SocialButton>
                <SocialButton link="https://www.linkedin.com/in/rajkanza/">
                  <Linkedin size={20} />
                </SocialButton>
              </div>
              
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#57FFBC]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative flex flex-col items-center p-8 space-y-6 bg-zinc-800/50 backdrop-blur-sm rounded-2xl border border-zinc-700/50 group-hover:border-white/10 transition-all duration-500">
              <div className="w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-2xl ring-2 ring-white/5 group-hover:ring-[#57FFBC]/20 transition-all duration-500">
                <img
                  src="src\images\Aeshadevani.jpeg"
                  alt="Aesha Devani"
                  className="w-full h-full object-cover  transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-[#eeeeee] group-hover:text-white transition-colors duration-300">
                  Aesha Devani
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Co-Founder of Infoxoras Company Pvt Ltd</p>
            </div>
            <div className="flex items-center space-x-4 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                
                <SocialButton link="https://www.instagram.com/aeshadevani">
                  <Instagram size={20} />
                </SocialButton>
                <SocialButton link="https://www.linkedin.com/in/aesha-devani-6619b9212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <Linkedin size={20} />
                </SocialButton>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourteam;