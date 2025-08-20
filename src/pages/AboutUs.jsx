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
          <Link to="/services">
            <button className="bg-blue-700 text-white px-6 py-3 rounded shadow hover:bg-blue-800 transition">
              Check our services
            </button>
          </Link>
        </div>

        {/* Right Image Section */}
        <div className=" lg:w-1/2 flex flex-col items-center justify-center px-8 border-2 border-blue-50 ">

          <img src="assets/client/about_banner.jpg" alt="banner img" className="hidden lg:block"/>


        </div>
      </div>


      <Footer />
    </div>
  )
}

export default AboutUs
