import React from 'react'
import './App.css'
import Header  from '../assets/Header.png'
import DropDown from './DropDown'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const App = () => {
  return (
    <div className="App">
      <header><img src={Header} alt="Fetch logo with dog and human"/></header>
     <DropDown/>
     <About />
     <Projects />
     <Contact />
    </div>
  );
}

export default App;
