import React from 'react';
import { BarChart3, Calendar, ArrowLeftRight, BookOpen, Cloud, Triangle } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Progress Tracking and Certification",
      bgColor: "bg-orange-500",
    },
    {
      icon: <Calendar className="w-8 h-8 text-white" />,
      title: "Accessibility and Convienence",
      bgColor: "bg-blue-400",
    },
    {
      icon: <ArrowLeftRight className="w-8 h-8 text-white" />,
      title: "Diverse Course Selection",
      bgColor: "bg-orange-400",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "Interactive Learning Experience",
      bgColor: "bg-emerald-500",
    },
  ];

  return (
    <section className="py-16 bg-zinc-800 ">
      <div className="container mx-auto px-4 mt-8">
        {/* Decorative Elements */}
        <div className="relative">
          <Triangle className="absolute -top-8 left-4 w-24 h-24 text-emerald-400 transform -rotate-12" />
          <Cloud className="absolute -top-8 right-4 w-24 h-24 text-blue-500" />
        </div>

        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-6 py-2 rounded-full bg-emerald-900/50 text-white font-medium">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Dive into online courses on <br/> diverse subjects
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 p-6 rounded-2xl bg-zinc-900 hover:bg-zinc-900/50 transition-colors"
            >
              <div className={`${feature.bgColor} p-4 rounded-2xl`}>
                {feature.icon}
              </div>
              <h3 className="text-xl text-white font-semibold group-hover:text-white/90 transition-colors">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}