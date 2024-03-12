
const ScrollToTopButton = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button onClick={handleScrollToTop} className="fixed bottom-5 right-5 lg:right-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full shadow-md transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Scroll To Top
        </button>
    );
};

export default ScrollToTopButton;
