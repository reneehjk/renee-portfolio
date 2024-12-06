function PortfolioBlock({ image, title, description, techStack, codeLink, projectLink, category }) {
    const getCategoryColor = (cat) => {
        switch (cat) {
            case "wd":
                return "bg-darkBeige text-white";
            case "pm":
                return "bg-brown text-white";
            case "dp":
                return "bg-darkBrown text-white";
            default:
                return "bg-white";
        }
    };

    return (
        <div className="flex lg:flex-row flex-col bg-white p-6 shadow-md items-center font-raleway max-w-7xl">
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="h-[250px] aspect-square object-cover rounded-xl shadow-md bg-[#FFFFFF] self-center"
            />
            <div className="flex lg:flex-row flex-col lg:justify-between w-full">
                {/* Content Section */}
                <div className="flex flex-col space-y-2 lg:border-l-[1px] lg:border-brown lg:ml-5 lg:pl-5 lg:w-2/3 pt-3 lg:pt-0">
                    {/* Title */}
                    <div className="text-4xl font-semibold text-darkBrown">{title}</div>
                    
                    {/* Description */}
                    <div className="text-brown text-xl">{description}</div>
                    
                    {/* Tech Stack */}
                    <div className="text-darkBrown text-xl lg:pt-10 pt-5">
                        <span className="font-semibold">tech stack:</span> {techStack}
                    </div>
                    
                    {/* Buttons */}
                    
                    <div className="flex-grow flex flex-col lg:justify-end justify-between">
                        <div className="flex lg:justify-between lg:flex-row md:justify-between md:flex-row flex-col lg:space-y-0 space-y-2 mt-3">
                            <button className="px-6 py-1 text-xl font-semibold bg-[#FFFFFF] text-brown border border-brown rounded-2xl shadow-md">
                                <a href={projectLink} target="_blank" rel="noopener noreferrer">view project</a>
                            </button>
                            {codeLink && (
                                <button className="px-6 py-1 text-xl font-semibold bg-[#FFFFFF] text-brown border border-brown rounded-2xl shadow-md">
                                    <a href={codeLink} target="_blank" rel="noopener noreferrer">view code</a>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                
                {/* Category Buttons */}
                <div className="flex flex-col space-y-3 lg:self-start">
                    <div className="text-xl text-brown border-b-[1px] border-brown self-center mt-5 pb-1">category</div>
                    <div className="flex flex-col space-y-3 self-center">
                        {category.map((cat, index) => (
                            <button
                                key={index}
                                className={`px-10 py-1 rounded-3xl text-md shadow-lg ${getCategoryColor(cat)}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioBlock;
