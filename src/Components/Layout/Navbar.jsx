import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-scroll";
import { useNavbar } from '../Navbar Context/NavbarContextAPI';

const Navbar = () => {
    const { isMenuOpen, toggleNavbar } = useNavbar()

    return (
        <div>
            <div className={`transition-all duration-300 ease-in-out navbar container mx-auto phs:z-[9999] phs:absolute phs:top-[1%]`}>
                <div className="navbarContent w-100 md:flex md:justify-evenly phs:w-[100%] items-center p-4 phs:flex-col lg:w-full lg:flex lg:justify-between lg:bg-red">
                    <div className="logo text-2xl font-bold phs:flex phs:justify-between phs:w-[100%] phs:align-items-center">
                        <Link to="home" className='text-white phs:text-[1.5rem] lg:text-xl cursor-pointer'><h1>&lt;/&gt; Karan's Portfolio</h1></Link>
                        <button className={`text-white sm:hidden phs-block`}
                            onClick={toggleNavbar}
                        >
                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                        </button>
                    </div>
                    <div className={`links phs:flex phs:flex-row phs:space-y-4 phs:absolute phs:top-[9%] phs:left-[-1%] phs:bg-iconColor phs:p-5 phs:h-100 phs:z-[9999] phs:w-[70%] phs:h-screen  transition-all duration-500 ease-in-out phs:shadow-customInner phs:shadow-customOuter ${isMenuOpen ? "phs:left-[-100%]" : "phs:right-full"} ${isMenuOpen ? "block" : "hidden"}`}>
                        <ul className="phs:space-y-2 text-white sm:flex sm:flex-row sm:space-x-8 phs:space-y-5 lg:text-[0.7rem]">
                            <li>
                                <Link className='transition duration-300 hover:text-red-700 cursor-pointer'
                                onClick={() => {
                                    if (window.innerWidth < 540) toggleNavbar();
                                }}
                                 to="home" smooth={true} duration={500}>Home</Link>
                            </li>
                            <li>
                                <Link className={`transition duration-300 hover:text-red-700 cursor-pointer`} 
                                onClick={() => {
                                    if (window.innerWidth < 540) toggleNavbar();
                                }}
                                    to="educationandexperience">Education and Experience</Link>
                            </li>
                            <li>
                                <Link className='transition duration-300 hover:text-red-700 cursor-pointer'
                                onClick={() => {
                                    if (window.innerWidth < 540) toggleNavbar();
                                }}
                                 to="portfolio" smooth={true} duration={500}>Portfolio</Link>
                            </li>
                            <li>
                                <Link className='transition duration-300 hover:text-red-700 cursor-pointer'
                                onClick={() => {
                                    if (window.innerWidth < 540) toggleNavbar(); 
                                }}
                                 to="skills" smooth={true} duration={500}>Skills</Link>
                            </li>
                            <li>
                                <Link className='transition duration-300 hover:text-red-700 cursor-pointer'
                                onClick={() => {
                                    if (window.innerWidth < 540) toggleNavbar(); 
                                }}
                                to="contact" smooth={true} duration={500}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
