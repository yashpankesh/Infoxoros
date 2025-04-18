import React from "react";
import { Code, Rocket, Calendar, Award, ArrowUpRight } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4 sm:p-8 relative overflow-hidden">
      {/* Decorative Logo in top right */}
      <div className="hidden lg:block absolute top-14 right-48">
        <div className="w-24 h-24 bg-emerald-400/10 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-emerald-400/20 transform rotate-45"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto pt-8 sm:pt-16">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <span className="inline-block px-4 py-2 bg-black rounded-full text-white text-sm sm:text-base mb-4 sm:mb-6">
            Why Choose Us
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Why <span className="text-emerald-400">Infoxoras</span> is the
            <br className="hidden sm:block" /> Right Choice for You
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Box 1 */}
          <div className="lg:col-span-4 bg-amber-100 text-zinc-900 p-6 sm:p-8 rounded-3xl relative group hover:shadow-xl transition-all duration-300">
            <Code className="w-8 h-8 mb-6 text-amber-700" />
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Expert Instruction</h3>
            <p className="text-base sm:text-xl text-zinc-600 mb-8">
              Learn from industry experts who bring real-world experience to every lesson. Our instructors are passionate about sharing their knowledge and helping you succeed.
            </p>
            <ArrowUpRight className="absolute bottom-6 right-6 w-6 h-6 transition-transform group-hover:rotate-45 text-amber-700" />
          </div>

          {/* Box 2 */}
          <div className="lg:col-span-4 bg-fuchsia-200 text-zinc-900 p-6 sm:p-8 rounded-3xl relative group hover:shadow-xl transition-all duration-300">
            <Rocket className="w-8 h-8 mb-6 text-fuchsia-700" />
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Case-Boost Certify</h3>
            <p className="text-base sm:text-xl text-zinc-600 mb-8">
              Get certified with our industry-recognized programs. Boost your career prospects with credentials that matter in today's competitive job market.
            </p>
            <ArrowUpRight className="absolute bottom-6 right-6 w-6 h-6 transition-transform group-hover:rotate-45 text-fuchsia-700" />
          </div>

          {/* Box 3 */}
          <div className="lg:col-span-4 lg:row-span-2 bg-green-300 text-zinc-900 p-6 sm:p-8 rounded-3xl relative hover:shadow-xl transition-all duration-300">
            <Calendar className="w-8 h-8 mb-6 text-green-700" />
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Flexible Learning Schedule</h3>
            <p className="text-base sm:text-xl text-zinc-600 mb-6">
              Learn at your own pace with our flexible scheduling options. Access course materials 24/7 and study when it works best for you.
            </p>
            <p className="text-base sm:text-xl text-zinc-600 mb-6">
              Choose from morning, evening, or weekend sessions to fit your busy lifestyle.
            </p>
            <p className="text-base sm:text-xl text-zinc-600 mb-8">
              Our platform adapts to your schedule, not the other way around.
            </p>
            <div>
              <button className="flex items-center gap-3 bg-zinc-900 text-white px-6 py-3 group rounded-full hover:bg-zinc-800 transition-colors group-hover:gap-4">
                Start a free trial
                <ArrowUpRight className="bottom-6 right-6 w-6 h-6 transition-transform group-hover:rotate-45" />
              </button>
            </div>
          </div>

          {/* Box 4 */}
          <div className="lg:col-span-8 bg-sky-200 text-zinc-900 p-6 sm:p-8 rounded-3xl relative group hover:shadow-xl transition-all duration-300">
            <Award className="w-8 h-8 mb-6 text-sky-700" />
            <h3 className="text-xl sm:text-2xl font-bold mb-4">100+ High Impact Courses</h3>
            <p className="text-base sm:text-xl text-zinc-600 max-w-2xl mb-8">
              Choose from our extensive library of courses designed to meet industry demands. From beginner to advanced levels, we have the perfect course to help you achieve your goals.
            </p>
            <ArrowUpRight className="absolute bottom-6 right-6 w-6 h-6 transition-transform group-hover:rotate-45 text-sky-700" />
          </div>
        </div>

        {/* Bottom Logo */}
        <div className="mt-16 hidden lg:block">
          <div className="w-24 h-24 bg-emerald-400/10 rounded-full flex flex-col items-center justify-center gap-2">
            <div className="w-12 h-3 bg-emerald-400/20 rounded-full"></div>
            <div className="w-12 h-3 bg-emerald-400/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
