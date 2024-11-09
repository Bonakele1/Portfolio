import React from "react";
import { FaLinkedinIn, FaGithub,  FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home" className="relative w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 pt-12 flex justify-center items-center">
        <div>
          <h1 className="py-4">
            Hello There, I'm <span className="text-stone-500">I am Bonakele Mdletshe</span>
          </h1>
          <h1 className="py-2">A Data Scientist ...</h1>
          <p className="py-4 text-red-700 max-w-[70%] m-auto">
            
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/bonakele-mdletshe-37a665224/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/Bonakele1"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="Bonasiwe@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaEnvelope />
                
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;