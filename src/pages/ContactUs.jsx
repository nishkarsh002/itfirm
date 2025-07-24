import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");



    try {
      const res = await fetch("https://itfirm-8uc6.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong.");
    }
  };


  return (
    <div>
      <Navbar />

      <div className="relative h-[400px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://html.themexriver.com/it-firm/images/background/7.jpg')" }}>
        {/* <div className="absolute inset-0 opacity-75" ></div> */}
        <h1 className="text-5xl font-bold text-white relative z-10">Contact <span className='text-blue-400'>Us</span></h1>
      </div>

      <section className="bg-white py-16 px-4 md:px-20 text-gray-800">
        <div className="mb-12 text-center">
          <p className="text-blue-600 font-semibold">Contact Us</p>
          <h2 className="text-4xl font-bold mt-2 leading-snug">
            Grow Your Business With <br />
            <span className="text-blue-600">Our Expertise</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-600">
            The perfect blend of mature processes, flexible delivery models,
            effective project management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side - Contact Info */}
          <div className="space-y-6 lg:flex flex-col justify-center items-center">
            {/* Office Address */}
            <div className="bg-gray-100 p-6 rounded shadow-sm flex gap-4 lg:w-3/4">
              <div className="text-blue-600 text-3xl">
                <img src="https://html.themexriver.com/it-firm/images/icons/contact-1.png" alt="first" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Office address</h4>
                <p>
                  Digital Agency Network <br />
                  20 Eastbourne Terrace <br />
                  London W2 6LG
                </p>
              </div>
            </div>

            {/* Telephone */}
            <div className="bg-gray-100 p-6 rounded shadow-sm flex gap-4 lg:w-3/4">
              <div className="text-blue-600 text-3xl">
                <img src="	https://html.themexriver.com/it-firm/images/icons/contact-2.png" alt="second" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Telephone number</h4>
                <p>(408) 389-5470</p>
                <p>(408) 456-5470</p>
              </div>
            </div>

            {/* Mail */}
            <div className="bg-gray-100 p-6 rounded shadow-sm flex gap-4 lg:w-3/4">
              <div className="text-blue-600 text-3xl">
                <img src="https://html.themexriver.com/it-firm/images/icons/contact-3.png" alt="third" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Mail address</h4>
                <p>me@gmail.com</p>
                <p>me@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-blue-50 p-8 rounded shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-sm">Name (required)</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name*"
                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-blue-500"
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm">Email address (required)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-blue-500"
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm">Phone (optional)</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-blue-500"
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm">Subject (required)</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="font-semibold text-sm">Your message</label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your text here..."
                  className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded hover:opacity-90 transition"
              >
                Send Message
              </button>
              {status && <p className="mt-4 text-sm text-green-700">{status}</p>}
            </form>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  )
}

export default ContactUs