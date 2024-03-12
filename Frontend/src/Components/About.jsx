import Card from 'react-bootstrap/Card';
const About = () => {
    const cardsData = [
        { title: "100% Money Back Guarantee", text: "We are proud to be the only company in our segment which gives 100% money back guarantee.", imageUrl: "https://agromachengineering.com/wp-content/uploads/2020/08/cost-benifits02.png" },
        { title: "Cost Benefit", text: "Maximizing profit while minimizing expenses leads to optimal cost-benefit outcomes in business.", imageUrl: "https://agromachengineering.com/wp-content/uploads/2020/08/cost-benifits.png" },
        { title: "Research Centre", text: "Innovative solutions with 3 patents, continuously evolving designs tailored to customer needs.", imageUrl: "https://agromachengineering.com/wp-content/uploads/2020/08/research.png" },
        { title: "Constant 24 hour Support", text: "Our dedicated team and skilled engineers vigilantly support, guide, train, and fulfill specific needs", imageUrl: "https://agromachengineering.com/wp-content/uploads/2020/11/support_icon.png" },
        { title: "Highly Satisfied Clients", text: "Satisfied clients worldwide, trusted by leaders and government, with 500+ happy customers.", imageUrl: "https://agromachengineering.com/wp-content/uploads/2020/08/satisfied-client.png" },
        { title: "ISO Certified", text: "We hold ISO 9001:2015 & ISO 14001:2015 certifications, ensuring quality and environmental standards.", imageUrl: "https://agromachengineering.com/wp-content/uploads/2020/08/iso-certificate.png" },
        { title: "Genuine Consultation", text: `We offer authentic consultations with the belief: "No value to you, no value in your money"`, imageUrl: "https://agromachengineering.com/wp-content/uploads/2020/08/cunsultation.png" },
        { title: "World class infrastructure", text: "To ensure consistent delivery of high-quality products on time, avoiding project delays and customer losses.", imageUrl: "https://agromachengineering.com/wp-content/uploads/2020/08/highly-infrastructured.png" },
        // { title: "Highly Motivated Team", text: "We steer a focused team: 20 engineers, 28 staff, 100 workers, fueled by values.", imageUrl: "https://agromachengineering.com/wp-content/uploads/2020/08/team.png" },
        // { title: "Turnkey Projects", text: "We boast an expert, trained team for efficient handling of Turnkey Projects.", imageUrl: "https://agromachengineering.com/wp-content/uploads/2020/08/projects.png" },
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center mb-2">
                    <h4 className="fs-3 font-bold capitalize">About Us</h4>
                    <hr style={{
                        margin: "auto",
                        border: "0px",
                        height: "3px",
                        width: "55%",
                        backgroundImage: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)"
                    }} />
                </div>
            </div>
            <div className="row justify-content-center align-items-center mb-4">
                <div className="col-md-4 text-center mb-2">
                    <img src="https://agromachengineering.com/wp-content/uploads/2021/03/whyus.jpg" alt="" className="img-fluid" />
                </div>

            </div>
            <div className="row justify-content-center">
                {cardsData.map((card, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className='text-center border-2 hover:border-4 p-3'>
                            <Card
                                style={{
                                    border: 'none'
                                    , borderRadius: "15px"
                                }}
                                border='dark'
                                className='shadow'
                            >
                                <Card.Img
                                    className='mx-auto'
                                    variant="top"
                                    src={card.imageUrl}
                                    style={{ height: "100px", width: "auto" }}
                                />
                                <Card.Body>
                                    <Card.Title className='text-center text-bold fs-6 '>{card.title}</Card.Title>
                                    <Card.Text className='justify fs-6'>{card.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row justify-content-center align-items-center mb-2">
                <div className="col-12 text-center mb-2">
                    <h4 className="fs-3 font-bold capitalize">Mentor</h4>
                    <hr style={{
                        margin: "auto",
                        border: "0px",
                        height: "3px",
                        width: "55%",
                        backgroundImage: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)"
                    }} />

                </div>
            </div>
            <div className="row justify-content-center align-items-center mb-4">
                <div className="col-md-6 text-center mb-3">
                    <h5 className="fs-3">Amit Aggarwal</h5>
                    <p
                        className='fs-5'
                    >
                        Director
                    </p>
                    <h5
                        className="text-center fs-6">Agromach: Quality, Customer-focused, Global Vision.</h5>
                </div>
                <div className="col-md-6 text-center ">
                    <img
                        src="https://agromachengineering.com/wp-content/uploads/2020/08/photo.jpg"
                        className="img-fluid rounded-lg border border-gray-300 transition duration-300 hover:brightness-90 hover:border-gray-600
                        shadow-lg"
                        style={{ maxHeight: '100%', maxWidth: '100%' }}
                    />
                </div>

            </div>

        </div>
    );
}

export default About;
