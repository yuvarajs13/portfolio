import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
};

export default App;
