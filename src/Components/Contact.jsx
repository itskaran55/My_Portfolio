import React, { useRef, useState } from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [formData,setformData] = useState({
        user_name : '',
        from_name : '',
        message : ''
    })
    const form = useRef();

    const handleChange = (e) => {
        setformData({...formData,[e.target.name]:e.target.value})
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v74j7me', 'template_rxnnnoh', form.current, 'xhCV3rhrL8U66UMHI')
            .then((result) => {
                toast.success('Email Sent Successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                setformData({user_name : '', from_name : '', message : ''})
            })
            .catch((error) => {
                toast.error('Failed to send Email..!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            });

        // e.target.reset()
    }
    return (
        <section id='contact' className='flex justify-center items-center text-center flex-col'>
            <div className="titles">
                <div data-aos="fade-in" className="mainTitle">
                    <h2 className="md:text-5xl md:font-bold md:text-white phs:text-3xl phs:text-white phs:font-bold my-5">
                        Get in Touch
                    </h2>
                </div>
                <div data-aos="zoom-in" className="subTitle">
                    <h3 className="md:text-[1.2rem] text-red-700 phs:text-[1.1rem] phs:my-2 phs:font-bold my-5">
                        "Let’s Turn Ideas Into Reality"
                    </h3>
                </div>
            </div>
            <div className="contactFrame flex items-center justify-center gap-[150px] w-full">
                <div data-aos="fade-in" className="firstFrame flex flex-col items-center text-center gap-5 phs:hidden">
                    <div className="rounded-[8px] h-[150px] w-[150px] githubBox bg-customGray h-100 w-100 shadow-contactBox flex justify-center items-center bg-[#282F38]">
                        <a href="https://github.com/itskaran55" target='_blank'>
                            <div className="gitIcon">
                                <FontAwesomeIcon className='text-3xl text-[#ffffff]' icon={faGithub}></FontAwesomeIcon>
                            </div>
                            <div className="gitTitle">
                                <h3 className='text-red-700 font-bold'>GitHub</h3>
                            </div>
                        </a>
                    </div>
                    <div className="rounded-[8px] h-[150px] w-[150px] mailBox bg-customGray shadow-contactBox flex justify-center items-center bg-[#282F38]">
                        <a href="mailto:karanrajpara505@gmail.com" target='_blank'>
                            <div className="gitIcon">
                                <FontAwesomeIcon className='text-3xl text-[#ffffff]' icon={faEnvelope}></FontAwesomeIcon>
                            </div>
                            <div className="mailTitle">
                                <h3 className='text-red-700 font-bold'>Email</h3>
                            </div>
                        </a>
                    </div>
                </div>
                <div data-aos="fade-in" className="p-10 secondFrame h-[300px] w-[700px] bg-[#282F38] shadow-contactBox rounded-[8px] phs:w-[400px] lg:w-[450px] phs:h-[370px] lg:h-[350px]">
                    <form ref={form} className='text-white flex flex-col gap-3 justify-center items-center'>
                        <div className="nameandmail flex gap-2 phs:flex-col lg:flex-col">
                            <input className='rounded-[8px] p-2 bg-[#181618] w-[320px]' type="text" name='user_name' value={formData.user_name} onChange={handleChange} placeholder='Enter Your Name' />
                            <input className='rounded-[8px] p-2 bg-[#181618] w-[320px]' type="email" value={formData.from_name} onChange={handleChange} name='from_name' placeholder='Enter Your Email' />
                        </div>
                        <div className="message">
                            {/* <input className='rounded-[8px] w-100 p-2 bg-[#181618] h-[140px] w-[650px]' type="text" placeholder='Enter Your Message' /> */}

                            <textarea
                                className="rounded-[8px] p-2 bg-[#181618] h-[140px] w-[650px] resize-none text-start phs:w-[320px] lg:w-[320px]"
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter Your Message"
                            ></textarea>
                        </div>
                        <div className="submit rounded-[8px] h-10 w-[250px] phs:w-[200px] bg-[#181618] relative flex items-center justify-evenly">
                            <div className="btn ">
                                <button onClick={sendEmail} className='w-[250px] phs:w-[200px] phs:absolute phs:right-[8%] phs:top-[3%] p-2'>Send Message</button>
                            </div>
                            <div className="icon absolute right-[10%] phs:right-[8%]">
                                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            //transition={Bounce}
            />
        </section>
    )
}

export default Contact
