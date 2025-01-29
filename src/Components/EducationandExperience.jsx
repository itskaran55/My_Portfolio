import React, { useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos';

const EducationandExperience = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: 100, // Offset from the top
      easing: 'ease-in-out', // Easing function
      mirror: true, // Whether animation should happen only once
    });
  }, [])
  const timelineData = [
    {
      date: '2022-2025',
      title: 'Bachelor of Computer Application (BCA)',
      location: 'LJ University, Ahemdabad',
      description: `As a final-year BCA student at LJ University, I specialize in front-end development with expertise in HTML, CSS, JavaScript, and React. Currently, I'm expanding my skills by learning back-end technologies to become a full-stack developer. Additionally, I have a keen interest in AI and its applications in web development.`,
      icon: '🎓',
    },
    {
      date: 'August - December 2024',
      title: 'Internship at Cincologic',
      location: 'Ahmedabad, India',
      description: 'During my internship at Cincologic, I contributed to the development of a website using a .NET Web API backend for efficient data handling. On the frontend, I worked with React and Next.js, incorporating Tailwind CSS for a responsive and modern design, enhancing user experience.',
      icon: '💼',
    },
    {
      date: 'June - August 2024',
      title: 'Internship at Sharp Career',
      location: 'Remote',
      description: 'During my internship at SharpCareer, I developed an e-commerce platform using React for the front end and Node.js for the back end. This experience enhanced my skills in full-stack development and collaborative project execution.',
      icon: '💼',
    },
  ];

  return (
    <div id='educationandexperience' className='md:my-[150px] '>
      <div className="titleandData text-center">
        <div className="titles">
          <div data-aos="fade-in" className="mainTitle">
            <h1 className='md:text-5xl md:font-bold md:text-white phs:text-3xl phs:text-white phs:font-bold'>My Resume</h1>
          </div>
          <div data-aos="zoom-in" className="subtitle md:my-5">
            <h3 className='md:text-[1.2rem] text-red-700 phs:text-[1.1rem] phs:my-2 phs:font-bold'>"From Classroom to Code"</h3>
          </div>
        </div>
      </div>
      <div data-aos="fade-in" className="myTimeline">
        <VerticalTimeline>
          {timelineData.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              date={<span className='text-red-200 font-bold phs:text-red-700 lg:text-red-700'>{event.date}</span>}
              icon={<span className='md:flex md:justify-center md:my-3 md:text-2xl phs:flex phs:justify-center phs:my-2 lg:flex lg:justify-center lg:my-1.5 lg:text-xl'>{event.icon}</span>}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">{event.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{event.location}</h4>
              <p>{event.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default EducationandExperience
