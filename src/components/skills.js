import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faPython} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const SkillsPage = () => {
  return (
    <div className="bg-white p-10">
      <h1 className="text-4xl font-bold text-[#393E46] text-center mb-10">My Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-7 ">
        <div className="text-center">
          <FontAwesomeIcon icon={faHtml5} className="text-4xl text-[#00ADB5]" />
          <p className="mt-2 font-semibold">HTML</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faCss3} className="text-4xl text-[#00ADB5]" />
          <p className="mt-2 font-semibold">CSS</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faJs} className="text-4xl text-[#00ADB5]" />
          <p className="mt-2 font-semibold">JavaScript</p>
        </div>
        <div className="text-center">
        <FontAwesomeIcon icon={faDatabase} className="text-4xl text-[#00ADB5]" />
          <p className="mt-2 font-semibold">Mongo DB</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faReact} className="text-4xl text-[#00ADB5]" />
          <p className="mt-2 font-semibold">React</p>
        </div>
        <div className="text-center">
        <FontAwesomeIcon icon={faPython} className="text-4xl text-[#00ADB5]" />
          <p className="mt-2 font-semibold">Python</p>
        </div>
        <div className="text-center">
        <FontAwesomeIcon icon={faDatabase} className="text-4xl text-[#00ADB5]" />
          <p className="mt-2 font-semibold">SQL</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
