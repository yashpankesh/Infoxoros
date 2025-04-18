import React, { useState, useEffect } from 'react';
import { ThumbsUp, ThumbsDown, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John C.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 3,
      text: "I couldn't be happier with the service I received! The team was professional, attentive, and truly cared about my case They went above and beyond to ensure a positive outcome"
    },
    {
      id: 2,
      name: 'Sarah M.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 4,
      text: "Outstanding service and attention to detail. The team's dedication to excellence is evident in every interaction. Highly recommended!"
    },
    {
      id: 3,
      name: 'Michael R.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 5,
      text: "Exceptional experience from start to finish. The team's expertise and professionalism exceeded all expectations. Will definitely work with them again!"
    },
    {
      id: 4,
      name: 'Emily L.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 4,
      text: "Very impressed with the level of service and expertise. The team was always available to answer questions and provide guidance."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= testimonials.length - (itemsToShow - 1) ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? testimonials.length - itemsToShow : nextIndex;
    });
  };

  return (
    <section className="bg-zinc-900 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            <span className="text-white">What our</span>
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4ECCA3] to-[#68D4F8] text-transparent bg-clip-text">
            Customer are Saying
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">

          <center>
            
          
          <div className="overflow-hidden w-[80%]">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${(currentIndex * (100 / itemsToShow))}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-[#2A2A2A] rounded-lg p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-white font-medium">{testimonial.name}</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, index) => (
                            <span
                              key={index}
                              className={`text-lg ${
                                index < testimonial.rating ? 'text-yellow-400' : 'text-gray-400'
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 flex-grow mb-4">{testimonial.text}</p>
                    {/* <div className="flex justify-end gap-4">
                      <button className="text-gray-400 hover:text-white transition-colors">
                        <ThumbsUp className="w-5 h-5" />
                      </button>
                      <button className="text-gray-400 hover:text-white transition-colors">
                        <ThumbsDown className="w-5 h-5" />
                      </button>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </center>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#2A2A2A] p-3 rounded-full text-white hover:bg-[#3A3A3A] transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#2A2A2A] p-3 rounded-full text-white hover:bg-[#3A3A3A] transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Book a Call Button */}
        <div
  className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 flex items-center gap-2 bg-[#2A2A2A] text-white px-4 py-2 rounded-full shadow-lg z-50"
>
  <a
    href="tel:+1234567890" // Replace with the actual phone number
    className="flex items-center gap-2"
  >
    <img
      src="src/images/Nachiketpatel.png"
      alt="Support"
      className="w-8 h-8 rounded-full"
    />
    <div className="hidden sm:block">
      <p className="text-sm text-gray-400">Not sure Yet?</p>
      <p className="text-sm font-medium">Book a call</p>
    </div>
  </a>
  <a
    href="tel:+919510774987" // Replace with the same phone number
    className="bg-blue-600 p-2 rounded-full"
  >
    <Phone className="w-4 h-4" />
  </a>
</div>

      </div>
    </section>
  );
};

export default Testimonials;