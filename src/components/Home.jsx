import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/icon1.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className='h-full w-full pt-10 bg-gradient-to-b from-black via-black to-gray-800'>
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8 md:flex-row">
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-2xl sm:text-5xl font-bold text-white">
                I'm a Frontend | Backend | Developer
              </h2>
              <p className="text-gray-500 py-5 max-w-md">
                I have experience building and desgining software.
                Currently, I love to work on web application using technologies like
                React, style-component, MUI | Material-ui, Next JS, Tailwind, Djando, Express and More.

              </p>
              <div className='flex'>
                <div>
                  <Link
                    to="portfolio"
                    smooth
                    duration={500}
                    className="m-2 group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                  >
                    Portfolio
                    <span className="group-hover:rotate-90 duration-300">
                      <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                    </span>
                  </Link>
                </div>
                <a 
                    href="https://github.com/ruranjo/resume/tree/main"
                    className="flex justify-between items-center w-full text-white h-full"
                    target="_blank"
                    rel="noreferrer"
                    >
                <div
                  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-700 to-blue-700 cursor-pointer"
                >
                  Curriculum 
                  
                  
                  <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                  </span>
                </div>
                </a>
              </div>
            </div>
            <div>
              <img
                src={HeroImage}
                alt="my profile"
                className="rounded-2xl mx-auto w-2/3 md:w-full"
              />
            </div>
        </div>
    </div>
  )
}

export default Home

