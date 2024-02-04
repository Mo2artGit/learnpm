import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="mt-5">
            <Container>
                <Row>
                    <Col>
                        <h5>Learn PM</h5>
                        <p>TEXT</p>
                    </Col>
                    <Col>
                        <h5>Related Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/contact">Become A Trainer</Link></li>
                        </ul>
                        <p>&copy; 2024 Learn PM. All rights reserved.</p>

                    </Col>
                    <Col>
                        <h5>Follow Us</h5>
                        <p>
                            <a href="https://www.facebook.com"><FaFacebook /></a>
                            <a href="https://twitter.com"><FaTwitter /></a>
                            <a href="https://www.linkedin.com"><FaLinkedin /></a>
                            <a href="https://www.youtube.com"><FaYoutube /></a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>

    );
}

export default Footer;
