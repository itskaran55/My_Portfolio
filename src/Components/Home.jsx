import React from 'react'
import Object from './Sphere/Object'
import './Styles/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
    return (
        <div className='home relative'>
            <div className="homeContent flex justify-evenly items-center p-4 phs:flex phs:flex-col-reverse ">
                <div className="homeInfo phs:w-full w-1/2 text-white flex flex-col phs:my-5">
                    <div className="introText phs:flex phs:items-center phs:flex-col">
                        <h3 className='text-2xl font-bold'>Hello, <span className='text-red-700'>I'm</span></h3>
                        <h1 className='text-5xl font-bold phs:text-4xl phs:flex phs:items-center phs:my-2'>Karan Rajpara</h1>
                        <h2 className='my-2 font-bold text-2xl my-3 phs:text-xl phs:text-center'>Web Developer and AI Enthusiast</h2>
                    </div>
                    <div className='tagline font-bold text-red-300 phs:text-center'>
                        <p>&lt;/ From idea to execution—transforming challenges into code-driven solutions &gt;</p>
                    </div>
                    <div className="briefIntro my-3 phs:flex phs:items-center phs:text-center">
                        <p>A dedicated Software Engineer Intern and Full Stack Developer, driven by a passion for creating impactful web solutions and continuously exploring innovative technologies.</p>
                    </div>

                </div>
                <div className="karanimg max-w-[600px] max-h-[600px] phs:max-h-[400px] relative flex-shrink-0">
                    <img src="/karanIMG-removebg.png"
                        className="imgRem max-w-[550px] max-h-[550px] phs:max-h-[350px] object-cover z-50 relative"
                        alt="Dynamic Description">
                    </img>
                    <div className="Object3D absolute inset-0 z-0">
                        <Object />
                    </div>
                </div>
            </div>
            <div className="resumeBtn text-[1.2em] md:left-[6.5%] md:bottom-[15%] md:absolute phs:relative phs:flex phs:items-center phs:justify-center">
                <a href='#' class="px-6 py-2 rounded-md bg-red-600 text-white font-semibold transition duration-300 hover:bg-red-700 hover:text-gray-200">My Resume</a>
            </div>
            <div className='findMeSection text-[1.2em] left-[6.5%] bottom-[-15%] md:absolute phs:flex phs:items-center phs:justify-center phs:flex-col phs:my-5'>
                <div className="findMeText text-bold text-white">
                    <p>FIND ME ON</p>
                </div>
                <div className="findMeLinks my-3 flex">
                    <div className="github" style={{marginRight: "18px"}}>
                        <a href='https://github.com/itskaran55' target='_blank'><FontAwesomeIcon icon={faGithub} className='text-[1.5em] bg-iconColor p-2 shadow-customInner shadow-customOuter rounded-lg'  style={{ color: '#fff' }} /></a>
                    </div>
                    <div className="linkedin mx-5">
                        <a href='https://www.linkedin.com/in/karan-rajpara-058533245/' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className='text-[1.5em] bg-iconColor p-2 shadow-customInner shadow-customOuter rounded-lg'  style={{ color: '#fff' }} /></a>
                    </div>
                    <div className="twitter mx-5">
                        <a href='https://x.com/rajpara_karan' target='_blank'><FontAwesomeIcon icon={faXTwitter} className='text-[1.5em] bg-iconColor p-2 shadow-customInner shadow-customOuter rounded-lg'  style={{ color: '#fff' }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
