import React, { useState } from 'react';

import Home from './Components/Home/home';
import Navbar from './Components/Navbar/navbar';
import About from './Components/About/about';
import Footer from './Components/Footer/footer';
import Projects from './Components/Projects/projects';
import Skills from './Components/Skills/skills';

import './index.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className='App'>
      <Navbar isPopupOpen={isPopupOpen}/>
      <Home />
      <About />
      <Skills />
      <Projects setIsPopupOpen={setIsPopupOpen}/>
      <Footer />
    </div>
  
  );
};

export default App;
