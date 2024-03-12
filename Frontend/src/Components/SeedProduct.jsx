import Card from 'react-bootstrap/Card';

const SeedProduct = () => {
    const handleDownloadCatalog = () => {
        window.open('https://agromachengineering.com/wp-content/uploads/2021/03/seeds.pdf');
    };
    const Products = [
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/fione1.jpg",
            title: "Seed Pre Cleaner"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/seed_fine.jpg",
            title: "Seed Fine Cleaner"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/seed_grader.jpg",
            title: "Seed Grader"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/gravity_seprator.jpg",
            title: "Gravity Separator"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/desotner1.jpg",
            title: "Husk Aspirator"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/magenetic.jpg",
            title: "Paddy Separator"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/treater.jpg",
            title: "Seed Treater"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/seed.jpg",
            title: "Seed Grader"
        },
    ];
    const cardHoverStyle = {
        transition: 'transform 0.3s',
    };

    const cardStyle = {
        border: 'none', // Remove border to prevent layout shift on hover
    };

    return (
        <>

            <div className="container">
                <div className="row justify-content-center align-items-center text-center py-4">
                    <h1 className="text-capitalize fs-3  pb-3">Seed Plants</h1>

                    <div className="col-md-6">
                        <img
                            src="https://agromachengineering.com/wp-content/uploads/2020/11/seed-scaled.jpg"
                            alt="Rice Solution"
                            className="img-fluid shadow-lg"
                            style={{ width: "80%", height: "auto", border: "none", borderRadius: "20px", boxShadow: "revert-layer" }} />
                    </div>
                    <div className="col-md-6 "

                        style={{ textAlign: "justify" }}>
                        <p className="fs-6 pt-5 text-justify">

                            It is a popular saying that “You reap what you sow”.
                            The Seed is where it all starts.
                            Farmers need high-quality seed to reap good quality crops, with better yield%.

                            To get high-quality seed Agromach offers Superior seed processing plants. Our seed plants have high accuracy, give high productivity, and have low operating costs.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-capitalize text-center pt-2">Our Products</h2>
                    <div className="row justify-content-center">
                        {Products.map((card, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4"

                                style={cardHoverStyle}>
                                <div className='text-center border-2 hover:border-4 p-3'>
                                    <Card border='dark' className='shadow'

                                        style={cardStyle}>
                                        <Card.Img className='mx-auto pt-1' variant="top" src={card.imageUrl} style={{ height: "100%", width: "80%" }} />
                                        <Card.Body>
                                            <Card.Title className='text-center fs-6 font-weight-bold'>{card.title}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
            <div
                style={{
                    backgroundColor: "#F8ECD6"
                }}>

                <div className='flex justify-content-center pt-4 pb-4 '

                >
                    <img src="https://agromachengineering.com/wp-content/uploads/2021/03/cat.png" alt="" />

                </div>
                <h5 className='flex justify-content-center pb-2'>
                    <button type='button' style={{ border: "none", backgroundColor: "#F8ECD6" }} onClick={handleDownloadCatalog}>
                        Download Our Catalogue
                    </button>
                </h5>
            </div>
        </>
    );
};

export default SeedProduct;
