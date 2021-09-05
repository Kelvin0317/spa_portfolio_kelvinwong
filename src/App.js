import { useState } from 'react'
import Navbar from './pages/Navbar';
import Banner from './pages/Banner';
import AboutMe from './pages/AboutMe';
import Education from './pages/education';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Achievement from './pages/Achievement';
import Project from './pages/Project';
import ContactUs from './pages/ContactUs';
import Footer from './pages/Footer';
import Future from './pages/Future';
import { GiHamburgerMenu } from "react-icons/gi";
import logo from './components/Logo_SPA.png'
import './App.css';

function App() {
  // Declare a new state variable, which we'll call "showNav"
  const [showNav, setShowNav] = useState(false)

  //When Scroll down, the navbar fixed to top
  window.addEventListener('scroll', (event) => {
    if (window.scrollY > 100) {
      document.querySelector(".navbar").className = "navbar scroll";
    } else {
      document.querySelector(".navbar").className = "navbar";
    }
  });

  //Showing the navbar menu 
  function handleClick(e) {
    e.preventDefault();
    setShowNav(!showNav)
    document.querySelector(".sideNav").style.left = "80.45%";
}
  
  return (
    <div className="App"> 
      <Navbar show={showNav}/>
      <header className="navbar">
        <div>
          <img src={logo} alt="Logo" className="logo"/>
          <GiHamburgerMenu onClick={handleClick}/>
        </div>
      </header>
      <Banner/>
      <AboutMe/>
      <Future />
      <Skills/>
      <Achievement/>
      <Project/>
      <Work/>
      <Education/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App;
