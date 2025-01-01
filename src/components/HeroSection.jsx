import React from "react";
import img from '/web-design-2.jpg';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in">
        Hi, I&#39;m <span className="text-cyan-400">Mohammed Farsin</span>
      </h1>
      <p className="text-xl md:text-2xl mb-8 animate-fade-in delay-200">
        A passionate developer building amazing web experiences
      </p>
      <a
        href="#contact"
        className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-lg shadow-lg hover:bg-cyan-500 transition-transform duration-300 animate-bounce"
      >
        Get in Touch
      </a>
    </section>
  );
};

export default HeroSection;