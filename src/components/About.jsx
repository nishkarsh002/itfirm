import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-24  bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative ">
          <img
            src="assets/test/about_test.jpg"
            alt="About us"
            className="rounded-xl shadow-lg w-full max-w-md mx-auto mt-[62vh]  border-2 border-black lg:mt-0"
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
            Mileazo is a leading Web and Mobile App Development Company based in Jaipur. We deliver tailored digital solutions by understanding customer needs and building them with a skilled, dedicated team.
          </p>

          {/* Features Row */}
          {/* <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <img src="assets/Icon/4.png" alt="icon" className="w-10 h-10" />
              <div>
                <h5 className="font-semibold text-sm">Moneyback Guarantee</h5>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img src="assets/Icon/5.png" alt="icon" className="w-10 h-10" />
              <div>
                <h5 className="font-semibold text-sm">Technical Support</h5>
              </div>
            </div>
          </div> */}

          {/* Contact Block */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/contact_us">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded shadow hover:from-purple-700 hover:to-blue-700 transition">
                Contact Us →
              </button>
            </Link>


            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call for help</p>
                <p className="text-lg font-bold text-black">0 (141) 2729706</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
