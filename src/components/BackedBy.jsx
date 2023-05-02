import React from 'react'
import Microsoft from "../assets/microsoft.png";
import PedalStart from "../assets/pedalstart.png";
import { ImLinkedin2, ImFacebook, ImTwitter } from "react-icons/im";
import { FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const BackedBy = () => {
  return (
    <div className="absolute top-[790px] z-10 px-4 mx-4 flex flex-col">
        <h1 className="text-4xl text-white uppercase font-bold px-2 lg:text-3xl">
          Backed By
        </h1>
        <div className="relative flex items-center left-[-5%] md:left-[-4%]">
          <img src={Microsoft} alt="/" className="w-[300px] h-[240px] md:w-[250px] md:h-[200px] sm:w-[200px] sm:h-[160px] lg:w-[270px] lg:h-[220px]" />
          <img src={PedalStart} alt="/" className='md:w-[150px] lg:w-[180px]'/>
        </div>

        {/* social Icons */}
        <div className="flex text-white w-full max-w-[590px] items-center md:w-[560px] sm:w-[400px] lg:w-[460px]">
          <div className="w-16 h-16 bg-blue-600 flex items-center justify-center rounded-[50%] border-[none] mr-6 md:w-12 md:h-12 sm:w-10 sm:h-10 sm:mr-2 md:mr-2 lg:mr-2">
            <ImLinkedin2 className=" pb-1 text-4xl md:text-3xl sm:text-2xl" />
          </div>
          <div className="w-16 h-16 bg-blue-300 flex items-center justify-center rounded-[50%] border-[none] mr-6 md:w-12 md:h-12 sm:w-10 sm:h-10 sm:mr-2 md:mr-2 lg:mr-2">
            <FaDiscord className="text-4xl md:text-3xl  sm:text-2xl" />
          </div>
          <div className="w-16 h-16 bg-blue-700 flex items-center justify-center rounded-[50%] border-[none] mr-6 md:w-12 md:h-12 sm:w-10 sm:h-10 sm:mr-2 md:mr-2 lg:mr-2">
            <ImFacebook className="text-4xl md:text-3xl  sm:text-2xl" />
          </div>
          <div className="w-16 h-16 bg-gray-500 flex items-center justify-center rounded-[50%] border-[none] mr-6 md:w-12 md:h-12 sm:w-10 sm:h-10 sm:mr-2 md:mr-2 lg:mr-2">
            <SiGmail className="text-4xl md:text-3xl  sm:text-2xl" />
          </div>
          <div className="w-16 h-16 bg-blue-400 flex items-center justify-center rounded-[50%] border-[none] mr-6 md:w-12 md:h-12 sm:w-10 sm:h-10 sm:mr-2 md:mr-2 lg:mr-2">
            <ImTwitter className="text-4xl md:text-3xl  sm:text-2xl" />
          </div>
        </div>
      </div>
  )
}

export default BackedBy
