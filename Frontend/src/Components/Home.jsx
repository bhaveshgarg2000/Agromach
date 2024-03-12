import { Carousel } from 'react-bootstrap';
import ImagesComponent from './Images';
import AboutComponent from './AboutComponent';

const images = [
    { src: 'https://agromachengineering.com/wp-content/uploads/2021/03/banner4.jpg' },
    { src: 'https://agromachengineering.com/wp-content/uploads/2021/03/banner2.jpg' },
    { src: 'https://agromachengineering.com/wp-content/uploads/2021/03/mb-rice.jpg' },
    { src: 'https://agromachengineering.com/wp-content/uploads/2021/03/banner1.jpg' },
];

const Home = () => {
    return (
        <div>
            <div className='pt-3'>
                <Carousel >
                    {images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={image.src}
                                alt={image.alt || ''}
                                style={{ maxHeight: '100vh', objectFit: 'cover' }}
                            />
                            <Carousel.Caption style={{ bottom: '5%', color: 'white', textAlign: 'center' }}>
                                {/* Add caption content here if needed */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <div className="d-flex justify-content-center align-items-center text-center pt-5">
                <ImagesComponent />
            </div>
            <div className="pt-5">
                <AboutComponent />
            </div>
        </div>
    );
}

export default Home;
