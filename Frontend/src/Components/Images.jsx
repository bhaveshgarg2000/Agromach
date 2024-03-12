import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const imgs = {
    image1: 'https://agromachengineering.com/wp-content/uploads/2021/03/awd12-1.jpg',
    image2: 'https://agromachengineering.com/wp-content/uploads/2021/03/awd13-1.jpg',
    image3: 'https://agromachengineering.com/wp-content/uploads/2021/03/awd14-1.jpg',
    image4: 'https://agromachengineering.com/wp-content/uploads/2021/02/awards1.jpg',
    image5: 'https://agromachengineering.com/wp-content/uploads/2021/02/awards4.jpg',
    image6: 'https://agromachengineering.com/wp-content/uploads/2021/03/awd14-1.jpg',
    image7: 'https://agromachengineering.com/wp-content/uploads/2021/02/awards6.jpg',
    image8: 'https://agromachengineering.com/wp-content/uploads/2021/03/awd.jpg',
    image9: 'https://agromachengineering.com/wp-content/uploads/2021/03/awd1.jpg',
};

const Images = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === Object.keys(imgs).length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change image every 3 seconds

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? Object.keys(imgs).length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex === Object.keys(imgs).length - 1 ? 0 : prevIndex + 1));
    };

    const visibleImages = [];
    const imagesPerRow = screenWidth >= 992 ? 4 : 2; // 992px is the Bootstrap "lg" breakpoint

    for (let i = 0; i < imagesPerRow; i++) {
        visibleImages.push(Object.keys(imgs)[(currentIndex + i) % Object.keys(imgs).length]);
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-screen-xl mx-auto px-4">
                <h2 className="text-2xl font-bold ">Awards & Recognitions</h2>
                <hr style={{
                    margin: "auto",
                    border: "0px",
                    height: "3px",
                    width: "55%",
                    backgroundImage: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
                }} />
                <div className="d-flex justify-content-center pt-2">
                    {screenWidth >= 992 && (
                        <Button variant="white" className="border-none bg-white" onClick={handlePrev} style={{
                            border: "0px"
                        }}>&lt;</Button>
                    )}
                    <div className="d-flex flex-wrap justify-content-center">
                        {visibleImages.map(key => (
                            <div className="m-2" key={key}>
                                <Card
                                    border='dark'
                                    style={{ width: '18rem', border: '2px solid black', borderRadius: "10px" }}>
                                    <Card.Img
                                        style={{ borderRadius: "10px" }}
                                        variant="top" src={imgs[key]} />
                                </Card>
                            </div>
                        ))}
                    </div>
                    {screenWidth >= 992 && (
                        <Button variant="white"
                            style={{
                                border: "0px"
                            }} className="border-none bg-white" onClick={handleNext} >&gt;</Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Images;
