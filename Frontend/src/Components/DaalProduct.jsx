import Card from 'react-bootstrap/Card';

const DaalProduct = () => {
    const handleDownloadCatalog = () => {
        window.open('https://agromachengineering.com/wp-content/uploads/2021/03/dall-milling.pdf');
    };
    const Products = [
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/vibro_seperator.jpg",
            title: "Vibro Separator"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/aspiration.jpg",
            title: "Aspiration Channel"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/energy.jpg",
            title: "Emery Roll"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/grain.jpg",
            title: "Grain Mill (HZ. Chakki)"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/fakta.jpg",
            title: "Fatka Machine"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/duck.jpg",
            title: "Aspiration Channel"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/blower.jpg",
            title: "Centrifugal Blower"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/cyclone.jpg",
            title: "Pneumatic Cyclone"
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
                <h1 className="text-capitalize fs-3 text-center pt-2">Daal Plants</h1>
                <div className="row justify-content-center align-items-center text-center py-4">

                    <div className="col-md-6">
                        <img
                            src="https://agromachengineering.com/wp-content/uploads/2020/11/dalls.jpg"
                            alt="Rice Solution"
                            className="img-fluid shadow-lg"
                            style={{ width: "80%", height: "auto", border: "none", borderRadius: "20px", boxShadow: "revert-layer" }}
                        />
                    </div>
                    <div className="col-md-6 "

                        style={{ textAlign: "justify" }}>
                        <p className="fs-6 pt-5 text-justify">
                            Agromach Dall milling machines are designed to provide higher yield and profitability. Our innovative processing solutions minimize in-process waste, reduce manpower, and maintain hygienic standards in Dall processing. Our company offers customized project solutions from the concept stage to the production stage, keeping the costs at a minimum, and assuring on-time delivery.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-capitalize text-center pt-2">Our Products</h2>
                    <div className="row justify-content-center">
                        {Products.map((card, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4"
                                style={cardHoverStyle}
                            >
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
                    <div>

                    </div>
                </div>
            </div>
            <div
                style={{
                    backgroundColor: "#F8ECD6"
                }}>

                <div className='flex justify-content-center pt-4 pb-4 '  >
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

export default DaalProduct;
