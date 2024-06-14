import React, { useRef, useEffect } from 'react';
import { Link } from 'react-scroll';

function Hero({ id, setActiveSection }) {
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
        <section id={id} ref={sectionRef} className="d-flex align-items-center">

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1 data-aos="fade-up">Grow your business with Akeshya</h1>
                        <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented website designers, developers &
                            digital marketeers</h2>
                        <div data-aos="fade-up" data-aos-delay="800">
                            <Link to="about" className="btn-get-started scrollto text-decoration-none" type='button' offset={-70}>Get Started</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
                        <img src="https://akeshya.com/assets/img/hero-img.png" className="img-fluid animated" alt="" />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Hero;