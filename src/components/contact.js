import React from 'react';
import Me from '../assets/me2.jpg';
const ContactMePage = () => {
    return (
      <div className="flex flex-col bg-[#00ADB5] h-screen">
        <div className="text-center mt-8">
          <h1 className="text-4xl text-[#EEEEEE] font-bold underline">Let's Connect</h1>
        </div>
        <div className="flex-1 flex flex-row">
          <div className="flex-1 flex justify-center items-center">
            <img src={Me} alt="My Photo" className="rounded-full h-99 w-80 justify-center" />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <form className="p-10 bg-[#393E46] rounded-lg w-3/5">
             
              <input type="text" placeholder="Name" className="w-full p-2 mb-4 border border-gray-300 rounded-md" />
              <input type="email" placeholder="Email" className="w-full p-2 mb-4 border border-gray-300 rounded-md" />
              <input type="phone" placeholder="Mobile Number" className="w-full p-2 mb-4 border border-gray-300 rounded-md" />
              <input type="text" placeholder="Your LinkedIn " className="w-full p-2 mb-4 border border-gray-300 rounded-md" />

              <textarea placeholder="Message" className="w-full p-2 mb-4 border border-gray-300 rounded-md resize-none" rows="4"></textarea>
              <button type="submit" className="w-full py-2 bg-[#EEEEEE] text-[#222831] rounded-md font-semibold ">Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactMePage;
  