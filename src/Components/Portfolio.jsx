import React, { useEffect } from "react";
import './Styles/home.css'
import 'aos/dist/aos.css';
import AOS from 'aos';

const Portfolio = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: 100, // Offset from the top
      easing: 'ease-in-out', // Easing function
      mirror: true, // Whether animation should happen only once
    });
  }, [])

  const projects = [
    {
      title: "E-Commerce Website",
      description: "ReactJS, NodeJS",
      image: "https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=612x612&w=0&k=20&c=ROAncmFL4lbSQdU4VOhyXu-43ngzfEqHE5ZZAw5FtYk=",
      link: "https://github.com/itskaran55/SharpStore-E-Commerce",
    },
    {
      title: "Resume Maker",
      description: "Laravel",
      image: "https://www.adobe.com/in/express/create/media_14663ff759b57e0ac0662b00a7a63a5ef90292f29.png?width=750&format=png&optimize=medium",
      link: "https://github.com/itskaran55/Resume-Builder",
    },
    {
      title: "Blogging Website",
      description: ".Net Razor Page",
      image: "https://images04.nicepage.com/feature/461183/blog.jpg",
      link: "https://github.com/itskaran55/Bloging_Website",
    },
  ];

  return (
    <div id="portfolio" className="portfolio-section text-center">
      <h2 data-aos="fade-in" className="md:text-5xl md:font-bold md:text-white phs:text-3xl phs:text-white phs:font-bold my-5">
        My Projects
      </h2>
      <h3 data-aos="zoom-in" className="md:text-[1.2rem] text-red-700 phs:text-[1.1rem] phs:my-2 phs:font-bold my-5">
        "From Concept to Creation"
      </h3>
      <div data-aos="zoom-in" className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group w-80 h-96 relative perspective-1000"
          >
            {/* Card Inner */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute w-full h-full transform-style-preserve-3d transition-transform duration-700 opacity-[0.5] group-hover:scale-105 group-hover:opacity-[100]">
                {/* Front Side */}
                <div className="absolute w-full h-full bg-white rounded-lg shadow-lg flex flex-col justify-between items-center p-6 backface-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-3/4 object-cover rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mt-4">{project.title}</h3>
                  <p className="text-sm text-center mb-4">{project.description}</p>
                </div>
                {/* Back Side */}
                {/* <div className="absolute w-full h-full bg-gray-800 text-white rounded-lg shadow-lg flex flex-col justify-center items-center p-6 transform-rotate-y-180 backface-hidden">
                <h3 className="text-lg font-semibold mb-4">{project.title}</h3>
                <p className="text-sm text-center mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  View Project
                </a>
              </div> */}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
