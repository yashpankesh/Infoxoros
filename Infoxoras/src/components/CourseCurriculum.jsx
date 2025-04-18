import React from 'react';

const curriculumItems = [
  "Core Python Concepts",
  "Collection",
  "Functions",
  "Modules",
  "Input Output",
  "Exception Handling",
  "OOPs Concepts",
  "Regular Expression",
  "CGI",
  "Networking",
  "Multi - Threading",
  "GUI Programming",
  "Database",
  "Web Programming"
];

const CourseCurriculum = () => {
  return (
    <div className="bg-zinc-900 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-emerald-400">
          Course Curriculum
        </h2>
        
        <div className="space-y-4">
          {curriculumItems.map((item, index) => (
            <div 
              key={index}
              className="flex justify-between items-center border-b border-gray-700 py-4 px-4 hover:bg-gray-800 rounded-lg transition-all duration-300"
            >
              <span className="text-gray-200 text-lg">{item}</span>
              <span className="text-gray-400 text-2xl cursor-pointer">(+)</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 inline-flex items-center gap-2">
            Download Course
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCurriculum;