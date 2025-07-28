
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CareersSection from '../components/CareersSection';

const Career = () => {


  return (
    <div>
      <Navbar />


      <div className="relative h-[400px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('../assets/test/all_banner.jpg')" }}>
        {/* <div className="absolute inset-0 opacity-75" ></div> */}
        <h1 className="text-5xl font-bold text-white relative z-10"> Career</h1>
      </div>

      <CareersSection />


      <Footer />
    </div>
  )
}

export default Career