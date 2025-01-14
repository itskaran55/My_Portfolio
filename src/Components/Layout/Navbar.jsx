import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link } from "react-scroll";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(true);
   
    return (
        <div>
            <div className="navbar container mx-auto phs:z-[9999] phs:absolute phs:top-[1%]">
                <div className="navbarContent flex justify-evenly phs:w-[100%] items-center p-4 phs:flex-col ">
                    <div className="logo text-2xl font-bold phs:flex phs:justify-between phs:w-[100%] phs:align-items-center">
                        <a href="" className='text-white phs:text-[1.5rem]'><h1>&lt;/&gt; Karan's Portfolio</h1></a>
                        <button className={`text-white sm:hidden phs-block`}
                        onClick={() => setMenuOpen(!isMenuOpen)}
                        >
                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                        </button>
                    </div>
                    <div className={`links phs:flex phs:flex-row phs:space-y-4 phs:absolute phs:top-[9%] phs:left-[-1%] phs:bg-iconColor phs:p-5 phs:h-100 phs:z-[9999] phs:w-[70%] phs:h-screen  transition-all duration-500 ease-in-out phs:shadow-customInner phs:shadow-customOuter ${isMenuOpen ? "phs:left-[-100%]" : "phs:right-full"}`}>
                        <ul className="phs:space-y-2 text-white sm:flex sm:flex-row sm:space-x-8 phs:space-y-5">
                            <li>
                                <Link className='transition duration-300 hover:text-red-700' href="">Home</Link>
                            </li>
                            <li>
                                <Link className='transition duration-300 hover:text-red-700' href="">About me</Link>
                            </li>
                            <li>
                                <Link className='transition duration-300 hover:text-red-700' href="">Services and Skills</Link>
                            </li>
                            <li>
                                <Link className='transition duration-300 hover:text-red-700' href="">Education and Experience</Link>
                            </li>
                            <li>
                                <Link className='transition duration-300 hover:text-red-700' href="">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
