// import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter , ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SocialButton = ({ children, link }) => (
  <button
    onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
    className="p-2 text-gray-400 hover:text-white hover:scale-125 transition-all duration-300 ease-in-out"
  >
    {children}
  </button>
);

const Footer = () => {
  return (
    <footer className=" bg-[#313131] text-white py-12 shadow-sm shadow-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-left text-2xl font-bold">infoxoras</h3>
            <p className="text-left text-l text-gray-300">
              Office No 110, First floor, Pramukh square,<br />
              Above D-Mart , Kudasan-sargasan road,<br />
              Gandhinagar - 382421.
            </p>
            {/* <p className="text-left text-l text-gray-300">
              +91 9510 7749 87,<br/> +91 7984 8186 97
            </p> */}
          </div>


          {/* Quick Links */}
          <div className="space-y-4">
            <ul className="space-y-2">
              <li><a href="/" className="text-left text-xl hover:text-green-300 transition-colors">Home</a></li>
              <li><a href="/about-us" className="text-left text-xl hover:text-green-300 transition-colors">About Us</a></li>
              {/* <li><a href="/services" className="text-left text-xl hover:text-green-300 transition-colors">Services</a></li> */}
              {/* <li><a href="/blog" className="text-left text-xl hover:text-green-300 transition-colors">Blog</a></li> */}
              <li><a href="/careers" className="text-left text-xl hover:text-green-300 transition-colors">Careers</a></li>
              <li><a href="/it-consulting" className="text-left text-xl hover:text-green-300 transition-colors">IT Consulting</a></li>
              <li><a href="/get-in-touch" className="text-left text-xl hover:text-green-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>


          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-4"><Link to="/services">Services</Link></h4>
            <ul className="space-y-2 text-gray-300 ">
              <li className='hover:text-green-300'>Web Development</li>
              <li className='hover:text-green-300'>Digital Marketing</li>
              <li className='hover:text-green-300'>E-Commerce Development</li>
              <li className='hover:text-green-300'>Mobile App Development</li>
              <li className='hover:text-green-300'>Software Development</li>
              <li className='hover:text-green-300'>Graphics Design</li>
              <li className='hover:text-green-300'>Game Development</li>
              <li className='hover:text-green-300'>Artificial Intelligence</li>
              <li className='hover:text-green-300'>AR/VR</li>
            </ul>
          </div>


          {/* CTA Section */}
          <a
    href="tel:+919510774987" // Replace with the same phone number
    className=""
  >

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Get Better Solution for your Business</h3>
            <button className="group flex gap-3 bg-zinc-900 text-white px-6 py-3 rounded-full hover:bg-green-300 hover:text-black transition-colors">
            Call us today
          <ArrowUpRight className="w-6 h-6 transition-transform group-hover:rotate-45"/>
          </button>
          </div>
  </a>
        </div>


        {/* Social Media */}
        <div className="border-t border-gray-800 pt-2 mb-2">
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Follow on Us</span>
            <div className="flex gap-4">
              <SocialButton link='https://www.instagram.com/infoxoras/'>
                
              <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer transition-colors" />
              </SocialButton>

              {/* <SocialButton>
              <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer transition-colors" />
              </SocialButton> */}

              <SocialButton link='https://www.linkedin.com/company/infoxoras/posts/?feedView=all'>
              <Linkedin className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
              </SocialButton>

              {/* <SocialButton>
              <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
              </SocialButton> */}
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© Infoxoras Since 2024. All Rights Reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
          <p className="text-sm text-gray-400">
            We use cookies on our site. Please read more about cookies Policy here.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;