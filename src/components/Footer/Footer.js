import React from "react";
import { NavLink } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container px-4 py-5" id="hanging-icons">
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="col d-flex align-items-start">
                        <ul>
                            <h2>Info</h2>
                            <li className="logo">
                                <img
                                    src="data:image/webp;base64,UklGRlICAABXRUJQVlA4TEYCAAAvqEAREMegqG0byN3BH/KeoyAQSPJHXGaBQBLP/n6radsIKn9g92O5m25OQvfgnq3FA4CBoQCABNt22zYiqQo197L/pWaAjw9M7xH9d+C2jSMpu9eLMjsl84XyH5WoKuSHC6lcyPeWTYtvv4yYxYntG8ZBOJGcZNQuwiSgMxhk1x6ryKTFJxExoqDFFmm1g9KzEhpl/0I49CvUBT7N0GhQWU7ViQ6zdh8qgGPC0tuXwOKmjFp9bZ6SRNHtbFmrF9NnhB/ubedazrrSECpCSA+fE9DgbtIn3qjuOfDSY97XForD9Kr2ScwmP6tv2Hd7EbF/N8Swiep0jCiUrmva/D1QTM5lPQ1a44SM2gaN5hP7Q961oqVr7T4np+ZOMb31sPc7MppOpfDgk5O2d5+PVTc48l1tpmt1m24/SgkDzIC0qzp/RqSS0QEjvELE6W3WlHRvzT4bUyWjAaOShXOdOOnRvpH4Q9l0uQjwIKRBe39xdJ/pRr7gG6vXTgHxPZucl1/36/X+TgZMCwuWoyeM45RBztceZxWPXMBE25DfdvBTMMh3t61KkTB/v88mXok1hrN0rcX69qfAotbMcg+KG6qyjq+Id8s9trOQQI1RO+UFEidrDOvUUP3QSEI1xs1yA3CRVLWNpBEYD94ctRIEpMeCuWYSMNwDdTB4w8maIFAHO0/y4PcPbeONhMv+RBDcWbzARz4D5TQ7iZz4vdqGhBbnqUtwr+b8UBrOHreZQR/b/To+ox7gR2zjLzMl/bxfLvdX+V9TlAI="
                                    alt="Logo"
                                />
                            </li>
                            <li className="content">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Atque laborum doloribus
                                distinctio nihil voluptatem odit itaque dolores
                                .
                            </li>
                        </ul>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3"></div>
                        <ul>
                            <h2>Links</h2>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about_us">About Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className=" col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3"></div>
                        <ul>
                            <h2>Featured title</h2>
                            <li>
                                Paragraph of text beneath the heading to explain
                                the heading. We'll add onto it with another
                                sentence and probably just keep going until we
                                run out of words.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
