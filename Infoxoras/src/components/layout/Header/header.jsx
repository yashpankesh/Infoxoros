import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Menu, X, ChevronDown, ChevronUp, ChevronRight, 
  Globe, 
  Code, 
  LineChart, 
  Cloud, 
  HeadphonesIcon, 
  ShoppingCart,
  Laptop,
  Database,
  Layout,
  Server } from 'lucide-react';
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // const services = [
  //   { name: 'Web Development', route: '/services/web-development' },
  //   { name: 'Mobile Development', route: '/services/mobile-development' },
  //   { name: 'Cloud Solutions', route: '/services/cloud-solutions' },
  //   { name: 'DevOps', route: '/services/devops' },
  //   { name: 'AI & ML Solutions', route: '/services/ai-ml' },
  // ];

  const [selectedService, setSelectedService] = useState("web-development");
  const services = {
    "web-development": {
      title: "Web Development",
      icon: Globe,
      subServices: [
        {
          title: "Web Design",
          description: "Crafting visually stunning and highly functional websites that engage and convert. We design digital experiences tailored to your brand's needs.",
          icon: Layout
        },
        {
          title: "Front-End Development",
          description: "Building seamless, responsive interfaces that bring your vision to life. Our front-end development ensures performance, accessibility, and a user-friendly experience.",
          icon: Laptop
        },
        {
          title: "E-Commerce Development",
          description: "Transform your business with custom e-commerce solutions. We create secure, scalable online stores that deliver a seamless shopping experience for your customers.",
          icon: ShoppingCart
        },
        {
          title: "Back-End Development",
          description: "Build robust and efficient back-end systems tailored to your needs. Our back-end development ensures seamless performance, security, and scalability for your applications.",
          icon: Server
        }
      ]
    },
    "software-development": {
      title: "Software Development",
      icon: Code,
      subServices: [
        {
          title: "Custom Software",
          description: "Tailored software solutions designed to meet your specific business needs.",
          icon: Code
        },
        {
          title: "API Development",
          description: "Robust and scalable API solutions for seamless system integration.",
          icon: Database
        },
        {
          title: "Mobile Apps",
          description: "Native and cross-platform mobile applications for iOS and Android.",
          icon: Laptop
        },
        {
          title: "Desktop Applications",
          description: "Powerful desktop software for Windows, macOS, and Linux.",
          icon: Server
        }
      ]
    },
    "sales-marketing": {
      title: "Sales & Marketing",
      icon: LineChart,
      subServices: [/* Similar structure */]
    },
    "cloud-computing": {
      title: "Cloud Computing",
      icon: Cloud,
      subServices: [/* Similar structure */]
    },
    "customer-support": {
      title: "Customer Support",
      icon: HeadphonesIcon,
      subServices: [/* Similar structure */]
    },
    "ecommerce-development": {
      title: "ECommerce Development",
      icon: ShoppingCart,
      subServices: [/* Similar structure */]
    }
  };

  const navItems = [
    { name: 'Home', route: '/' },
    { name: 'IT Consulting', route: '/it-consulting' },
    { name: 'Careers', route: '/careers' },
    { name: 'About Us', route: '/about-us' },
    { name: 'Courses', route: '/courses' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-[70px] bg-[#1e1e1ece] border-b border-[#4d4d4d80] backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <div className="flex-shrink-0 -mt-3 mr-10">
            <Link to="/">
              <img src="src/images/logo.png" width={150} alt="Logo" className="mt-5" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-1 ml-20">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.route}
                  className="text-gray-100 hover:text-[#57FFBC] px-3 py-2 text-lg font-sm font-sans tracking-wider relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#57FFBC] transform scale-x-0 group-hover:scale-x-90 transition-transform duration-200 rounded-full"></span>
                </Link>
              ))}

              {/* Services Dropdown */}
              <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <button
                  
                  className="flex items-center text-gray-100 hover:text-[#57FFBC] px-3 py-2 text-lg font-sm font-sans tracking-wider"
                >
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[900px] bg-[#1e1e1eaa] shadow-2xl border-b border-[#4d4d4d80] backdrop-blur-md z-50 p-0 grid grid-cols-[250px,1fr] divide-x divide-zinc-800">
                {/* Left side - Service list */}
                <div className="py-1 ">
                  {Object.entries(services).map(([key, service]) => (
                    <DropdownMenuItem
                    key={key}
                    className={`flex items-center justify-between px-4 py-3 cursor-pointer focus:bg-zinc-900  ${
                      selectedService === key ? 'bg-zinc-900' : 'hover:bg-zinc-700'
                    }`}
                    onMouseEnter={() => setSelectedService(key)}
                  >
                    <div className="flex items-center space-x-3">
                      <service.icon className="h-5 w-5 text-emerald-400" />
                      <span className="text-zinc-100">{service.title}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-zinc-400" />
                  </DropdownMenuItem>
                  ))}
                </div>

                  

                {/* Right side - Service details grid */}
                <div className="p-6 grid grid-cols-2 gap-4">
                  {services[selectedService].subServices?.map((subService, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-zinc-800/80 hover:bg-zinc-900 transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <subService.icon className="h-5 w-5 text-emerald-400" />
                        <h3 className="text-lg font-semibold text-white">
                          {subService.title}
                        </h3>
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {subService.description}
                      </p>
                    </div>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
              
            </div>

            <Link
              to="/get-in-touch"
              className="bg-black hover:bg-[#57FFBC] hover:text-black text-white px-6 py-2 rounded-full font-sans tracking-wider transition-colors duration-300 text-sm font-medium"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-100 hover:text-[#57FFBC]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1e1e1e] border-b border-[#4d4d4d80]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.route}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-100 hover:text-[#57FFBC]"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Services Dropdown */}
            {/* <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-100 hover:text-[#57FFBC]"
              >
                Services
                {isServicesOpen ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>

              {isServicesOpen && (
                <div className="pl-6 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.route}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 text-base font-medium text-gray-100 hover:text-[#57FFBC]"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div> */}
            <div>
  <button
    onClick={() => setIsServicesOpen(!isServicesOpen)}
    className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-100 hover:text-[#57FFBC]"
  >
    Services
    {isServicesOpen ? (
      <ChevronUp className="ml-1 h-4 w-4" />
    ) : (
      <ChevronDown className="ml-1 h-4 w-4" />
    )}
  </button>

  {isServicesOpen && (
    <div className="pl-6 space-y-1">
      {Object.entries(services).map(([key, service]) => (
        <div key={key}>
          <button
            onClick={() => setSelectedService(key)}
            className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-100 hover:text-[#57FFBC]"
          >
            {service.title}
            {selectedService === key ? (
              <ChevronUp className="ml-1 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-1 h-4 w-4" />
            )}
          </button>

          {selectedService === key && (
            <div className="pl-6 space-y-1">
              {service.subServices.map((subService, index) => (
                <Link
                  key={index}
                  to={`/${key}/${subService.title.toLowerCase().replace(/ /g, '-')}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-100 hover:text-[#57FFBC]"
                >
                  {subService.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )}
</div>

            <div className="pt-4 px-2 pb-2">
              <Link
                to="/get-in-touch"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center bg-black hover:bg-[#57FFBC] hover:text-black text-white px-6 py-2 rounded-full font-sans tracking-wider transition-colors duration-300 text-base font-medium"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
