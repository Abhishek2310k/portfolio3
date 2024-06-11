import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import AOS from 'aos';
import { useEffect } from 'react';
import PureCounter from '@srexi/purecounterjs';

import 'aos/dist/aos.css';
import Facts from './components/Facts/Facts';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';

function App() {

  useEffect(() => {
    AOS.init();
    new PureCounter();
  }, [])

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <main id='main'>
        <About/>
        <Facts/>
        <Skills/>
        <Portfolio/>
      </main>
    </div>
  );
}

export default App;
