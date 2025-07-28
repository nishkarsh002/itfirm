import { useState, useEffect } from 'react';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { servicesCard, slides } from '../data/navData';

const Services = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];
  return (
    <div>
      <Navbar />

      <div className="relative h-[400px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('../assets/test/img.jpg')" }}>
        {/* <div className="absolute inset-0 opacity-75" ></div> */}
        <h1 className="text-5xl font-bold text-white relative z-10">Our Services</h1>
      </div>

      <div className="px-6 py-16 bg-white text-gray-800">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold flex items-center justify-center gap-2">
            <FaArrowRight className="rotate-180" /> Our Services <FaArrowRight />
          </p>
          <h2 className="text-4xl font-bold mt-2">
            We Provide The Necessary <br />
            Services To You
          </h2>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {servicesCard.map((service, idx) => (
            <div
              key={idx}
              className="group relative h-[300px] rounded overflow-hidden shadow-lg bg-gradient-to-b from-white to-blue-100 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:opacity-20 transition duration-500"
              />
              <div className="absolute bottom-0 w-full bg-blue-600 bg-opacity-90 p-4 text-white text-center group-hover:bottom-full group-hover:opacity-0 transition-all duration-500 ease-in-out">
                <div className="flex justify-center mb-2">
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                    <img src={service.icon} alt={service.title} className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-bold text-lg">{service.title}</h3>
              </div>
              <div className="absolute top-full group-hover:top-0 left-0 w-full h-full bg-blue-600 p-6 text-white text-center transition-all duration-500 ease-in-out flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-sm mb-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row py-10 bg-[#f1f4f9] text-gray-800">
        {/* Left - Image with overlay content */}
        <div className="relative w-full lg:w-1/2 h-[500px]">
          <img
            src={slide.image}
            alt="Slide"
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 text-white p-10 flex flex-col justify-center">
            <div className="flex gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center shadow hover:bg-blue-100"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center shadow hover:bg-blue-100"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Right - Textual Info */}
        <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center bg-[#f1f4f9]">
          <p className="text-blue-600 font-semibold flex items-center gap-2">
            Who We Are? <FaArrowRight />
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mt-2 mb-4">
            Flexible Outsourcing to  <span className="text-blue-600">Power Your Vision</span>
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Unlock the full potential of your projects with our on-demand tech talent.
            From backend to frontend, mobile to cloud — we provide skilled professionals in <b> Java, Python, Node.js, React, and more</b>. Whether you need a single developer or a full development team, our flexible outsourcing model adapts to your goals, timelines, and budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            {/* Item 1 */}
            {/* <div className="flex flex-col items-center">
              <div className="w-24 h-24 flex items-center justify-center rounded-full border-4 border-blue-600 bg-white shadow-lg mb-4">
                <img
                  src="assets/Icon/2.png"
                  alt="Digital Marketer"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h4 className="font-bold text-xl">Digital Marketer</h4>
              <p className="text-gray-600 text-sm mt-2 px-4">
                Our customers get solutions and business opportunities instead of just projects. Our mission is to accelerate.
              </p>
            </div> */}

            {/* Item 2 */}
            {/* <div className="flex flex-col items-center">
              <div className="w-24 h-24 flex items-center justify-center rounded-full border-4 border-blue-600 bg-white shadow-lg mb-4">
                <img
                  src="assets/Icon/4.png"
                  alt="Global Entrepreneur"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h4 className="font-bold text-xl">Global Entrepreneur</h4>
              <p className="text-gray-600 text-sm mt-2 px-4">
                Our customers get solutions and business opportunities instead of just projects. Our mission is to accelerate.
              </p>
            </div> */}
          </div>

        </div>
      </div>



      <Footer />

    </div>
  )
}

export default Services