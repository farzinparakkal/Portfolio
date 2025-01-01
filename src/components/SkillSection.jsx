import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiC, SiExpress, SiTailwindcss, SiMongodb } from "react-icons/si";
import skill from "/skill.jpg";

const skillIcons = [
  { name: "C", icon: <SiC size={48} className="mx-auto text-red-500 animate-bounce-slow" /> },
  { name: "HTML", icon: <FaHtml5 size={48} className="mx-auto text-orange-500 animate-bounce-slow" /> },
  { name: "CSS", icon: <FaCss3Alt size={48} className="mx-auto text-blue-500 animate-bounce-slow" /> },
  { name: "JavaScript", icon: <FaJs size={48} className="mx-auto text-yellow-500 animate-bounce-slow" /> },
  { name: "Node.js", icon: <FaNodeJs size={48} className="mx-auto text-green-500 animate-bounce-slow" /> },
  { name: "Express", icon: <SiExpress size={48} className="mx-auto text-gray-500 animate-bounce-slow" /> },
  { name: "React", icon: <FaReact size={48} className="mx-auto text-blue-400 animate-bounce-slow hover:animate-spin" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={48} className="mx-auto text-teal-400 animate-bounce-slow" /> },
  { name: "MongoDB", icon: <SiMongodb size={48} className="mx-auto text-green-600 animate-bounce-slow" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={48} className="mx-auto text-purple-500 animate-bounce-slow" /> },
];

const SkillSection = () => {
  return (
    <section id="skills" className="relative py-20" style={{ backgroundImage: `url(${skill})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto text-center bg-black bg-opacity-50 p-10 rounded-lg">
        <h2 className="text-5xl font-extrabold text-white mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillIcons.map(({ name, icon }, idx) => (
            <div
              key={idx}
              className="bg-white text-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in"
            >
              {icon}
              <span className="block text-2xl font-bold mt-4">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
