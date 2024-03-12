import Card from 'react-bootstrap/Card';
const Team = () => {
    const mentors = [
        {
            name: "Dr. Ajay Kumar",
            role: "Senior Corporate Lawyer & Strategist",
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/02/ajay_garg.png"
        },
        {
            name: "Mr.Rahat Bhatia",
            role: "Director RAGA Grou",
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/02/rahat.png"
        },
    ];
    const Management = [
        {
            name: "Mr. H.P. Aggarwal",
            role: "Chairman",
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/02/hp_aggarwal.png"
        },
        {
            name: "M/s Priyanka Aggarwal",
            role: "Director",
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/prinkya.png"
        },
    ];
    const Team = [
        {
            name: "Mr. Sudhir Chaudhary",
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/02/sudhir_choudhary.png"
        },
        {
            name: "Mr. S.S.Negi",
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/negi.jpg"
        },
        {
            name: "Mr.Gaurav Bansal",
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/02/gaurav.png"
        },
        {
            name: "Mr. Sanjeev Prajapati",
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/sanjeev.png"
        },
        {
            name: "Mr. Avdesh",
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/avdesh.jpg"
        },
        {
            name: "Miss. Anjali Patwal",
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/anjali.jpg"
        },
        {
            name: "Miss. Meenu Sagar",
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/meenu.jpg"
        },
        {
            name: "Mr. Khemchand",
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/khemchand.jpg"
        },
        {
            name: "Mr. Pramod Gupta",
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/promodgupta.jpg"
        },
        {
            name: "Mr. Ravikant",
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/ravikant.jpg"
        },
        {
            name: "Mr. Ravit Kumar",
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/02/ravit.png"
        },
        {
            name: "Mr. Vashim",
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/vasim.jpg"
        },
    ];
    const Images = [
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/awd1-1.jpg"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/awd2-1.jpg"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/awd3-1.jpg"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/awd4.jpg"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/awd9.jpg"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/awd12.jpg"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/awd13.jpg"
        },
        {
            imageUrl: "https://agromachengineering.com/wp-content/uploads/2021/03/awd14.jpg"
        },
    ];
    return (
        <>
            <div className="container">
                <div className="row justify-content-center  pt-2 pb-2">
                    <div className="col-md-12">
                        <h5 className="text-center fs-3 font-bold">Mentors</h5>
                        <hr style={{
                            margin: "auto",
                            border: "0px",
                            height: "3px",
                            width: "55%",
                            backgroundImage: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)"
                        }} />
                    </div>
                </div>
                <div className="row justify-content-center pt-2 pb-2">
                    {mentors.map((mentor, index) => (
                        <div key={index} className="col-md-5 mb-3 ">
                            <Card
                                border="dark"
                                className='shadow-lg'
                                style={{ width: '100%', height: '100%', border: 'none', borderRadius: "8px" }}>
                                <Card.Img variant="top" src={mentor.imageUrl}
                                    className='mx-auto pt-2 pb-2 shadow-md'
                                    border="dark"
                                    style={{ height: '200px', width: "50%" }}
                                />
                                <Card.Body className="pt-2">
                                    <Card.Title className='text-center'>{mentor.name}</Card.Title>
                                    <Card.Text
                                        className='text-center fs-6 '>{mentor.role}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
                <div className="row justify-content-center  pt-2 pb-2">
                    <div className="col-md-8">
                        <h5 className="text-center capitalize fs-3 font-bold">Our Top Management</h5>
                        <hr style={{
                            margin: "auto",
                            border: "0px",
                            height: "3px",
                            width: "55%",
                            backgroundImage: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)"
                        }} />
                    </div>
                    <div className="row justify-content-center pt-2 pb-2">
                        {Management.map((mentor, index) => (
                            <div key={index} className="col-md-5 mb-3 ">
                                <Card
                                    border="dark"
                                    className='shadow-lg'
                                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: "8px" }}>
                                    <Card.Img variant="top" src={mentor.imageUrl}
                                        className='mx-auto pt-1 shadow-md'
                                        border="dark"
                                        style={{ height: '200px', width: "50%" }}
                                    />
                                    <Card.Body className="pt-2">
                                        <Card.Title className='text-center'>{mentor.name}</Card.Title>
                                        <Card.Text
                                            className='text-center fs-6 '>{mentor.role}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row justify-content-center  pt-2 pb-2">
                    <div className="col-md-8">
                        <h5 className="text-center fs-3 font-bold">Our Team</h5>
                        <hr style={{
                            margin: "auto",
                            border: "0px",
                            height: "3px",
                            width: "55%",
                            backgroundImage: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)"
                        }} />
                    </div>
                    <div className="row justify-content-center pt-2 pb-2">
                        {Team.map((mentor, index) => (
                            <div key={index} className="col-md-3 mb-3 ">
                                <Card
                                    className='shadow-lg'
                                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: "8px" }}>
                                    <Card.Img variant="top" src={mentor.imageUrl}
                                        className='mx-auto pt-1 '
                                        border="dark"
                                        style={{ height: '200px', width: "50%" }}
                                    />
                                    <Card.Body className="pt-2">
                                        <Card.Title className='text-center'>{mentor.name}</Card.Title>

                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row justify-content-center  pt-2 pb-2">
                    <div className="col-md-8">
                        <h5 className="text-center fs-3 font-bold">Awards</h5>
                        <hr style={{
                            margin: "auto",
                            border: "0px",
                            height: "3px",
                            width: "55%",
                            backgroundImage: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)"
                        }} />
                    </div>
                    <div className="row justify-content-center pt-2 pb-2">
                        {Images.map((mentor, index) => (
                            <div key={index} className="col-md-3 mb-3 ">
                                <Card
                                    className='shadow-lg'
                                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: "8px" }}>
                                    <Card.Img variant="top" src={mentor.imageUrl}
                                        className='mx-auto pt-1 shadow-md'
                                        border="dark"
                                        style={{ height: '200px', width: "50%" }}
                                    />
                                    <Card.Title className='text-center'>{mentor.name}</Card.Title>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Team;
