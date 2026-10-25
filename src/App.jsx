
import { useEffect } from 'react';
import runVanillaJS from './mainLogic';

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
    runVanillaJS();
  }, []);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <SoftSkills />
      <Certificates />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
