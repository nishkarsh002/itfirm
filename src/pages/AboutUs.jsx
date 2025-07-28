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
      <div className="relative h-[400px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('../assets/test/img.jpg')" }}>
              <h1 className="text-5xl font-bold text-white relative z-10">About Us</h1>
      </div>

  
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">

        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h2 className="text-blue-700 font-semibold mb-2">About Us</h2>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Choose <span className="text-blue-700">The Best</span> IT Service Company
          </h1>
          <p className="text-gray-600 mb-6">
            When it comes to digital transformation, choosing the right IT partner makes all the difference. At
            <b> Mileazo
            </b>, we combine innovation, reliability, and expertise to deliver solutions that truly make an impact. Whether you need <b>web development, mobile apps, digital marketing, or custom software </b>  — we provide end-to-end services tailored to your goals.
          </p>
          <p className="text-gray-700 mb-4">
            We also specialize in resource outsourcing and dedicated development support, giving you access to skilled professionals who work as an extension of your team. From short-term tasks to long-term collaborations, our flexible engagement models ensure you get the right talent at the right time.
            <br />
            <br />
            With a client-first approach, experienced professionals, and a strong commitment to quality, we ensure every project is a success. Choose
            <b> Mileazo

            </b> — where your vision meets smart technology, and your business gets the support it needs to grow faster.
          </p>
          <Link to="/career">
            <button className="bg-blue-700 text-white px-6 py-3 rounded shadow hover:bg-blue-800 transition">
              Check for your career options
            </button>
          </Link>
        </div>

        {/* Right Image Section */}
        <div className=" lg:w-1/2 flex flex-col items-center justify-center px-8 border-2 border-blue-50 ">

          <img src="assets/client/about_banner.jpg" alt="banner img" className="hidden lg:block"/>


        </div>
      </div>

      {/* Timeline Section */}
      {/* <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 flex items-center">
         
          <button
            onClick={() => scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })}
            className="bg-white p-2 rounded-full shadow mx-2 text-blue-600 hover:bg-blue-50"
          >
            <FaArrowLeft />
          </button>

          
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

        
          <button
            onClick={() => scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })}
            className="bg-white p-2 rounded-full shadow mx-2 text-blue-600 hover:bg-blue-50"
          >
            <FaArrowRight />
          </button>
        </div>
      </div> */}


      {/* Team Section */}
      {/* <div className="container mx-auto px-4 py-16 text-center">
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
      </div> */}

      <Footer />
    </div>
  )
}

export default AboutUs
