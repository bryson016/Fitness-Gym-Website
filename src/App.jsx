import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Classes from './components/Classes'
import Trainers from './components/Trainers'
import Pricing from './components/Pricing'
import BMICalculator from './components/BMICalculator'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

function App() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Classes />
      <Trainers />
      <Pricing />
      <BMICalculator />
      <Benefits />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default App
