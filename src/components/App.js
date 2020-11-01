import React from 'react';
import './App.css';
import DropDown from './DropDown';
import Links from './Links';
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const App = () => {
  return (
    <div className="App">
     <h1>Josey Kinnaman Portfolio</h1>
     <DropDown/>
     <Links />
     <About />
     <Projects />
     <Contact />
    </div>
  );
}

export default App;
