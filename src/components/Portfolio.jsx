import React from "react";
import rubensgame from "../assets/portfolio/rubensgames.png";
import udemyImg from "../assets/portfolio/udemyClone.png";
import diceProject from "../assets/portfolio/diceProject.jpg";
import contactlist from "../assets/portfolio/contactlist.jpg";
import nikestore from "../assets/portfolio/m1.png";
import nikelanding from "../assets/portfolio/m2.png";
import realwebstate from "../assets/portfolio/m3.png";



const Portfolio = () => {
  const portfolios = [
    
    {
      id: 1,
      src: nikestore,
      url_demo: "https://ruranjo.github.io/nike-cart-shopping/",
      url_code: "https://github.com/ruranjo/nike-cart-shopping",
      badges: ["react", "redux", "tailwind"],
    },
    {
      id: 2,
      src: udemyImg,
      url_demo: "https://ruranjo.github.io/udemy-clone/",
      url_code: "https://github.com/ruranjo/udemy-clone",
      badges: ["styled-components", "react"],
    },
    {
      id: 3,
      src: rubensgame,
      url_demo: "https://ruranjo.github.io/games-rubens/",
      url_code: "https://github.com/ruranjo/games-rubens",
      badges: ["sass","react", "typescript"],
    },
    {
      id: 4,
      src: realwebstate,
      url_demo: "https://ruranjo.github.io/real-state-react/",
      url_code: "https://github.com/ruranjo/real-state-react",
      badges: ["MUI","react"],
    },
    {
      id: 5,
      src: diceProject,
      url_demo: "https://ruranjo.github.io/dicegame-react-updated/",
      url_code: "https://github.com/ruranjo/dicegame-react-updated",
      badges: ["styled-components", "react"],
    },
    {
      id: 6,
      src: contactlist,
      url_demo: "https://ruranjo.github.io/lista-contactos-react/",
      url_code: "https://github.com/ruranjo/lista-contactos-react",
      badges: ["tailwind", "react", "typescript"],
    },
    {
      id: 7,
      src: nikelanding,
      url_demo: "https://ruranjo.github.io/brandpage-react/",
      url_code: "https://github.com/ruranjo/brandpage-react",
      badges: ["styled-components", "react"],
    },
    
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,url_code,url_demo, badges }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={url_demo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={url_code}>Code</a>
                </button>
              </div>
              <div className="flex items-center justify-center">
                {badges.map((ticket, id) =>{
                  return (
                    <div className='m-2 text-white  px-3 py-1 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 '>
                      <span>{ticket}</span>
                    </div>
                  )
                })

                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;