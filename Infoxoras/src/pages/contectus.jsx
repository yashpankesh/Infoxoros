import { useState } from "react";
import { MessageCircle, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function UnifiedContactComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: "",
    services: {
      webDesign: false,
      mobileApp: false,
      uxDesign: false,
      marketing: false,
      webDevelopment: false,
      others: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service],
      },
    }));
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white font-poppins mt-14">
      {/* Navigation placeholder */}
      <div className="flex flex-col md:flex-row">
        {/* Contact Info */}
        <div className="w-full md:w-2/5 bg-zinc-800 p-8">
          <div className="space-y-12 text-gray-300 mt-12">
            <div className="flex items-start space-x-4">
              <MessageCircle className="w-6 h-6 text-[#ffffff] mt-1" />
              <div>
                <h3 className="font-bold text-2xl mb-4 text-white">Chat with us</h3>
                <p className="text-gray-400">Our Friendly team is here to help you</p>
                <p className="text-gray-400"> <a
                  href="mailto:Infoxoras69@gmail.com"
                  className=" text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Infoxoras69@gmail.com
                </a></p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#ffffff] mt-1" />
              <div>
                <h3 className="font-bold text-2xl mb-4 text-white">Visit Our Office</h3>
                <p className="text-gray-400">
                  Office No. 110, First floor, Pramukh square,
                  <br />
                  Above D-Mart, kudasan-sargoasan road,
                  <br />
                  Gandhinagar - 382421.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[#ffffff] mt-1" />
              <div>
                <h3 className="font-bold text-2xl mb-4 text-white">Call Us</h3>
                <p className="text-gray-400">Mon to Fri From 10:00 AM to 6:00 PM</p>
                <div className="space-y-1 mt-1">
                  <a
                    href="tel:+919510774967"
                    className="block  text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    +91 9510774967
                  </a>
                  <a
                    href="tel:+917984818697"
                    className="block  text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    +91 7984818697
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-4/5 bg-zinc-900 p-8">
          <div className="space-y-8 w-full">
            <h1 className="text-5xl font mb-8">Got Ideas? We've got skills. Let's Team Up!</h1>
            <p className="text-gray-400 mb-8">Tell us more about yourself and what's on your mind</p>
            <form onSubmit={handleSubmit} className="space-y-8 ">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-2/4 bg-transparent border-b border-gray-600 p-2 focus:outline-none focus:border-white text-white placeholder-gray-400"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-2/4 bg-transparent border-b border-gray-600 p-2 focus:outline-none focus:border-white text-white placeholder-gray-400"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Tell us a little bit about the project"
                  className="w-2/4 bg-transparent border-b border-gray-600 p-2 pt-0 pb-10 focus:outline-none focus:border-white text-white placeholder-gray-400"
                  value={formData.projectDetails}
                  onChange={(e) => setFormData((prev) => ({ ...prev, projectDetails: e.target.value }))}
                />
              </div>
              <div>
                <h3 className="text-xl mb-4">How can I help You?</h3>
                <div className="grid grid-cols-2 gap-6">
                  {["webDesign", "mobileApp", "uxDesign", "marketing", "webDevelopment"].map((service) => (
                    <label key={service} className="flex items-center space-x-3 text-gray-300">
                      <input
                        type="checkbox"
                        checked={formData.services[service]}
                        onChange={() => handleServiceChange(service)}
                        className="form-checkbox"
                      />
                      <span>{service.replace(/([A-Z])/g, " $1")}</span>
                    </label>
                  ))}
                  <div className="flex items-center space-x-3 text-gray-300">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.services.others !== ""}
                        onChange={() =>
                          setFormData((prev) => ({
                            ...prev,
                            services: { ...prev.services, others: prev.services.others ? "" : " " },
                          }))
                        }
                        className="form-checkbox"
                      />
                      <span>Others</span>
                    </label>
                    <input
                      type="text"
                      className="w-1/2 bg-transparent border-b border-gray-600 p-2 focus:outline-none focus:border-white text-white placeholder-gray-400"
                      value={formData.services.others}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          services: { ...prev.services, others: e.target.value },
                        }))
                      }
                      disabled={formData.services.others === ""}
                    />
                  </div>
                </div>
              </div>
              <button className="group flex gap-3 bg-green-300 text-black px-6 py-3 rounded-full hover:bg-green-200 transition-colors">
              Let's Started
                  <ArrowUpRight className="w-6 h-6 transition-transform group-hover:rotate-45" />
                </button>
              {/* <button
                type="submit"
                className="group bg-green-300 text-black w-[229px] h-[59px] rounded-full hover:bg-green-200 hover:text-black transition-colors relative overflow-hidden"
                >
                  <center>
                    
                <span className="relative z-10 flex items-center justify-center text-[20px] leading-tight transition-transform duration-1000 group-hover:-translate-x-2">
                  Let's Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                  </center>
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
