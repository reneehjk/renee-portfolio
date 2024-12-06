function MarketingBlock({ image, title, description, brandImage, instagramLink, tiktokLink, linkedInLink }) {
    return (
        <div className="flex lg:flex-row flex-col bg-white p-6 shadow-md space-x-4 items-center font-raleway justify-between max-w-7xl">
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="h-[250px] aspect-square rounded-full object-contain shadow-md bg-[#FFFFFF] self-center"
            />
            
            {/* Content Section */}
            <div className="flex flex-col lg:border-l-[1px] lg:border-brown lg:pl-5 space-y-2">
                {/* Title */}
                <div className="text-4xl font-semibold text-darkBrown">{title}</div>
                
                {/* Description */}
                <div className="text-brown text-xl">{description}</div>
                
                {/* Tech Stack */}
                <div className="text-darkBrown text-xl pt-10">
                    <span className="font-semibold">brand image:</span> {brandImage}
                </div>
                
                {/* Buttons */}
                
                <div className="flex-grow flex flex-col justify-end">
                    <div className="flex md:flex-row flex-col justify-between mt-3 md:space-y-0 space-y-2">
                        <button className="px-8 py-1 text-xl font-semibold bg-[#FFFFFF] text-brown border border-brown rounded-2xl shadow-md">
                            <a href={instagramLink} target="_blank" rel="noopener noreferrer">instagram</a>
                        </button>
                        <button className="px-12 py-1 text-xl font-semibold bg-[#FFFFFF] text-brown border border-brown rounded-2xl shadow-md">
                            <a href={tiktokLink} target="_blank" rel="noopener noreferrer">tiktok</a>
                        </button>
                        <button className="px-8 py-1 text-xl font-semibold bg-[#FFFFFF] text-brown border border-brown rounded-2xl shadow-md">
                            <a href={linkedInLink} target="_blank" rel="noopener noreferrer">linkedin</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarketingBlock;
