import React, { useEffect, useState } from "react";
import rubensgame from "../assets/portfolio/rubensgames.png";
import udemyImg from "../assets/portfolio/udemyClone.png";
import diceProject from "../assets/portfolio/diceProject.jpg";
import contactlist from "../assets/portfolio/contactlist.jpg";
import nikestore from "../assets/portfolio/m1.png";
import nikelanding from "../assets/portfolio/m2.png";
import realwebstate from "../assets/portfolio/m3.png";
import tag from "../assets/portfolio/tag-vue.png";
import flag from "../assets/portfolio/flag-vue.png";
import rickandmorty from "../assets/portfolio/rickandmorty.png";
import loginpage from "../assets/portfolio/logindesing.png";
import agecalculator from "../assets/portfolio/agecalculator.png";
import sneakers from "../assets/portfolio/sneaker.png";
import ademasclone from "../assets/portfolio/ademasclone.png";
import noti from "../assets/portfolio/noti.png";



const Portfolio = () => {
  const tagFilterList = ["all","vue", "tailwind", "typescript", "api consumer","react", "redux",'pages',"styled-components"
  ,'context',"sass","MUI", ,'no-responsive','design',"clone"];

  const [filterlist,setFilterlist] = useState(['all']);

  const portfolios = [
    {
      id: 0,
      src: flag,
      url_demo: "https://ruranjo.github.io/flags-country-vue/",
      url_code: "https://github.com/ruranjo/flags-country-vue",
      badges: ["vue", "tailwind", "typescript", 'api consumer'],
    },
    {
      id: 1,
      src: nikestore,
      url_demo: "https://ruranjo.github.io/nike-cart-shopping/",
      url_code: "https://github.com/ruranjo/nike-cart-shopping",
      badges: ["react", "redux", "tailwind",'pages'],
    },
    {
      id: 2,
      src: udemyImg,
      url_demo: "https://ruranjo.github.io/udemy-clone/",
      url_code: "https://github.com/ruranjo/udemy-clone",
      badges: ["styled-components", "react",'context','pages'],
    },
    {
      id: 3,
      src: rubensgame,
      url_demo: "https://ruranjo.github.io/games-rubens/",
      url_code: "https://github.com/ruranjo/games-rubens",
      badges: ["sass","react", "typescript"],
    },
    {
      id: 9,
      src: rickandmorty,
      url_demo: "https://ruranjo.github.io/rick-morty-web-mui-react.github.io/",
      url_code: "https://github.com/ruranjo/rick-morty-web-mui-react.github.io",
      badges: ["MUI", "react", 'context','pages','no-responsive','typescript'],
    },
    {
      id: 10,
      src: loginpage,
      url_demo: "https://ruranjo.github.io/newletter-desing-ui-react/",
      url_code: "https://github.com/ruranjo/newletter-desing-ui-react",
      badges: ["sass", "react",'typescript','design'],
    },
    {
      id: 11,
      src: agecalculator,
      url_demo: "https://ruranjo.github.io/vue-age-calculator-ui/",
      url_code: "https://github.com/ruranjo/vue-age-calculator-ui",
      badges: ["vue", 'typescript','design'],
    },
    {
      id: 12,
      src: sneakers,
      url_demo: "https://ruranjo.github.io/producto-page-react/",
      url_code: "https://github.com/ruranjo/producto-page-react",
      badges: ["sass", "react", "typescript", "no-responsive"],
    },
    {
      id: 13,
      src: ademasclone,
      url_demo: "https://ruranjo.github.io/ademas-clone-react/",
      url_code: "https://github.com/ruranjo/ademas-clone-react",
      badges: ["clone", "react", "sass", "typescript","no-responsive"],
    },
    {
      id: 14,
      src: noti,
      url_demo: "https://ruranjo.github.io/notification-page-react/",
      url_code: "https://github.com/ruranjo/notification-page-react",
      badges: ["sass", "react","design","typescript","no-responsive"],
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
      badges: ["tailwind", "react", "typescript",'api consumer'],
    },
    {
      id: 7,
      src: tag,
      url_demo: "https://ruranjo.github.io/tag-component-vue/",
      url_code: "https://github.com/ruranjo/tag-component-vue",
      badges: ["vue"],
    },
    {
      id: 8,
      src: nikelanding,
      url_demo: "https://ruranjo.github.io/brandpage-react/",
      url_code: "https://github.com/ruranjo/brandpage-react",
      badges: ["styled-components", "react"],
    }
    
  ];

  const handleChangeFilter = (tag) =>{
    const auxList  = tag === 'all' ? ['all'] : [ ...filterlist];

    if(!(tag === 'all')){

    
      if(auxList.includes(tag)){
        auxList.splice(auxList.indexOf(tag), 1);
      }else{
        auxList.push(tag);
      }
    }

      setFilterlist(auxList)
  }

  const filter = () =>{
    if(filterlist.includes('all') && filterlist.length > 1){
      filterlist.splice(filterlist.indexOf('all'), 1);
    }

    if(filterlist.length === 0){
      filterlist.push('all');
    }

    if(!filterlist.includes('all')){
      return portfolios.filter(project => !project.badges.every((x)=> !filterlist.includes(x)))
    }
    return portfolios;
  }

  const getActive = (tag) =>{
    
      if(filterlist.includes(tag)){
        return true;
      }

      return false;
  }


  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full pt-10 text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        
        <div className=" flex flex-wrap my-10">
          {
            tagFilterList.map((tag, index)=>{
              return (
                <div 
                  key={index}
                  onClick={()=> handleChangeFilter(tag)}
                  className={`m-2 group text-white w-fit px-4 py-2 my-2 flex items-center rounded-md bg-gradient-to-r ${getActive(tag) ? "from-cyan-500 to-blue-500" :"from-gray-400 to-gray-700 "} cursor-pointer `}
                >
                  {tag}
                </div>
              )
            })
          }
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8  sm:px-0 " >
          {filter().map(({ id, src,url_code,url_demo, badges }) => (
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
              <div className="flex items-center justify-center flex-wrap">
                {badges.map((ticket, id) =>{
                  return (
                    <div key={id} className='m-2 text-white  px-3 py-1 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 '>
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