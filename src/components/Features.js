import React from 'react';

function Features() {
    return (
        <section id="features" className="features">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>Our Core Features</h2>
                    <p>Akeshya is a forward-thinking and intelligent design firm that is technically and creatively
                        capable of transforming your brand into its best digital self. Our approach to design and
                        development results in compelling, engaging branding and immersive digital experiences that
                        provide a value for money.</p>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="300">
                    <div className="col-lg-3 col-md-4">
                        <div className="icon-box">
                            <i className="bi-window" style={{ color: "#ffbb2c" }}></i>
                            <h3>Web design</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                            <i className="bi-code" style={{ color: "#5578ff" }}></i>
                            <h3>Development</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                            <i className="bi-badge-ad" style={{ color: "#e80368" }}></i>
                            <h3>Branding</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                        <div className="icon-box">
                            <i className="bi-play-circle" style={{ color: "#e361ff" }}></i>
                            <h3>Media buying</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="bi bi-search" style={{ color: "#47aeff" }}></i>
                            <h3>Search engine</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="bi-mastodon" style={{ color: "#ffa76e" }}></i>
                            <h3>Brand strategy</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="bi-map" style={{ color: "#dbce11" }}></i>
                            <h3>Local search marketing</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="bi-bar-chart" style={{ color: "#4233ff" }}></i>
                            <h3>Lead Tracking & Management </h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="bi-book-half" style={{ color: "#b2904f" }}></i>
                            <h3>Contact management</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="bi bi-collection" style={{ color: "#b20969" }}></i>
                            <h3>Media management</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="bi bi-calendar-event" style={{ color: "#ff5828" }}></i>
                            <h3>Social scheduling</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="bi bi-bullseye" style={{ color: "#29cc61" }}></i>
                            <h3>Ad retargeting</h3>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Features;