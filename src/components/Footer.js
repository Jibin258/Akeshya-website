import React from 'react';

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="Copyright">
                        &copy; Copyright <strong>Akeshya</strong>. All Rights Reserved
                    </div>
                    <div>
                        <ul className=" d-flex list-unstyled">
                            <li className="px-3"><a href="https://akeshya.com/Terms%20and%20conditions.pdf">Terms and
                                conditions</a></li>
                            <li className="px-3"><a href="https://akeshya.com/Refund%20policy.pdf">Refund policy</a></li>
                            <li className="px-3"><a href="https://akeshya.com/Privacy%20policy.pdf">Privacy policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;