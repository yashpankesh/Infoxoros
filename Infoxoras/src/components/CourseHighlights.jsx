import React from 'react';
import { TrendingUp, IndianRupee, Handshake } from 'lucide-react';

export function CourseHighlights() {


  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-emerald-400 mb-16">
          Course Highlights
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Course Description */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Python Certification Course With Job Placement
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
              Python Programming Language has become one of the most popular languages and is used in Web programming, Data Science, IoT, and Artificial Intelligence. The Python Certification Course at TOPS Technologies starts from the basics and moves to more advanced concepts gradually.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Python is an object-oriented, popular programming language released in 1991. This general-purpose language is highly used for web and application development. It is mainly popular for readability, structure, testing frameworks, and interoperability. The balancing of high & low-level programming makes it easy for beginners to learn from the basics.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-4 h-full">
  {/* First Stat */}
  <div
    className="bg-slate-800/50 w-32 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1 animate-float"
    style={{ animation: "float 3s ease-in-out infinite" }}
  >
    <div className="p-4 rounded-full bg-slate-700/50">
      <TrendingUp className="w-8 h-8 text-emerald-400" />
    </div>
    <div>
      <div className="text-2xl font-bold text-white mb-1">40%</div>
      <div className="text-gray-400">Average Salary Hike</div>
    </div>
  </div>

  {/* Second Stat */}
  <div
    className="bg-slate-800/50 w-32 rounded-2xl p-6  flex flex-col items-center text-center gap-4 hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1 animate-float"
    style={{ animation: "float 3.5s ease-in-out infinite" }}
  >
    <div className="p-4 rounded-full bg-slate-700/50">
      <IndianRupee className="w-8 h-8 text-emerald-400" />
    </div>
    <div>
      <div className="text-2xl font-bold text-white mb-1">4.5 Lacs</div>
      <div className="text-gray-400">Highest Salary</div>
    </div>
  </div>

  {/* Third Stat */}
  <div
    className="bg-slate-800/50 w-32 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1 animate-float"
    style={{ animation: "float 4s ease-in-out infinite" }}
  >
    <div className="p-4 rounded-full bg-slate-700/50">
      <Handshake className="w-8 h-8 text-blue-400" />
    </div>
    <div>
      <div className="text-2xl font-bold text-white mb-1">3000+</div>
      <div className="text-gray-400">Hiring Partners</div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}