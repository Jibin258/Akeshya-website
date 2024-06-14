import React, { useState, useEffect } from 'react';

const PureCounter = ({ start, end, duration }) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        let startTime;
        let frame;

        const updateCount = () => {
            const now = new Date().getTime();
            const progress = Math.min(1, (now - startTime) / duration);
            const currentCount = Math.floor(progress * (end - start) + start);
            setCount(currentCount);

            if (progress < 1) {
                frame = requestAnimationFrame(updateCount);
            }
        };

        startTime = new Date().getTime();
        frame = requestAnimationFrame(updateCount);

        return () => cancelAnimationFrame(frame);
    }, [start, end, duration]);

    return <span className="purecounter">{count}</span>;
};

function Counts() {
    return (
        <section id="counts" className="counts">
            <div className="container">

                <div className="row">
                    <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
                        data-aos="fade-right" data-aos-delay="150">
                        <img src="https://akeshya.com/assets/img/counts-img.svg" alt="" className="img-fluid" />
                    </div>

                    <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left"
                        data-aos-delay="300">
                        <div className="content d-flex flex-column justify-content-center">
                            <div className="row">
                                <div className="col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                        <i className="bi bi-emoji-smile"></i>
                                        <PureCounter start={0} end={3835039} duration={2000} />
                                        <p><strong>Organic Reach</strong> (Global)</p>
                                    </div>
                                </div>

                                <div className="col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                        <i className="bi bi-journal-richtext"></i>
                                        <PureCounter start={0} end={85} duration={3000} />
                                        <p><strong>Campaigns</strong></p>
                                    </div>
                                </div>

                                <div className="col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                        <i className="bi bi-clock"></i>
                                        <PureCounter start={0} end={14081} duration={3000} />
                                        <p><strong>Watch Hours</strong> (Asia) </p>
                                    </div>
                                </div>

                                <div className="col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                        <i className="bi bi-globe"></i>
                                        <PureCounter start={0} end={17} duration={1000} />
                                        <p><strong>Excellent CTR %</strong> (Asia)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Counts;