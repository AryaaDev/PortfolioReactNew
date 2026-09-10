import { useEffect } from 'react';
import runVanillaJS from './mainLogic';

// Import efek Jaring-Jaring Partikel
import ParticleNetwork from './components/ParticleNetwork';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import SoftSkills from './components/SoftSkills';
import Certificates from './components/Certificates';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      runVanillaJS();
    }, 150); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Header dan Home dibiarkan di luar agar 100% bebas dari efek partikel */}
      <Header />
      <Home />
      
      {/* Hanya komponen dari About sampai Footer yang dibungkus efek partikel */}
      <ParticleNetwork>
        <About />
        <Skills />
        <SoftSkills />
        <Certificates />
        <Portfolio />
        <Contact />
        <Footer />
      </ParticleNetwork>
    </>
  );
}

export default App;