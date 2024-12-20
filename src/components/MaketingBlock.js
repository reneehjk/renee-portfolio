import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function MarketingBlock({ image, title, description, brandImage, instagramLink, tiktokLink, linkedInLink }) {
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
        transition={{ duration: 0.8 }} // Animation duration
        className="flex lg:flex-row flex-col bg-white p-6 shadow-md space-x-4 items-center font-raleway justify-between max-w-7xl">
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="h-[250px] aspect-square rounded-full object-cover shadow-md bg-[#FFFFFF] self-center"
            />
            
            {/* Content Section */}
            <div className="flex flex-col lg:border-l-[1px] lg:border-brown lg:pl-5 space-y-2">
                {/* Title */}
                <div className="lg:text-4xl text-3xl font-semibold text-darkBrown">{title}</div>
                
                {/* Description */}
                <div className="text-brown lg:text-xl text-lg">{description}</div>
                
                {/* Tech Stack */}
                <div className="text-darkBrown lg:text-xl text-lg lg:pt-10">
                    <span className="font-semibold">brand image:</span> {brandImage}
                </div>
                
                {/* Buttons */}
                
                <div className="flex-grow flex flex-col justify-end">
                    <div className="flex md:flex-row flex-col justify-between mt-3 md:space-y-0 space-y-2">
                        <button className="px-8 py-1 lg:text-xl text-lg font-semibold bg-[#FFFFFF] text-brown border border-brown rounded-2xl shadow-md">
                            <a href={instagramLink} target="_blank" rel="noopener noreferrer">instagram</a>
                        </button>
                        <button className="px-12 py-1 lg:text-xl text-lg font-semibold bg-[#FFFFFF] text-brown border border-brown rounded-2xl shadow-md">
                            <a href={tiktokLink} target="_blank" rel="noopener noreferrer">tiktok</a>
                        </button>
                        <button className="px-8 py-1 lg:text-xl text-lg font-semibold bg-[#FFFFFF] text-brown border border-brown rounded-2xl shadow-md">
                            <a href={linkedInLink} target="_blank" rel="noopener noreferrer">linkedin</a>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default MarketingBlock;
