import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="py-24  bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative ">
          <img
            src="assets/img/about.jpg" 
            alt="About us"
            className="rounded-xl shadow-lg w-full max-w-md mx-auto mt-[62vh] lg:mt-0"
          />
        </div>

        {/* Right: Content */}
        <div>
          <div className="mb-4">
            <span className="inline-block bg-white text-blue-600 font-semibold px-4 py-2 rounded-full shadow text-sm">
              About Our Company
            </span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Choose <span className="text-blue-600">The Best</span> IT <br /> Service Company
          </h2>

          <p className="text-gray-600 border-l-4 border-blue-600 pl-4 mb-8">
            ITfirm is a leading Web and Mobile App Development Company with office in Delhi and Jaipur. We work according to the need of customers and provide the vital appropriate solution built by the team with experience of more than 7 years.
          </p>

          {/* Features Row */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <img src="https://html.themexriver.com/it-firm/images/icons/about-1.png" alt="icon" className="w-10 h-10" />
              <div>
                <h5 className="font-semibold text-sm">Moneyback Guarantee</h5>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img src="https://html.themexriver.com/it-firm/images/icons/about-2.png" alt="icon" className="w-10 h-10" />
              <div>
                <h5 className="font-semibold text-sm">Technical Support</h5>
              </div>
            </div>
          </div>

          {/* Contact Block */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded shadow hover:from-purple-700 hover:to-blue-700 transition">
              Contact Us →
            </button>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call for help</p>
                <p className="text-lg font-bold text-black">91 124 3467 2345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
