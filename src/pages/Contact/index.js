import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 
import './contact.css';


function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSent, setIsSent] = useState(false); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.message) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            emailjs.send('service_olsy9tt', 'template_pdo3n22', formData, 'So5ndDG7yeIIE9eM-')
                .then(() => {
                    setIsSent(true);
                    setFormData({ firstName: '', lastName: '', email: '', message: '' });
                    setErrors({});
                    
                    setTimeout(() => {
                        setIsSent(false);
                    }, 3000);
                })
                .catch((error) => {
                   
                    alert('Failed to send email. Please try again.'); 
                });
        }
    };

    return (
        <div className="contact-section">
            <h1>Contact Us</h1>
            <div className="contact-container">
                <div className="contact-info">
                    <div className="locations">
                        <div className="location">
                            <h3>lorem| United States</h3>
                            <p>185 Lotrem St, 25th Fl.<br />
                                city 22<br />
                                P: 917.558</p>
                        </div>
                        <div className="location">
                            <h3>lorem| UsA</h3>
                            <p>lorem 87<br />
                                Texas , usa2<br />
                                P: 888.444.222</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name <span>(required)</span>
                        </label>
                        <div className="name-fields">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            {errors.firstName && <p className="error">{errors.firstName}</p>}
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                            {errors.lastName && <p className="error">{errors.lastName}</p>}
                        </div>
                        <label>
                            Email <span>(required)</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <p className="error">{errors.email}</p>}

                        <label>
                            Message <span>(required)</span>
                        </label>
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        {errors.message && <p className="error">{errors.message}</p>}

                        <button type="submit">Submit</button>
                    </form>
                    {isSent && <p className="success">Your message has been sent successfully!</p>}
                </div>
            </div>
        </div>
    );
}

export default Contact;
