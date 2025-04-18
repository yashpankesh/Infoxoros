import React from 'react';
import { Monitor, Lock, BarChart3, Users, MessageSquare, Settings, Phone } from 'lucide-react';
import { Link } from "react-router-dom";

const Itconsulting = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Navigation */}
      

      {/* Hero Section */}

      <section className="pt-24 pb-6 md:pt-32 md:pb-14 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 justify-center items-center">
            <div className='w-full'>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
                Transform Your Vision into Reality with Expert Consultation
              </h1>
              <p className="text-gray-400 mb-8">
                Discuss your business goals with our experts and uncover tailored solutions that drive success.
              </p>
              <Link to="/get-in-touch">
              <button className="bg-green-500 text-black px-8 py-3 rounded-md hover:bg-green-600">Contact</button></Link>
            </div>
      
            <div className="hidden md:flex justify-end">
              <img src="src\images\3.png" alt="Technology" className="rounded-lg shadow-xl  w-2/3" />
            </div>
      
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className='w-full flex justify-center '>
              <img src="src\images\1.png" alt="IT Solutions" className="rounded-lg shadow-xl w-2/3 flex items-center justify-center" />
            </div>
            <div>
          <h2 className="text-3xl font-bold mb-12 ">
            Unlock Your Business Potential with Customized IT Solutions for Growth
          </h2>
              <p className="text-gray-400 mb-8">
              In today’s fast-paced digital landscape, tailored IT solutions are essential for driving business success. Our expert team is here to help you navigate challenges and seize opportunities.
              </p>
              <div className="grid gap-6 justify-center">
                <div className="flex items-start  gap-4">
                  <Monitor className="text-green-500 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Tailored Solutions</h3>
                    <p className="text-gray-400">Customized strategies that align with your unique business objectives and enhance efficiency.</p>
                  </div>
                </div>
                <div className="flex items-start  gap-4">
                  <BarChart3 className="text-green-500 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Business Growth</h3>
                    <p className="text-gray-400">Empower your organization with innovative IT solutions that drive sustainable growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Your Path to Tailored IT Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Step 1: Initial Contact and Discovery</h3>
              <p className="text-gray-400">Reach out to us to schedule your first meeting.</p>
            </div>
            <div className="text-center">
              <MessageSquare className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Step 2: Strategy Development and Planning</h3>
              <p className="text-gray-400">Our experts will craft a tailored plan for you.</p>
            </div>
            <div className="text-center">
              <Settings className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Step 3: Implementation and Support</h3>
              <p className="text-gray-400">We execute the plan while providing ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4 ">
          <center>

          <h2 className="text-3xl w-2/3 font-bold mb-4 text-center">Unlock Your Potential with IT Consultation</h2>
          <p className="text-gray-400 w-2/3 text-center mb-12">
          Our IT consultation services provide tailored strategies to meet your unique business goals. Collaborate with our experts to navigate the complexities of technology.
          </p>
          </center>
          <div className="grid gap-8 md:grid-cols-3 items-center">
            {/* Left Features */}
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <Lock className="w-8 h-8 text-green-500" />
                <div>
                  <h3 className="font-semibold text-lg">Expert Guidance</h3>
                  <p className="text-gray-400">Leverage our expertise to make informed decisions that drive your business forward.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Settings className="w-8 h-8 text-green-500" />
                <div>
                  <h3 className="font-semibold text-lg">Customized Solutions</h3>
                  <p className="text-gray-400">Receive solutions tailored to your organization's needs and challenges.</p>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="text-center">
              <img src="src\images\2.png" alt="Consultation" className="rounded-lg shadow-xl mx-auto w-full max-w-sm" />
            </div>

            {/* Right Features */}
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <Phone className="w-8 h-8 text-green-500" />
                <div>
                  <h3 className="font-semibold text-lg">Continuous Support</h3>
                  <p className="text-gray-400">Enjoy ongoing support to ensure your technology evolves with your business.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <BarChart3 className="w-8 h-8 text-green-500" />
                <div>
                  <h3 className="font-semibold text-lg">Innovative Strategies</h3>
                  <p className="text-gray-400">Drive innovation and growth with cutting-edge technology solutions.</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="text-center mt-12">
          <Link to="/get-in-touch">
            <button className="bg-green-500 text-black px-6 py-2 rounded-md hover:bg-green-600">Contact</button></Link>
          </div> */}
        </div>
      </section>

      
    </div>
  );
};

export default Itconsulting;
