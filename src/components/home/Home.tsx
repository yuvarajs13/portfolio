import React from 'react';
import "./home.css";
import Data from './Data';
import Social from './social';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="home__wrapper">
        <Social />
        <div className="home__content">
          <Data />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
