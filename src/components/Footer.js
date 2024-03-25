import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './img/learnpm.jpg';

function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <p> </p>
                <Row>
                    <Col>
                        <img
                            src={Logo}
                            width="70"
                            height="70"
                            className="d-inline-block align-top"
                            alt="Learn PM logo"
                        />
                    </Col>
                    <Col>
                        <h5>Related Links</h5>
                        <ul className="list-unstyled fw-light">
                            <li><Link to="/about" style={{ color: '#dbdcdc', textDecoration: 'none' }}>About</Link></li>
                            <li><Link to="/contact" style={{ color: '#dbdcdc', textDecoration: 'none' }}>Contact Us</Link></li>
                            <li><Link to="/contact" style={{ color: '#dbdcdc', textDecoration: 'none' }}>Become A Trainer</Link></li>
                            <li><Link to="/term" style={{ color: '#dbdcdc', textDecoration: 'none' }}>Terms & Conditions</Link></li>
                        </ul>
                        <p className='text-white-50'>&copy; 2024 Learn PM. All rights reserved.</p>
                    </Col>
                    <Col>
                        <h5>Follow Us</h5>
                        <small>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com" className="me-2"><FaFacebook style={{ color: '#1877F2' }} /></a>
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
