import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  const phoneNumber = "+919924069118"; 
  const message = "Hello, Karan Rajpara"; 

  // URL encode the message
  const encodedMessage = encodeURIComponent(message); //For Special Character
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  return (
    <div className="phs:flex md:flex md:justify-center md:items-center md:p-[100px] phs:p-[40px] bg-[#1A1C1D]">
      <div className="logoLinks phs:flex w-full md:flex md:justify-center md:align-items-center text-center text-white flex-col lg:flex lg:justify-center lg:items-center">
        <div className="logo">
          <Link to="home" className='md:flex md:justify-center md:items-center text-white md:text-[2rem] font-bold phs:text-[1.7rem] lg:text-xl cursor-pointer block w-full'><h1>&lt;/&gt; Karan's Portfolio</h1></Link>
        </div>
        <div className="links flex justify-center align-items-center w-full my-10">
          <ul className='flex phs:flex-col phs:gap-2 phs:text-[1.2rem] justify-between align-items-center w-1/2 lg:flex lg:gap-3'>
            <li >
              <a href="https://github.com/itskaran55" target='_main'>GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/karan-rajpara-058533245/" target='_main'>Linkedin</a>
            </li>
            <li>
              <a href="https://x.com/rajpara_karan" target='_main'>Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/_karannn.115/" target='_main'>Instagram</a>
            </li>
            <li>
              <a href={whatsappLink} target='_main'>WhatsApp</a>
            </li>
          </ul>
        </div>
        <div className="phs:text-[0.9rem] copyright w-full phs:gap-1 flex flex-col block">
          <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved.</p>
          <p>Designed and Developed by Karan Rajpara</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
