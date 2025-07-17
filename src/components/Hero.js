import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Aurora from './Aurora'; // Ensure Aurora.jsx exists in the same folder
// import './Hero.css'; // Optional: for component-specific styles

const Hero = () => {
  return (
    <section className="hero-section">
      <Aurora colorStops={["#00f5c9", "#007755", "#00f5c9"]} amplitude={0.5} blend={0.4} />

      <div className="hero-content">
        <h1 className="hero-text">
          Hi, I'm{' '}
          <span className="gradient-text">
            <Typewriter
              words={['Samarth Likhar']}
              loop={Infinity}
              cursor
              cursorStyle="/"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={500}
            />
          </span>
        </h1>

        <p className="subtitle">
          Digital Marketer & Graphic Designer focused on creating stunning digital experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;
