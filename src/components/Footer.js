import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <p> </p>
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
                        <small>
                            <a  target="_blank" rel="noopener noreferrer" href="https://www.facebook.com" className="me-2"><FaFacebook style={{ color: '#1877F2' }} /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com" className="me-2"><FaXTwitter style={{ color: '#000000' }} /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com" className="me-2"><FaLinkedin style={{ color: '#0A66C2' }} /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com" className="me-2"><FaYoutube style={{ color: '#FF0000' }} /></a>
                        </small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
