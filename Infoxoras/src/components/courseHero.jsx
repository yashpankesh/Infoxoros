import React from 'react';
import { Play, Star, Calendar, ArrowDown, ChartNoAxesColumn } from 'lucide-react';

export function Hero() {
  return (
    <div className="container mx-auto px-12 py-12 md:py-24 relative">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          {/* Badge */}
          <span className="inline-block px-4 py-2 rounded-full bg-zinc-700 text-emerald-400 text-sm font-medium">
            Never stop learning
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Grow up your{' '}
            <span className="relative">
              skills
              <span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-400/30 -z-10"></span>
            </span>{' '}
            by online courses with{' '}
            <span className="relative">
              Online
              <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-400/30 -z-10"></span>
            </span>{' '}
            learning
          </h1>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-300 transition-colors flex items-center gap-2">
              EXPLORE PATH
            </button>

            {/* Reviews */}
            <div className="flex items-center gap-3">
              {/* <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://source.unsplash.com/random/100x100?face&${i}`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-slate-900"
                  />
                ))}
              </div> */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i === 5 ? 'text-gray-400' : 'text-yellow-400'
                    }`}
                    fill={i === 5 ? 'none' : 'currentColor'}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400">(10k+ Reviews)</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative">
          <img
            src="src\images\courseshero.png"
            alt="Student"
            className="rounded-2xl w-full max-w-md mx-auto"
          />

          {/* Stats Badge */}
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-zinc-300/90 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-blue-500" />
            <div>
              <div className="font-bold text-lg">10k+</div>
              <div className="text-sm text-gray-600">Assisted Student</div>
            </div>
          </div>

          <div className="absolute top-14 right-10 md:top-24 md:right-18 bg-orange-600/90 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
            <div >
            <ChartNoAxesColumn className="w-6 h-6 text-white" />
             
            </div>
          </div>
        </div>
      </div>
          {/* Play Button */}

          <div className="absolute h-32 w-32 left-1/2 -bottom-16 -translate-x-1/2 flex justify-center items-center rounded-full bg-zinc-900 cursor-default">
  <button className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors group cursor-default">
    <ArrowDown className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
  </button>
</div>

    </div>
  );
}