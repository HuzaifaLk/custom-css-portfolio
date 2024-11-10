import React from 'react';
import Navbar from '@/components/Navbar';
import '../styles/about.css';

function About() {
  return (
    <div id="about">
      {/* Navbar */}
      <Navbar />

      {/* Heading */}
      <h2>About Me</h2>

      {/* Personal Info Section */}
      <div className="section">
        <h3>Personal Info:</h3>
        <p>
          My name is Muhammad Huzaifa, a student at GIAIC. I am also a certified Graphics Designer & SEO Executive at Marketing Shore. I am passionate about technology, especially in AI.
        </p>
      </div>

      {/* Education Section */}
      <div className="section">
        <h3>Education:</h3>
        <p>
          I am pursuing a degree in Computer Science at D.J Sindh Govt. Science College, which I will be completing in a few months.
        </p>
      </div>
    </div>
  );
}

export default About;
