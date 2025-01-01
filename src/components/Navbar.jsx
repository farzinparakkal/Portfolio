import React from "react";

const Navbar = () => {
  const handleNavigation = (id) => {
    const element = document.getElementById(id);
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  };

  return (
      <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-white font-bold text-xl"></div>
          <ul className="flex space-x-6 ml-auto">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.toLowerCase());
                  }}
                  className="text-gray-400 hover:text-cyan-400"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
