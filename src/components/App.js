import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css'
import Header  from '../assets/Header.png'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const items = [
  {
    title: "Skills",
    content: <About />
  },
  { title: "Work",
    content: <Projects />
  },
  {
  title: "Contact",
  content: <Contact />
},
]

const App = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    setActiveIndex(index);
  }

  const renderedItems = items.map((item,index) => {
    const active = index ===activeIndex? 'active' : '';
    return (<React.Fragment key={item.title}>
      <div
      className={`title ${active}`}
      onClick={() => onTitleClick(index)}
      >
        <i className="dropdown icon"></i>
        {item.title}
      </div>
      <div className={`content ${active}`}>
        {item.content}
      </div>
    </React.Fragment>
    );
  });
  return (
    <div className="ui container">
      <header>
          <img src={Header} alt="Josey"/>
        </header>
      <div className="ui styled accordion">
        {renderedItems}
      </div>
      {isDesktopOrLaptop && <>
        {isBigScreen}
        {isTabletOrMobile}
        </>}
        {isTabletOrMobileDevice}
        {isPortrait}
        {isRetina}
    </div>
  );
}

export default App;
