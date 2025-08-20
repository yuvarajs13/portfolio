import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import About from './components/about/about';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
      <Home />
      </main>
      <Skills />
      <Projects />
      <About />
      <Footer />
    </>
  );
};

export default App;
