import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Materials from './components/Materials'
import Process from './components/Process'
import ServiceArea from './components/ServiceArea'
import Trust from './components/Trust'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink pb-[calc(5rem+env(safe-area-inset-bottom))] sm:pb-0">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Materials />
        <Process />
        <ServiceArea />
        <Trust />
        <Gallery />
        <Contact />
        <Testimonial />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
