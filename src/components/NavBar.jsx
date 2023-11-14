import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll"
export const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
          id: 1,
          link: "home",
        },
        {
          id: 2,
          link: "about",
        },
        {
          id: 3,
          link: "portfolio",
        },
        {
          id: 4,
          link: "experience",
        },
        
      ];

      const handleToggleChangeMenu = () =>{
        setNav(!nav)
      }

  return (
    <div className='flex sticky items-center justify-between bg-black h-20 w-full px-4 text-white'>
        {/*LOGO*/}
        <div className="logo ">
            <h1 className='text-3xl ml-2'>Rubens</h1>
        </div>

        {/*LINKS MENU*/}
        <ul className='hidden md:flex'>
            {
                links.map(({id, link}) =>(
                    <li 
                        key={id}
                        className='duration-200 hover:scale-105 text-gray-500 font-medium capitalize px-4 cursor-pointer'
                    >
                        <Link to={link} smooth duration={1000}>
                            {link}
                        </Link>
                    </li>
                ))
            }
        </ul>

        {/*MENU RESPONSIVE*/}
        <div  onClick={handleToggleChangeMenu} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
            {nav ? <FaTimes size={30}/>:<FaBars size={30}/>}
        </div>
        
        {/*render if nav is true*/}
        {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
