import MarketingBlock from "../components/MaketingBlock";

function Marketing () {
    return (
        <div className="lg:h-[75vh] mt-[50px] max-w-[90%] mx-auto lg:space-x-0">
            <h1 className="text-brown lg:text-4xl text-3xl font-raleway font-medium my-[50px]">marketing</h1>
            <MarketingBlock 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGFOfznCjxcFb93cLMlXZiP9UK9JmBitho2Q&s"
                title="Queen's Women in Computing"
                description="A resource at Queen’s University for Women in Computing. Increased engagement by over 400% on social media platforms."
                brandImage="Feminine, Supportive, Strong, Accepting"
                instagramLink="https://www.instagram.com/queenswic/"
                tiktokLink="https://www.tiktok.com/@queenswic"
                linkedInLink="https://www.linkedin.com/company/queens-qwic"
            />
        </div>
    )
}

export default Marketing;