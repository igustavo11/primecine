import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 
import { useTranslation } from 'react-i18next';
import enContact from '../../locales/en/contact.json';
import ptContact from '../../locales/pt/contact.json';
import './contact.css';

function Contact() {
    const { i18n } = useTranslation();
    const contactData = i18n.language === 'en' ? enContact[0] : ptContact[0];

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
        if (!formData.firstName) newErrors.firstName = contactData.form.errors.firstName;
        if (!formData.lastName) newErrors.lastName = contactData.form.errors.lastName;
        if (!formData.email) {
            newErrors.email = contactData.form.errors.email;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = contactData.form.errors.invalidEmail;
        }
        if (!formData.message) newErrors.message = contactData.form.errors.message;
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
                .catch(() => {
                    alert(contactData.form.errors.sendFailed); 
                });
        }
    };

    return (
        <div className="contact-section">
            <h1>{contactData.title}</h1>
            <div className="contact-container">
                <div className="contact-info">
                    <div className="locations">
                        {contactData.locations.map((location, index) => (
                            <div className="location" key={index}>
                                <h3>{location.name}</h3>
                                <p>{location.address}<br />
                                   {location.city}<br />
                                   {location.phone}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <label>
                            {contactData.form.name} <span>({contactData.form.required})</span>
                        </label>
                        <div className="name-fields">
                            <input
                                type="text"
                                name="firstName"
                                placeholder={contactData.form.firstName}
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            {errors.firstName && <p className="error">{errors.firstName}</p>}
                            <input
                                type="text"
                                name="lastName"
                                placeholder={contactData.form.lastName}
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                            {errors.lastName && <p className="error">{errors.lastName}</p>}
                        </div>
                        <label>
                            {contactData.form.email} <span>({contactData.form.required})</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder={contactData.form.email}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <p className="error">{errors.email}</p>}

                        <label>
                            {contactData.form.message} <span>({contactData.form.required})</span>
                        </label>
                        <textarea
                            name="message"
                            placeholder={contactData.form.message}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        {errors.message && <p className="error">{errors.message}</p>}

                        <button type="submit">{contactData.form.submitButton}</button>
                    </form>
                    {isSent && <p className="success">{contactData.form.successMessage}</p>}
                </div>
            </div>
        </div>
    );
}

export default Contact;
