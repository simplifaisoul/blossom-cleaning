import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import ServiceArea from './components/ServiceArea'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <ServiceArea />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
