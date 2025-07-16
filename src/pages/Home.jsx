import About from '../components/About';
import Banner from '../components/Banner'
import CounterArea from '../components/CounterArea';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Services />
      {/* <CounterArea /> */}
      <Testimonial />
      <Footer />
      {/* <h1>Welcome to the Home Page</h1> */}
    </div>
  )
}

export default Home;