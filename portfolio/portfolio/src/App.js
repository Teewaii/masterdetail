import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import Tools from './components/tools/Tools';
import Socials from './components/socials/Socials';
import Mode from './components/btn/Mode_mob';
import Contact from './components/contact/Contact';


function App() {
  const [toggle, setToggle] = useState(true);
  const [dark_mode, setDark_mode] = useState(false)

  function toggleMenu() {
    setToggle(prev => !prev);
  }

  function DarkMode() {
    setDark_mode(prev => !prev);
  }
  return (
    <div className={dark_mode?"App dark":"App"}>
      <Nav
        toggle={toggle}
        toggleMenu={toggleMenu}
        />
         <Hero
        toggle={toggle}
        toggleMenu={toggleMenu} />
      {/* <Tools/> */}
      <About />
      <Contact/>
      <Socials />
      <Tools/>
      <Mode
            dark_mode={dark_mode}
            DarkMode={DarkMode}/>
      {/*<Projects/> */}
      {!toggle &&
        <div className="overlay bg-primary opacity-[0.8]  absolute top-0 left-0 right-0 bottom-0" onClick={toggleMenu}></div>}
    </div>
  );
}

export default App;
