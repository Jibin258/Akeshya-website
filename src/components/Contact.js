import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert("Your message has been sent. Thank you!");
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    };

    return (
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>Contact Us</h2>
                </div>

                <div className="row">

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="contact-about">
                            <h3>Akeshya</h3>
                            <p>Designers, developers & marketeers capable of delivering solutions according to your
                                needs,</p>

                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                        <div className="info">
                            <div>
                                <i className="bi bi-geo-alt"></i>
                                <p>26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004</p>
                            </div>

                            <div>
                                <i className="bi bi-envelope"></i>
                                <p>info@akeshya.com</p>
                            </div>

                            <div>
                                <i className="bi bi-telephone"></i>
                                <p>+91 94942 40922 </p>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
                        <form className='email-form' method='POST' name='contact' onSubmit={handleSubmit}>
                            <input type='hidden' name='form-name' value='contact' />
                            <div className='form-group'>
                                <input
                                    type='text'
                                    name='name'
                                    className='form-control'
                                    id='name'
                                    placeholder='Your Name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='email'
                                    className='form-control'
                                    name='email'
                                    id='email'
                                    placeholder='Your Email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    className='form-control'
                                    name='subject'
                                    id='subject'
                                    placeholder='Subject'
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <textarea
                                    className='form-control'
                                    name='message'
                                    rows='5'
                                    placeholder='Message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className='text-center'>
                                <button type='submit'>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>


                </div>

            </div>
        </section>
    );
}

export default Contact;