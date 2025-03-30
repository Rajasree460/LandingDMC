import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
// import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Strength from './components/Strength'
import About from './components/About'
import Courses from './components/Courses'
import Prog from './components/Prog'
import Team from './components/Team';
import News from './components/News';
import Gallery from './components/Gallery';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Banner />
      <Strength />
      <About />
      <Courses />
      <Prog />
      <Team />
      <News />
      <Gallery />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}

export default App
