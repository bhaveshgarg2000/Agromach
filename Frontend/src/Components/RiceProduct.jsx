import Card from 'react-bootstrap/Card';

const Product = () => {
    const handleDownloadCatalog = () => {
        window.open('https://agromachengineering.com/wp-content/uploads/2021/03/rice-mill.pdf');
    };

    const Products = [
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/paddy_cleaner1.jpg",
            title: "Paddy Cleaner"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/fione1.jpg",
            title: "Rice Cleaner"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/desotner1.jpg",
            title: "Destoner"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/destoner.jpg",
            title: "Vibro Pneumatic Sheller"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/husk-aspirator.jpg",
            title: "Husk Aspirator"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/paddy-separator1.jpg",
            title: "Paddy Separator"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/whitener-1.jpg",
            title: "Whitener"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/pneumatic.jpg",
            title: "Pneumatic Slide Gate"
        },
    ];

    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center text-center py-4">
                    <h1 className="text-capitalize fs-3  pb-3">Rice Milling Solutions</h1>
                    <div className="col-md-6">
                        <img
                            src="https://agromachengineering.com/wp-content/uploads/2020/11/rice_solution.jpg"
                            alt="Product Solution"
                            className="img-fluid shadow-lg"
                            style={{ width: "80%", height: "auto", borderRadius: "20px", boxShadow: "revert-layer" }}
                        />
                    </div>
                    <div className="col-md-6" style={{ textAlign: "justify" }}>
                        <p className="fs-6 pt-5 text-justify">
                            Agromach machines are designed to provide higher yield and profitability. Our innovative processing solutions minimize in-process waste, reduce manpower, and maintain hygienic standards in food processing. We offer customized project solutions from the concept stage to the production stage, keeping the costs at a minimum and assuring on-time delivery.
                        </p>
                    </div>

                </div>

                <div>
                    <h2 className="text-capitalize text-center pt-2">Our Products</h2>
                    <div className="row justify-content-center">
                        {Products.map((product, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
                                <div className='text-center border-2 hover:border-4 p-3'>
                                    <Card className='shadow-lg'
                                        style={{
                                            border: 'none'
                                        }}>
                                        <Card.Img className='mx-auto pt-1' variant="top" src={product.imageUrl} style={{ height: "100%", width: "80%" }} />
                                        <Card.Body>
                                            <Card.Title className='text-center fs-6 font-weight-bold'>{product.title}</Card.Title>
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

                <div className='flex justify-content-center pt-4 pb-4 '>
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

export default Product;
