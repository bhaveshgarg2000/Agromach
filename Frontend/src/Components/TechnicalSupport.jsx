const TechnicalSupport = () => {
    // Define data for sections
    const sections = [
        {
            title: "Seed Plants",
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2020/11/support_tech.jpg",
            content: [
                {
                    title: "Guidance",
                    text: "At Agromach we believe in giving the right guidance to our customers, as we strongly believe that if our product is of no value to you, your money is of no value to us."
                },
                {
                    title: "Consultancy",
                    text: "We provide consulting, engineering, techno-economic feasibility studies, design, construction, and Project implementation for Rice mills, Flour mills, Pulse (Dall) mills & Seed plants. We offer complete comprehensive solutions all segments including",
                    listItems: ["Cleaning", "Parboiling and Drying (for Rice mill only)", "Grading", "Sorting", "Automation", "Modernization"]
                }
            ]
        },
        {
            title: "",
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2020/11/support_counsultancy.jpg",
            content: [
                {
                    title: "Our projects have been implemented in India, Bangladesh, Nigeria, Nepal, and other areas throughout the world."
                },
                {
                    title: "Our Services includes",
                    listItems: ["Full Technical Consultancy", "Engineering & supervision", "Erection & Commissioning", "Selection of personnel", "Training of team", "Automation", "Modernization"],
                    advantages: ["Expert Advice", "Excellent value", "On-time completion of project", "Completion of project within time targets", "Profit maximizing"]
                }
            ]
        }
    ];

    return (
        <div className="container">
            {sections.map((section, index) => (
                <div key={index} className="row justify-content-center align-items-center text-center py-4">
                    <h1 className="text-capitalize fs-3 pb-3">{section.title}</h1>
                    <div className="col-md-6">
                        <img
                            src={section.imageUrl}
                            alt={section.title}
                            className="img-fluid shadow-lg"
                            style={{ width: "80%", height: "auto", border: "none", borderRadius: "20px", boxShadow: "revert-layer" }}
                        />
                    </div>
                    <div className="col-md-6" style={{ textAlign: "justify" }}>
                        {section.content.map((content, index) => (
                            <div key={index} className="fs-6 pt-2 text-justify">
                                {content.title && <h5>{content.title}</h5>}
                                {content.text && <p>{content.text}</p>}
                                {content.listItems && (
                                    <ul>
                                        {content.listItems.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                                {content.advantages && (
                                    <div>
                                        <p>Advantage of our consultancy</p>
                                        <ul>
                                            {content.advantages.map((advantage, index) => (
                                                <li key={index}>{advantage}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TechnicalSupport;
