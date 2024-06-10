import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import AOS from 'aos';
import { useEffect } from 'react';

import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <main id='main'>
        <About/>
      </main>
    </div>
  );
}

export default App;
