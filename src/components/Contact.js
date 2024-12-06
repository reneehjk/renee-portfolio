const Contact = () => {
    return (
        <footer className="mt-10 bg-gradient-to-r from-lightBeige to-white text-lightBlue py-6 lg:px-20 md:px-20 px-4 text-center shadow-lg border-t-2 border-beige space-y-10">
            <div className="flex self-start text-brown font-raleway text-3xl font-medium">contact info</div>
            <div className="flex flex-row justify-between lg:mx-20 font-raleway text-darkBrown h-full items-end">
                <a href="https://devpost.com/reneehjkim11" target="_blank" rel="noopener noreferrer" className="drop-shadow-lg hover:text-brown">
                    Devpost
                </a>
                <a href="https://www.linkedin.com/in/reneehjkim" target="_blank" rel="noopener noreferrer" className="drop-shadow-lg hover:text-brown">
                    LinkedIn
                </a>
                <a href="https://github.com/reneehjk" target="_blank" rel="noopener noreferrer" className="drop-shadow-lg hover:text-brown">
                    GitHub
                </a>
                <a href="mailto:reneehjkim11@gmail.com" className="drop-shadow-lg hover:text-brown">
                    Email
                </a>
            </div>
        </footer>
    );
};

export default Contact;