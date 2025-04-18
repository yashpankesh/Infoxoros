import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, Briefcase, MapPin, Clock, X, ChevronDown, Upload, ChevronUp } from 'lucide-react';

const jobs = [
  {
    id: '1',
    title: 'Business Development Executive',
    category: 'Business',
    experience: '1+ Years',
    location: 'Gandhinagar',
    type: 'Full-Time',
    postedDate: 'Today',
    details: {
      overview: 'We are looking for a Business Development Executive to help us expand our market presence and drive revenue growth through strategic partnerships and client relationships.',
      responsibilities: [
        'Identify and pursue new business opportunities',
        'Develop and maintain strong client relationships',
        'Create and present business proposals',
        'Meet or exceed sales targets',
        'Collaborate with internal teams to ensure client satisfaction'
      ],
      requirements: [
        'Bachelor\'s degree in Business, Marketing, or related field',
        'Proven track record in business development or sales',
        'Excellent communication and negotiation skills',
        'Strong analytical and problem-solving abilities'
      ],
      skills: [
        'Sales Strategy',
        'Relationship Building',
        'Market Analysis',
        'CRM Software',
        'Presentation Skills'
      ]
    }
  },
  {
    id: '2',
    title: 'UI/UX Design Intern',
    category: 'Engineering',
    experience: '0-6 months',
    location: 'Gandhinagar',
    type: 'Internship',
    postedDate: '2 days ago',
    details: {
      overview: 'Join our design team as a UI/UX Design Intern and help create beautiful, user-friendly interfaces while learning from experienced designers.',
      responsibilities: [
        'Create wireframes and prototypes',
        'Conduct user research and testing',
        'Collaborate with developers and product managers',
        'Design user interfaces for web and mobile applications',
        'Participate in design reviews and feedback sessions'
      ],
      requirements: [
        'Currently pursuing degree in Design, HCI, or related field',
        'Basic knowledge of design tools (Figma, Adobe XD)',
        'Understanding of UI/UX principles',
        'Strong attention to detail'
      ],
      skills: [
        'UI Design',
        'Wireframing',
        'Prototyping',
        'User Research',
        'Design Thinking'
      ]
    }
  },
  {
    id: '3',
    title: 'Python Developer',
    category: 'Engineering',
    experience: '1+ Years',
    location: 'Gandhinagar',
    type: 'Full-Time',
    postedDate: '3 days ago',
    details: {
      overview: 'We\'re seeking a Python Developer to join our backend team and help build scalable, efficient applications.',
      responsibilities: [
        'Develop and maintain Python applications',
        'Write clean, efficient, and well-documented code',
        'Implement security and data protection measures',
        'Integrate user-facing elements with server-side logic',
        'Troubleshoot and debug applications'
      ],
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        'Strong proficiency in Python',
        'Experience with web frameworks (Django/Flask)',
        'Knowledge of databases and API design'
      ],
      skills: [
        'Python',
        'Django/Flask',
        'SQL',
        'REST APIs',
        'Git'
      ]
    }
  },
  {
    id: '4',
    title: 'Web Developer',
    category: 'Engineering',
    experience: '1+ Years',
    location: 'Gandhinagar',
    type: 'Full-Time',
    postedDate: '5 days ago',
    details: {
      overview: 'Looking for a talented Web Developer to create and maintain modern web applications using the latest technologies.',
      responsibilities: [
        'Develop responsive web applications',
        'Implement new features and functionality',
        'Optimize applications for performance',
        'Write clean, maintainable code',
        'Collaborate with cross-functional teams'
      ],
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        'Strong proficiency in JavaScript/TypeScript',
        'Experience with modern frontend frameworks',
        'Knowledge of web standards and best practices'
      ],
      skills: [
        'React',
        'TypeScript',
        'HTML/CSS',
        'Node.js',
        'Git'
      ]
    }
  },
  {
    id: '5',
    title: 'Graphics Designer',
    category: 'Engineering',
    experience: '1+ Years',
    location: 'Gandhinagar',
    type: 'Full-Time',
    postedDate: 'Week ago',
    details: {
      overview: 'We are looking for a creative Graphics Designer to join our team and help create stunning visual content for our brand and clients.',
      responsibilities: [
        'Create visual content for digital and print media',
        'Develop brand identity elements',
        'Design marketing materials',
        'Maintain brand consistency',
        'Collaborate with marketing team'
      ],
      requirements: [
        'Bachelor\'s degree in Design or related field',
        'Proficiency in Adobe Creative Suite',
        'Strong portfolio demonstrating creativity',
        'Understanding of design principles'
      ],
      skills: [
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Typography',
        'Brand Design',
        'Layout Design'
      ]
    }
  }
];

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const [isPositionDropdownOpen, setIsPositionDropdownOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');
  const [expandedJobId, setExpandedJobId] = useState(null);
  const formRef = useRef(null);

  const categories = ['All', 'Engineering', 'Business', 'HR'];

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const filteredJobs = jobs.filter((job) => {
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    const matchesSearch =
      job.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
      job.type.toLowerCase().includes(debouncedSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleApplyNow = (jobTitle) => {
    setSelectedPosition(jobTitle);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleJobDetails = (jobId) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white relative overflow-hidden mt-12">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 opacity-90"></div>

      <div className="relative container mx-auto px-4 py-8 md:py-16">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-16">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold italic tracking-tight">Join the Brand</h1>

            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by title, location, or job type"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -top-10 -right-10 bg-zinc-700/90 backdrop-blur-sm p-6 rounded-lg max-w-xs z-10 shadow-xl">
              <div className="text-4xl text-green-500">"</div>
              <p className="text-lg italic text-center">
                A workplace where innovation meets excellence!
              </p>
              <div className="text-4xl text-emerald-500 text-right">"</div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-zinc-700/90 backdrop-blur-sm p-6 rounded-lg max-w-xs z-10 shadow-xl">
              <div className="text-4xl text-green-500">"</div>
              <p className="text-lg italic text-center">
              Be part of a culture that inspires creativity, fosters collaboration, and empowers innovation. At
              </p>
              <div className="text-4xl text-emerald-500 text-right">"</div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80"
              alt="Team member"
              className="rounded-lg w-full h-[600px] object-cover"
            />
          </div>
        </div>

        {/* Current Openings Section */}
        <div className="mt-12 md:mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Current Openings</h2>

          <div className="md:hidden mb-6 overflow-x-auto">
            <div className="flex gap-4 pb-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-green-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex justify-center gap-8 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-green-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400">No jobs found matching your criteria</p>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className={`bg-zinc-800/50 rounded-lg p-4 md:p-6 hover:bg-zinc-800 transition-all group ${
                    expandedJobId === job.id ? 'bg-zinc-800' : ''
                  }`}
                >
                  <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">{job.title}</h3>
                      <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-gray-400 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} />
                          <span>Experience {job.experience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 md:flex-shrink-0">
                      <button 
                        onClick={() => toggleJobDetails(job.id)}
                        className="flex items-center gap-1 text-green-500 hover:text-green-400 text-sm md:text-base"
                      >
                        More Info
                        {expandedJobId === job.id ? (
                          <ChevronUp size={16} className="transition-transform" />
                        ) : (
                          <ChevronDown size={16} className="transition-transform" />
                        )}
                      </button>
                      <button 
                        onClick={() => handleApplyNow(job.title)}
                        className="flex items-center gap-2 text-green-500 hover:text-green-400 text-sm md:text-base"
                      >
                        Apply Now
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-3 md:mt-4 text-sm text-gray-500">
                    Posted {job.postedDate}
                  </div>

                  {/* Expanded Job Details */}
                  {expandedJobId === job.id && (
                    <div className="mt-6 space-y-6 border-t border-zinc-700 pt-6 text-gray-300">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Overview</h4>
                        <p>{job.details.overview}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {job.details.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {job.details.requirements.map((requirement, index) => (
                            <li key={index}>{requirement}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Required Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.details.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-zinc-700 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Application Form Section */}
        <div ref={formRef} className="mt-20 md:mt-32">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Didn't find the job you are looking for?
            </h2>
            <p className="text-gray-400 mb-8">
              Don't worry fill out this form we will reach you out
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-zinc-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />

              <input
                type="tel"
                placeholder="Phone No."
                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Current CTC"
                  className="bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Expected CTC"
                  className="bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsPositionDropdownOpen(!isPositionDropdownOpen)}
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-left text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent flex justify-between items-center"
                >
                  {selectedPosition || "What Role you are looking at?"}
                  <ChevronDown size={20} className={`transition-transform ${isPositionDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isPositionDropdownOpen && (
                  <div className="absolute z-10 w-full mt-2 bg-zinc-800 border border-zinc-700 rounded-lg shadow-lg">
                    {jobs.map((job) => (
                      <button
                        key={job.id}
                        type="button"
                        onClick={() => {
                          setSelectedPosition(job.title);
                          setIsPositionDropdownOpen(false);
                        }}

                        className="w-full px-4 py-2 text-left hover:bg-zinc-700 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {job.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <textarea
                placeholder="What makes you best fit for this job?"
                rows={4}
                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />

              <div className="border-2 border-dashed border-zinc-700 rounded-lg p-8 text-center">
                <div className="flex flex-col items-center">
                  <Upload size={24} className="text-gray-400 mb-2" />
                  <p className="text-gray-400">Drag/ Upload Your resume</p>
                </div>
                <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;