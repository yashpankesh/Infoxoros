// CourseCard.jsx
import React from "react";
import { X } from "lucide-react";

const CourseCard = ({ course, onSelect }) => {
  return (
    <div className="group w-full max-w-sm">
      <div className="bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden shadow-xl border border-white/10 transition-all duration-300 hover:transform hover:scale-[1.02] hover:bg-white/10 flex flex-col h-full">
        <div className="relative h-48">
          <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
          {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-medium shadow-lg">
            {course.discount}% OFF
          </div> */}
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
            {course.title}
          </h3>
          <div className="flex gap-2 mb-4">
            {/* {course.tags.map((tag, index) => (
              <span key={index} className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-sm backdrop-blur-sm border border-red-500/20">
                {tag}
              </span>
            ))} */}
            <span className="bg-zinc-500/20 text-zinc-300 px-2 py-1 rounded text-sm backdrop-blur-sm border border-zinc-500/20">
              {course.language}
            </span>
          </div>

          {/* <div className="mb-4 flex-grow">
            <p className="text-emerald-400/90 text-sm mb-1">{course.saleType}</p>
            <div className="flex items-center gap-2">
              <span className="text-white text-2xl font-bold">₹{course.discountedPrice}</span>
              <span className="text-zinc-400 line-through">₹{course.originalPrice}</span>
            </div>
          </div> */}
          
          <button
            onClick={() => onSelect(course)}
            className="w-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm mt-auto"
          >
            View Details
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default CourseCard;