import me from "../assets/me (2).jpg"
import resume from "../assets/resume.pdf"
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const categories = [
    {
      title: "Programming and Markup Languages",
      skills: [
        { name: "Bash", level: 3 },
        { name: "C", level: 1 },
        { name: "CSS", level: 5 },
        { name: "HTML", level: 5 },
        { name: "Java", level: 3 },
        { name: "JavaScript", level: 5 },
        { name: "Python", level: 5 },
        { name: "R", level: 3 },
        { name: "SQL", level: 2 },
      ],
    },
    {
      title: "Frameworks and Libraries",
      skills: [
        { name: "Next.js", level: 4 },
        { name: "Node.js", level: 2 },
        { name: "Pytorch", level: 1 },
        { name: "React", level: 5 },
        { name: "Tailwind CSS", level: 5 },
      ],
    },
    {
      title: "Tools and Design Platforms",
      skills: [
        { name: "Canva", level: 5 },
        { name: "Figma", level: 5 },
        { name: "Git", level: 3 },
      ],
    },
  ];
  
  const SkillRating = ({ skill, level }) => {
    const maxLevel = 5;
    return (
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm text-darkBrown">{skill}</span>
        <div className="flex space-x-1">
          {[...Array(maxLevel)].map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full border border-darkBrown shadow-lg ${
                index < level ? "bg-brown" : "bg-white"
              }`}
            ></div>
          ))}
        </div>
      </div>
    );
  };
  

function About () {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect(); // Stop observing after the first animation
            }
          },
          { threshold: 0.1 }
        );
    
        if (elementRef.current) {
          observer.observe(elementRef.current);
        }
    
        return () => observer.disconnect();
      }, []);

    return (
        <motion.div
        ref={elementRef}
        initial={{ opacity: 0, y: 50 }} // Starting state
        animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animation when visible
        transition={{ duration: 0.5 }} // Animation duration
        className="flex lg:flex-row font-raleway lg:mt-[50px] justify-between flex-col-reverse items-center max-w-[90%] mx-auto lg:space-x-20">
            <div className="flex lg:max-w-[40%]">
                <div className="flex flex-col lg:text-left text-center lg:items-start items-center">
                    <div className="text-brown lg:text-lg text-base mb-3 lg:mt-5 mt-5">website developer, digital marketer, product manager and AI enthusiast</div>
                    <div className="text-darkBrown font-semibold lg:text-4xl text-3xl mb-6 justify-self-start text-left">about Renee Kim</div>
                    <div className="flex lg:flex-col md:flex-row flex-col text-brown lg:text-xl text-lg lg:space-y-3 sm:space-y-2 justify-between mb-5" >
                        <div className="lg:min-w-[100%] md:max-w-[45%] w-[100%]">Renee is a current third year student at Queen’s University majoring in Computer Science with a focus in AI. She has a passion for project management, web development and design. She also enjoys digital marketing as well as keeping up with the latest in Artificial Intelligence.</div>
                        <div className="lg:min-w-[100%] md:max-w-[45%] w-[100%]">In her free time, she enjoys dancing, figure skating, skiing, anime, video games, digital marketing, designing websites and reading!</div>
                    </div>
                    <a href={resume} download className="underline drop-shadow-sm text-darkBrown hover:text-brown">download her resume</a>
                </div>
            </div>
            <motion.div
            ref={elementRef}
            initial={{ opacity: 0, y: 50 }} // Starting state
            animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animation when visible
            transition={{ duration: 0.8 }} // Animation duration
            className="flex flex-col justify-end bg-white w-full h-full p-12 shadow-xl lg:w-[60%] lg:max-w-4xl lg:mt-0 m-5 lg:mr-0">
                <img
                src={me}
                className="lg:w-[50%] md:w-[60%] w-[90%] aspect-square rounded-3xl shadow-xl self-center"
                alt="Renee"
                ></img>
                <h1 className="text-darkBrown font-semibold lg:text-3xl text-2xl mt-10">
                her proficiencies
                </h1>
                <div className="flex lg:flex-row flex-col justify-between mt-5 lg:space-x-8">
                {categories.map((category, index) => (
                    <div key={index} className="lg:max-w-[30%]">
                    <div className="text-brown font-medium lg:text-lg text-base mb-2">
                        {category.title.toLowerCase()}
                    </div>
                    {category.skills.map((skill, idx) => (
                        <SkillRating key={idx} skill={skill.name} level={skill.level} />
                    ))}
                    </div>
                ))}
                </div>
            </motion.div>
        </motion.div>
    )
}
    
export default About;
    