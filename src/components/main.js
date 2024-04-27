import React from 'react';
import Me from '../assets/me.jpg';
import MyCV from '../assets/SUDHITI KHAR.pdf'
import '../index.css';


const MyComponent = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = MyCV;
        link.download = 'sudhiti_khar.pdf'; // Specify the filename for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    
  return (
    <div className=" bg-[#222831] h-svh flex">
      
      <div className="w-1/2 bg-[#222831] ml-10 flex flex-col justify-center">
        <h1 className='font-poppins text-5xl text-[#EEEEEE] px-20  text-left'>Hi.<span className='wave'>👋🏻</span><br/>
        <span className='text-7xl block mt-5 '> I'm Sudhiti Khar</span>
        </h1>
        <h2 className='text-4xl ml-20 mt-5  text-[#EEEEEE]'>I'm a <span className='text-[#00ADB5]'>Web Developer</span>.</h2>
        <button onClick={handleDownload} className='border text-white mt-8 ml-20 p-2 font-semibold text-lg bg-[#00ADB5] w-52 rounded-full hover:text-[#00ADB5] hover:bg-[#EEEEEE]'>Download Resume</button>
      </div>
      <div className="w-1/2 bg-[#222831] mt-0 flex items-center justify-center">
        <img src={Me} className=' h-96  w-auto  rounded-full'></img>
      </div>

    </div>
  );
};

export default MyComponent;
