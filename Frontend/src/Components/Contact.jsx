import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMail, MdHome } from "react-icons/md";
import { useFormik } from 'formik'
import { User } from '../Schema'
const Contact = () => {
    const { values, handleBlur, handleSubmit, handleChange, errors, touched } = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: User,
        onSubmit: async (values, action) => {
            try {
                const response = await fetch('http://localhost:3000/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log('Message sent successfully');
                action.resetForm();
            } catch (error) {
                console.error('There was a problem sending the message:', error);
            }
        },
    });
    const contactDetails = [
        {
            icon: <MdHome size={30} />,
            text: "Plot No. 5&6, Jajru Road, Near Sector-59, Ballabgarh, Faridabad, Haryana-121004, (INDIA)"
        },
        {
            icon: <MdOutlineMail size={30} />,
            text: "sales@agromachengineering.com"
        },
        {
            icon: <FaMobileAlt size={30} />,
            text: "+91 8800899171, +91 8800899179"
        }
    ];
    return (
        <div className="container">
            <div className="row">
                <h2 className="text-center fs-1 font-bold pt-5">Contact Us</h2>
                <div className="col-md-4">
                    <p style={{ color: "black", border: "none" }}>Get In Touch</p>
                    <h4 style={{ fontWeight: "normal" }}>Do You Have Any Questions? </h4>
                    {contactDetails.map((detail, index) => (
                        <div
                            className="pt-3"
                            key={index} style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                            <div
                                style={{ marginRight: "10px", width: "40px", textAlign: "center" }}>
                                {detail.icon}
                            </div>
                            <div>
                                <div style={{ paddingTop: index === 0 ? "4px" : "2px" }}>
                                    <p className="">{detail.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-lg-6 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex justify-content-center fs-3  pt-4">Form</div>
                        <div className="pt-4">
                            <label htmlFor="name" className="form-label pt-2">Name</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                id="name"
                                placeholder="Enter your name"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            {errors.name && touched.name ? (<p>{
                                errors.name}</p>) : null}
                        </div>
                        <div className=" pt-4">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                required
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email ? (<p>{
                                errors.email}</p>) : null}
                        </div>
                        <div className=" pt-4">
                            <label htmlFor="message" className="form-label">Message</label>
                            <input
                                className="form-control"
                                id="message"
                                required
                                placeholder="Enter your message"
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.message && touched.message ? (<p>{
                                errors.message}</p>) : null}
                        </div>
                        <div className="text-center pt-4 pb-4">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="pt-4">
                <div
                    className="pt-2">
                </div>
            </div>
        </div>
    );
};
export default Contact;