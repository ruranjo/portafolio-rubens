import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import diceProject from "../assets/portfolio/diceProject.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: diceProject,
      url_demo: "https://ruranjo.github.io/dicegame-react-updated/",
      url_code: "https://github.com/ruranjo/dicegame-react-updated",
      
    },
    {
      id: 2,
      src: reactParallax,
      url_demo: "https://www.google.co.ve/",
      url_code: "https://github.com/ruranjo/dicegame-react-updated",
    },
    {
      id: 3,
      src: navbar,
      url_demo: "https://www.google.co.ve/",
      url_code: "https://github.com/ruranjo/dicegame-react-updated",
    },
    {
      id: 4,
      src: reactSmooth,
      url_demo: "https://www.google.co.ve/",
      url_code: "https://github.com/ruranjo/dicegame-react-updated",
    },
    {
      id: 5,
      src: installNode,
      url_demo: "https://www.google.co.ve/",
      url_code: "https://github.com/ruranjo/dicegame-react-updated",
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