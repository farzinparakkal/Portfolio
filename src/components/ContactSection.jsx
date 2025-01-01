import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-900 py-20 animate-fade-in-up">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 animate-slide-in-left">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-300 mb-8 animate-fade-in-down">
          "Your potential is endless. Let's connect and build something great together."
        </p>
        <div className="flex justify-center space-x-8">
          {/* GitHub Link */}
          <a
            href="https://github.com/farzinparakkal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 text-lg font-medium hover:text-cyan-500 transition-colors duration-300 animate-bounce"
          >
            <i className="fab fa-github text-2xl"></i> GitHub
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/mohammed-farsin-300a482b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 text-lg font-medium hover:text-cyan-500 transition-colors duration-300 animate-bounce"
          >
            <i className="fab fa-linkedin text-2xl"></i> LinkedIn
          </a>

          {/* Email Link */}
          <a
            href="mailto:farzinparakkal135@gmail.com"
            className="text-cyan-400 text-lg font-medium hover:text-cyan-500 transition-colors duration-300 animate-bounce"
          >
            <i className="fas fa-envelope text-2xl"></i> Email
          </a>

          {/* Resume Link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 text-lg font-medium hover:text-cyan-500 transition-colors duration-300 animate-bounce"
          >
            <i className="fas fa-file-alt text-2xl"></i> Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
