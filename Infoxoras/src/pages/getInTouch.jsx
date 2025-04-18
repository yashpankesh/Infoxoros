import React, { useState } from 'react';
import { MessageSquare, MapPin, Phone } from 'lucide-react';

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    services: {
      webDesign: false,
      webDevelopment: false,
      uxDesign: false,
      mobileApp: false,
      marketing: false,
      others: false
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service]
      }
    }));
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex w-full pt-16 items-center justify-center">
      {/* Contact Information */}
      <div className="w-1/3 p-12 flex flex-col justify-between">
        <div>
          {/* <img src="/logo.svg" alt="Logo" className="w-32 mb-16" /> */}

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MessageSquare className="w-6 h-6 mt-1 text-emerald-400" />
              <div>
                <h3 className="font-semibold mb-1">Chat with us</h3>
                <p className="text-gray-400 text-sm">Our friendly team is here to help you</p>
                <a
                  href="mailto:Infoxoras69@gmail.com"
                  className="text-sm text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Infoxoras69@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 mt-1 text-emerald-400" />
              <div>
                <h3 className="font-semibold mb-1">Visit Our Office</h3>
                <p className="text-gray-400 text-sm">
                  Office No 110, First floor, Pramukh square,
                  <br />
                  Above D-Mart, kudassan -sargasan road,
                  <br />
                  Gandhinagar - 382421
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 mt-1 text-emerald-400" />
              <div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-gray-400 text-sm">Mon to Fri From 10:00 AM to 6:00 PM</p>
                <div className="space-y-1">
                  <a
                    href="tel:+915107474967"
                    className="block text-sm text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    +91 510747 4967
                  </a>
                  <a
                    href="tel:+919876543321"
                    className="block text-sm text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    +91 98765 43321
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-2/3 p-12">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-2">Got Idea's? We've got skills. Let's Team Up!</h2>
          <p className="text-gray-400 mb-8">Tell us more about yourself and what's on your mind</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-gray-700 py-3 focus:border-emerald-400 outline-none transition-colors"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-gray-700 py-3 focus:border-emerald-400 outline-none transition-colors"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>

            <div>
              <textarea
                placeholder="Tell us a little bit about the project"
                rows={3}
                className="w-full bg-transparent border-b border-gray-700 py-3 focus:border-emerald-400 outline-none transition-colors resize-none"
                value={formData.project}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, project: e.target.value }))
                }
              />
            </div>

            <div>
              <p className="text-gray-300 mb-4">How can I help You?</p>
              <div className="grid grid-cols-2 gap-4">
                {Object.keys(formData.services).map((service) => (
                  <label
                    key={service}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox text-emerald-400 rounded border-gray-700 bg-transparent"
                      checked={formData.services[service]}
                      onChange={() => handleServiceChange(service)}
                    />
                    <span className="text-gray-300">
                      {service
                        .replace(/([A-Z])/g, ' $1')
                        .replace(/^./, (str) => str.toUpperCase())}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="bg-emerald-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-emerald-500 transition-colors"
            >
              Let's Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
