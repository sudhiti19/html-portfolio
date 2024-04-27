// Navbar.js
import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSquareInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
const Navbar = () => {
    const handleRedirect = () => {
        window.location.href = 'https://github.com/sudhiti19';
      };
      
      const handlelinkedin = () => {
        window.location.href = 'https://www.linkedin.com/in/sudhiti-khar-2343b6229/';
      };
    
  return (
    <nav className="bg-[#222831] p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className=' text-[#EEEEEE] text-3xl font-bold '>My Portfolio.</div>
        <div className="flex space-x-6">
          <h2 className="poppins-medium text-[#EEEEEE] text-xl hover:underline transform hover:text-[#00ADB5] cursor-pointer">home</h2>
          <h2 className="poppins-medium text-[#EEEEEE] text-xl hover:underline transform hover:text-[#00ADB5] cursor-pointer">about</h2>
          
          <h2 className="poppins-medium  text-[#EEEEEE] text-xl hover:underline transform hover:text-[#00ADB5] cursor-pointer">contact</h2>
          <button onClick={handlelinkedin} ><FontAwesomeIcon icon={faLinkedin} size='xl' className='text-white' /></button>
          <button onClick={handleRedirect}><FontAwesomeIcon icon={faGithub} size='xl' className='text-white' /></button>
          <button><FontAwesomeIcon icon={faSquareXTwitter} size='xl' className='text-white' /></button>
          <button><FontAwesomeIcon icon={faSquareInstagram} size='xl' className='text-white' /></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
