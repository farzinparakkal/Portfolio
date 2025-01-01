import React from "react";
import { AiFillInstagram } from "react-icons/ai"; // Instagram icon
import { FaShoppingCart } from "react-icons/fa"; // E-commerce cart icon
import { BsFillBagFill } from "react-icons/bs"; // OLX-like icon (shopping bag)

const projects = [
  {
    title: "Instagram Clone",
    description:
      "Created an Instagram-like clone using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.",
    logo: <AiFillInstagram size={80} color="#E1306C" />, // Instagram React Icon
  },
  {
    title: "E-commerce Website",
    description:
      "Created an E-commerce website using Node.js, Express.js, React.js, and MongoDB.",
    logo: <FaShoppingCart size={80} color="#000" />, // E-commerce React Icon
  },
  {
    title: "Olx Clone",
    description:
      "Created an Olx-like clone using Node.js, Express.js, React.js, and MongoDB.",
    logo: <BsFillBagFill size={80} color="#FF7F00" />, // OLX-like React Icon
  },
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="container mx-auto py-20 px-6 relative bg-cover bg-center"
      style={{ backgroundImage: `url('/project.jpg')` }} // Update image path accordingly
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white animate-fade-in-down">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-110 transition-all duration-500 animate-zoom-in"
            >
              <div className="w-full h-48 flex justify-center items-center bg-white">
                {project.logo}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
