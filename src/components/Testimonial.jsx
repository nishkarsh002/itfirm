import { useState } from "react";
import { testimonials } from "../data/navData";

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { name, title, feedback, image } = testimonials[current];

  return (
    <div className="bg-white py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side - Heading */}
        <div className="md:w-1/2 text-center md:text-left">
           <button className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-full shadow text-lg mb-3">
              Testimonial ~
            </button>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            What Our <span className="text-blue-600">Customers</span> Have Said.
          </h2>
          <p className="text-gray-600">
            We value our customers and their feedback. Here's what they think about working with us.
          </p>
        </div>

        {/* Right Side - Testimonial Card */}
        <div className="bg-gray-50 shadow-lg rounded-lg p-8 relative w-full md:w-1/2">
          <p className="text-gray-700 text-lg italic mb-6">"{feedback}"</p>
          <div className="flex items-center gap-4">
            <img src={image} alt={name} className="w-14 h-14 rounded-full border-2 border-blue-500" />
            <div>
              <h4 className="font-bold text-gray-900">{name}</h4>
              <p className="text-blue-600 text-sm">{title}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={prevTestimonial}
              className="bg-white border border-gray-300 text-gray-600 hover:bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
            >
              &#8592;
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white border border-gray-300 text-gray-600 hover:bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
