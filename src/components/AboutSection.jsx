import React from "react";
import about from '/about-2.jpg';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative container mx-auto py-20 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${about})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 px-20">
        <div
          className="md:w-1/2 transform hover:scale-105 transition-transform duration-700 animate-fade-in-up"
        >
          <img
            src="/profile.jpeg"
            alt="About Me"
            className="w-96 h-96 rounded-lg shadow-lg object-cover"
          />
        </div>
        <div
          className="md:w-1/2 text-white animate-fade-in-down transition-opacity duration-1000"
        >
          <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
            About Me
          </h2>
          <p className="text-lg leading-relaxed">
            I&#39;m a full-stack web developer with a passion for creating visually stunning
            and user-friendly applications. I specialize in front-end and back-end development,
            leveraging modern tools and frameworks to deliver high-quality solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
