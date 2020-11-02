import React from 'react';
import './App.css';
import DropDown from './DropDown';
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const App = () => {
  return (
    <div className="App">
     <h1>Josey Kinnaman Portfolio</h1>
     <DropDown/>
     <About />
     <Projects />
     <Contact />
    </div>
  );
}

export default App;
