import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import diceProject from "../assets/portfolio/diceProject.jpg";
import contactlist from "../assets/portfolio/contactlist.jpg";
import nikestore from "../assets/portfolio/m1.png";
import nikelanding from "../assets/portfolio/m2.png";
import realwebstate from "../assets/portfolio/m3.png";

/*



 */

const Portfolio = () => {
  const portfolios = [
    
    {
      id: 1,
      src: nikestore,
      url_demo: "https://ruranjo.github.io/nike-cart-shopping/",
      url_code: "https://github.com/ruranjo/nike-cart-shopping",
    },
    {
      id: 2,
      src: realwebstate,
      url_demo: "https://ruranjo.github.io/real-state-react/",
      url_code: "https://github.com/ruranjo/real-state-react",
    },
    {
      id: 3,
      src: nikelanding,
      url_demo: "https://ruranjo.github.io/brandpage-react/",
      url_code: "https://github.com/ruranjo/brandpage-react",
    },
    {
      id: 4,
      src: diceProject,
      url_demo: "https://ruranjo.github.io/dicegame-react-updated/",
      url_code: "https://github.com/ruranjo/dicegame-react-updated",
      
    },
    {
      id: 5,
      src: contactlist,
      url_demo: "https://ruranjo.github.io/lista-contactos-react/",
      url_code: "https://github.com/ruranjo/lista-contactos-react",
    },
    {
      id: 6,
      src: reactWeather,
      url_demo: "https://www.google.co.ve/",
      url_code: "https://github.com/ruranjo/dicegame-react-updated",
    },
    {
      id: 7,
      src: arrayDestruct,
      url_demo: "https://www.google.co.ve/",
      url_code: "https://github.com/ruranjo/dicegame-react-updated",
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
          {portfolios.map(({ id, src,url_code,url_demo }) => (
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;