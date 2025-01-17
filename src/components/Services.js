import React, { useRef, useEffect } from 'react';

function Services({ id, setActiveSection }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(id);
                }
            });
        };

        const observer = new IntersectionObserver(callback, observerOptions);
        observer.observe(sectionRef.current);

        return () => {
            observer.disconnect();
        };
    }, [id, setActiveSection]);

    return (
        <section id={id} ref={sectionRef} className="services">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>Services</h2>
                    <p>Akeshya will serve as your consultant and development partner to help you turn your idea into a
                        reality.</p>
                </div>

                <div className="row">
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><i className="bi bi-dribbble"></i></div>
                            <h4 className="title">Design</h4>
                            <p className="description">Our web design services can assist you in reclaiming your company's
                                online image. Your business will flourish on the Internet thanks to the combination of
                                style and technology we provide, as well as our experience.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon"><i className="bi bi-file-earmark-text"></i></div>
                            <h4 className="title">Development</h4>
                            <p className="description">Our development team can construct platforms to help your business
                                thrive by creating powerful customised solutions tailored to your particular
                                requirements. Akeshya makes use of established and effective web development tools. </p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon"><i className="bi bi-globe"></i></div>
                            <h4 className="title">Marketing</h4>
                            <p className="description">A beautiful website is the foundation of effective marketing. Our
                                customers achieve success where it counts—in the real world—by combining our proven
                                approach with our passion for improving conversions and increasing ROI.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                            <div className="icon"><i className="bi bi-speedometer"></i></div>
                            <h4 className="title">Support</h4>
                            <p className="description">Since the beginning, we at Akeshya have specialised in website
                                maintenance. We recognise the significance of having your business online 24 hours a
                                day, seven days a week, and we've created a system to ensure that we're always
                                available. </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Services;