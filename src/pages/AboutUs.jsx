import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const scrollRef = useRef(null);

  return (
    <div className="bg-white text-gray-900">

      <Navbar />
      {/* About Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://html.themexriver.com/it-firm/images/background/7.jpg')" }}>
        {/* <div className="absolute inset-0 opacity-75" ></div> */}
        <h1 className="text-5xl font-bold text-white relative z-10">About <span className='text-blue-400'>Us</span> </h1>
      </div>

      {/* Intro Section */}
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Text Section */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h2 className="text-blue-700 font-semibold mb-2">About Us</h2>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Choose <span className="text-blue-700">The Best</span> IT Service Company
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna.
          </p>
          <p className="text-gray-700 mb-4">
            An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes.
          </p>
          <Link to="/career">
            <button className="bg-blue-700 text-white px-6 py-3 rounded shadow hover:bg-blue-800 transition">
              Check for your career options
            </button>
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 relative flex flex-col items-center justify-center mt-10">
          {/* Top Left Badge */}
          <div className="absolute -top-6 -left-6 bg-gradient-to-br from-blue-600 to-blue-400 text-white px-4 py-2 rounded-xl shadow-lg z-10 w-32 text-center">
            <p className="text-xl font-bold">12</p>
            <p className="text-sm leading-tight">years of<br />experiences</p>
          </div>

          {/* Circular Image */}
          <div className="w-80 h-80 rounded-full border-[10px] border-blue-600 overflow-hidden flex items-center justify-center shadow-md z-0">
            <img
              src="https://html.themexriver.com/it-firm/images/resource/about-4.jpg"
              alt="Company"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Award Section Below */}
          <div className="mt-10 bg-white shadow-lg px-8 pb-6 rounded-xl w-[90%] max-w-lg text-center z-10">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/616/616490.png"
                alt="Star Icon"
                className="w-6 h-6 mb-2"
              />
              <strong className="text-lg font-semibold">Best Awarded Company</strong>
              <p className="text-sm text-gray-600 mt-2">
                We adapt our delivery to the way your work, whether as an external provider.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 flex items-center">
          {/* Left Arrow */}
          <button
            onClick={() => scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })}
            className="bg-white p-2 rounded-full shadow mx-2 text-blue-600 hover:bg-blue-50"
          >
            <FaArrowLeft />
          </button>

          {/* Scrollable Timeline */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth"
          >
            {[
              { year: "2010", title: "Started business" },
              { year: "2012", title: "Survival during wartime" },
              { year: "2016", title: "Crisis and opportunity" },
              { year: "2017", title: "Get Award" },
              { year: "2020", title: "Global Expansion" },
              { year: "2023", title: "Digital Transformation" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="min-w-[250px] bg-white shadow-md rounded-xl p-6 text-center"
              >
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold py-2 rounded-t-xl">
                  {item.year}
                </div>
                <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  A People Ops leader who is committed to the growth and
                  development of leaders.
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })}
            className="bg-white p-2 rounded-full shadow mx-2 text-blue-600 hover:bg-blue-50"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>


      {/* Team Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-blue-700 font-semibold mb-2">Team Member</h2>
        <h1 className="text-3xl lg:text-4xl font-bold mb-10">
          Passionate Personalities, <span className="text-blue-700">Versatile</span> Brains
        </h1>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Ashish Sudra", role: "Founder & CEO", img: "https://html.themexriver.com/it-firm/images/resource/team-1.jpg" },
            { name: "Rachna Sheth", role: "International Business Head", img: "	https://html.themexriver.com/it-firm/images/resource/team-2.jpg" },
            { name: "Tapak Meni", role: "Founder & CEO", img: "	https://html.themexriver.com/it-firm/images/resource/team-3.jpg" },
            { name: "Ergi Laura", role: "Founder & CEO", img: "	https://html.themexriver.com/it-firm/images/resource/team-4.jpg" },
          ].map((member, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={member.img} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
                <div className="flex justify-center space-x-3 mt-2 text-blue-600">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedinIn />
                  <FaInstagram />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutUs
