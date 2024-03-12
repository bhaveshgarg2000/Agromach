const AboutComponent = () => {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-8 col-sm-10 text-center mb-4 ">
                    <img className="img-fluid border border-black border-3 rounde-full border-solid mix-blend-hue bg-blend-screen"
                        style={{ borderRadius: "20px", border: "2px solid black", boxShadow: "2px" }}
                        src="https://agromachengineering.com/wp-content/uploads/2021/03/welcome.jpg" alt="" />
                </div>
                <div className="col-lg-6 col-md-8 col-sm-10">
                    <div>
                        <h6 className="text-center border bg-dark text-white p-2 "
                            style={{ border: '2px solid', borderRadius: "20px" }}
                        >
                            ABOUT AGROMACH ENGINEERING

                        </h6>

                        <div className="text-justify">
                            <h6 className="mb-4 ">
                                “AT AGROMACH WE BELIEVE IN DOING WHAT IS RIGHT FOR THE CUSTOMER.
                                IF OUR PRODUCT IS OF NO VALUE TO YOU, THEN YOUR MONEY IS OF NO VALUE TO US”
                            </h6>
                            <p className="text-justify">
                                Welcome to the world of the most reliable Grain Processing Machines.
                                Agromach is a quality and customer-oriented company with a global vision and reach. The journey of Agromach Engineering Pvt. Ltd. started from very modest beginnings in 2008 and due to its strong focus on quality in the manufacturing process and systems, resulted in a satisfied and loyal customer base spread across India and many other countries.
                            </p>
                            <p className="text-justify">
                                We value our customers and are committed to providing them with rugged, efficient, reliable solutions and dependable after-sale services at the most economical price. Our strength lies in our dedicated, competent employees, reliable channel partners, and suppliers.
                            </p>
                            <p className="text-justify">
                                Agromach has developed strong technical capabilities and produces grain processing machines for different segments like rice mill, flour mill, Dall mill, Seed Plant, Spice plants and has obtained quality systems certifications including ISO 9001:2015, ISO 14001:2015.
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;
