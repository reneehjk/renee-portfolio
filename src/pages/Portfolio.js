import React from "react";
import PortfolioBlock from "../components/PortfolioBlock";

const portfolioItems = [
    {
        name: "sonder.",
        description: "My first project from HackHer! A journal allowing users to write thoughts, save entries, and use stickers.",
        techStack: "JavaScript, HTML, CSS",
        codeLink: "https://github.com/reneehjk/Sonder.",
        projectLink: "https://sonderjournal.netlify.app/",
        category: ["wd"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcFSyVAkNBues1ViAT3Av4ENIDmnljIBFbg&s"
    },
    {
        name: "To-Do List",
        description: "Created a to-do list that has adding, removing, and editing functionality as my first ever React.js personal project.",
        techStack: "React.js, CSS",
        codeLink: "https://github.com/reneehjk/Todo-List",
        projectLink: "https://reneehjk.github.io/Todo-List/",
        category: ["wd"],
        image: "https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png"
    },
    {
        name: "Calorie Calculator",
        description: "A personal project to test arithmetics in JavaScript and calculate the BMR of a person based on 4 variables.",
        techStack: "React.js, CSS",
        codeLink: "https://github.com/reneehjk/calorie-calculator",
        projectLink: "https://reneehjk.github.io/calorie-calculator/",
        category: ["wd"],
        image: "https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png"
    },
    {
        name: "Lovelace Logs",
        description: "A resource to empower women in STEM. Created during EmpowHER hacks and received an honorable mention.",
        techStack: "React.js, Tailwind CSS, Canva",
        codeLink: "https://github.com/reneehjk/lovelace-logs",
        projectLink: "https://reneehjk.github.io/lovelace-logs/",
        category: ["wd", "dp"],
        image: "https://reneehjk.github.io/lovelace-logs/static/media/logo.5cb0d3deb9694aa1625e.jpg"
    },
    {
        name: "RoomieMatch",
        description: "Project created at WaffleHacks to help people connect with new roommates. Only frontend work had been done.",
        techStack: "React.js, CSS, Canva",
        codeLink: "https://github.com/reneehjk/roomie-match",
        projectLink: "https://reneehjk.github.io/roomie-match/",
        category: ["wd", "dp"],
        image: "https://reneehjk.github.io/roomie-match/static/media/logo.a110b5d9162f30e60f0c.png"
    },
    {
        name: "QWIC Poster Design",
        description: "Women in Computing club poster design based on the brand guide.",
        techStack: "Figma, Canva",
        projectLink: "https://drive.google.com/drive/folders/1XKbrIU1mAztfQi3j8nnC93BnLpXzrcNY?usp=drive_link",
        category: ["dp"],
        image: "https://media.licdn.com/dms/image/v2/C4E0BAQETOZzSv4FHKQ/company-logo_100_100/company-logo_100_100/0/1630643444335/queens_qwic_logo?e=1741219200&v=beta&t=r02O99QTiqlDddKr3ZMQ_v-mj4GG7K155cmwfgeeues"
    },
    {
        name: "QFTB Poster Design",
        description: "Men’s mental health club poster design based on the color palette.",
        techStack: "Canva",
        projectLink: "https://drive.google.com/drive/folders/1jBekW87ZvTu3gva71oJQbnqeTqFhwKEW?usp=drive_link",
        category: ["dp"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDVN79W6IEWCYRdBxaiWPZIGEm9YDit-fBQ&s"
    },
    {
        name: "QWIC Website",
        description: "Created a new website from scratch for the Queen's Women in Computing club at Queen's University.",
        techStack: "Next.js, Tailwind CSS",
        codeLink: "https://github.com/queens-wic/qwic",
        projectLink: "https://qwic.org/",
        category: ["wd", "pm"],
        image: "https://media.licdn.com/dms/image/v2/C4E0BAQETOZzSv4FHKQ/company-logo_200_200/company-logo_200_200/0/1630643444335/queens_qwic_logo?e=2147483647&v=beta&t=8KqLjiFP_eG6G49hvTzhoUj4OEUgQwR-FFWJtiBbFL4"
    },
    {
        name: "Helping Brains Heal",
        description: "A website created for the HBH foundation that donates care packages to concussion survivors.",
        techStack: "React.js, Tailwind CSS, Sanity, Figma",
        codeLink: "https://github.com/reneehjk/helping-brains-heal",
        projectLink: "https://www.helpingbrainsheal.ca/",
        category: ["wd", "pm", "dp"],
        image: "https://www.helpingbrainsheal.ca/assets/helpingBrainsHeal-hZiIvZ4A.svg"
    },
    
];

const reversedPortfolioItems = [...portfolioItems].reverse();


function Portfolio({ title, data }) {
    return (
        <div className="space-y-10 max-w-[90%] mx-auto lg:space-x-0">
            <h1 className="text-brown lg:text-4xl text-3xl font-raleway font-medium mb-4 mt-[50px]">{title}</h1>
            {data.map((item, index) => (
                <PortfolioBlock
                    key={index}
                    image={item.image}
                    title={item.name}
                    description={item.description}
                    techStack={item.techStack}
                    codeLink={item.codeLink}
                    projectLink={item.projectLink}
                    category={item.category}
                />
            ))}
        </div>
    );
}

function AllPortfolio () {
    return <Portfolio title="portfolio" data={reversedPortfolioItems} />
}


function DesPortfolio() {
    const designItems = reversedPortfolioItems.filter(item => item.category.includes("dp"));
    return <Portfolio title="design project" data={designItems} />;
}

function ManPortfolio() {
    const managementItems = reversedPortfolioItems.filter(item => item.category.includes("pm"));
    return <Portfolio title="project management" data={managementItems} />;
}

function WebPortfolio() {
    const webDevItems = reversedPortfolioItems.filter(item => item.category.includes("wd"));
    return <Portfolio title="web development" data={webDevItems} />;
}

export { DesPortfolio, ManPortfolio, WebPortfolio, AllPortfolio };
