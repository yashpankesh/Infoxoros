import React from 'react';
import { HandshakeIcon, GraduationCap, Brain, Image, Building2, Search } from 'lucide-react';

export function OurFacts() {
  const highlights = [
    {
      icon: <HandshakeIcon className="w-12 h-12 text-white" />,
      title: "Personalized Attention",
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-white" />,
      title: "High Qualified Professional",
    },
    {
      icon: <Brain className="w-12 h-12 text-white" />,
      title: "Interactive Learning",
    },
    {
      icon: <Image className="w-12 h-12 text-white" />,
      title: "Live Projects",
    },
    {
      icon: <Building2 className="w-12 h-12 text-white" />,
      title: "Career Support",
    },
    {
      icon: <Search className="w-12 h-12 text-white" />,
      title: "Job Oriented Training",
    },
  ];

  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our Facts and Figures
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Infoxoras is a leading provider of innovative technology solutions and professional training services. With a proven track record of delivering excellence, a vast network of industry partners, and a commitment to empowering professionals.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="bg-zinc-800/50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white text-center mb-16">
            Key Highlights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 group"
              >
                <div className="p-4 rounded-full bg-slate-700/50 group-hover:bg-slate-700 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-white">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}