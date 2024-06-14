import React, { useRef, useEffect } from 'react';
import { Link } from 'react-scroll';

function AboutUs({ id, setActiveSection }) {
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
        <section id={id} ref={sectionRef} className="about">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>About Us</h2>
                </div>

                <div className="row content">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
                        <p>
                            We are Akeshya, a firm that specializes in web design and marketing. We help transform ideas
                            into reality with a team of passionate graphic designers, web developers, and seasoned
                            marketing advisors.
                        </p>
                        <ul>
                            <li><i className="ri-check-double-line"></i> We started with a simple idea: do what is best for
                                the client. </li>
                            <li><i className="ri-check-double-line"></i> Our methodical and individual approach to each
                                project delivers the finest possible results for your media.</li>
                            <li><i className="ri-check-double-line"></i> Our day-to-day work is to solve your problems
                                utilising the most up-to-date, practical adaptive technology, and we have a lot of fun
                                doing it.</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
                        <p>
                            We're professional, but we're also friendly, and we'll always pay attention to your
                            concerns. We expect to work with innovative people that have an open mind and are dedicated
                            to making every idea a reality. We want to hear from you if you're interested in SEO, have
                            Web Development ideas, or require a graphic designer who can match your goals.
                        </p>
                        <Link to="services" className="btn-learn-more text-decoration-none" type='button' offset={-70}>Learn More</Link>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutUs;