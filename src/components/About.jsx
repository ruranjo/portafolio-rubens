import React from 'react'

const About = () => {
  return (
    
        <div
          name="about"
          className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
        >
          <div className="max-w-screen-lg p-10 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                About
              </p>
            </div>
    
            <p className="text-lg mt-0 sm:text-lg">
            Hello! I'm RUBENS, passionate about data science and engineering, who enjoys working on both
            web development and data science. I study computer science and electronics at the University,
            in the Táchira region, Venezuela, and I am also interested in data science.
            </p>
            
            <br />

            <p className=" mt-0 sm:text-lg">
            I have focused on learning languages experientially and self-taught, with a special emphasis
            on English, and I now have a strong grasp of it. However, I also enjoy studying other languages.
            </p>

            <br />
    
            <p className="text-lg sm:text-lg">
            My love for math and science is limitless, and I'm excited to be able to apply my knowledge and
            skills to many exciting projects in the world of data science, web development, and more. stay tuned
            </p>
          </div>
        </div>
      );
  
}

export default About