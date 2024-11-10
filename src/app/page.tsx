"use client"

import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '@/components/Navbar';
import './styles/home.css';

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="hero"
      style={{
        backgroundImage: "url(/profile-png.png)",
      }}
    >
      <Navbar />

      <div className="hero-container">
        {/* Text Section */}
        <div className="hero-text-section">
          <div className="hero-heading">
            <p>I am</p>
            <p>Muhammad</p>
            <p>Huzaifa</p>
          </div>
          <p className="hero-subtitle">
            Creative Graphics Designer & SEO Executive | Aspiring Digital Strategist at GIAIC
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
