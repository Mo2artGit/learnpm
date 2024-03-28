import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import frontImage from './img/contactus_front_img.png';
import backgroundImage from './img/contactus_bg_img.png';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [issue, setIssue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Issue:', issue);
        alert('Thank you for contacting us!');
        setName('');
        setEmail('');
        setPhone('');
        setIssue('');
    };

    const pageStyle = {
        position: 'relative',
        minHeight: '75vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        overflow: 'hidden',
        zIndex: 0, // Ensure this is 0 or greater
    };

    const backgroundStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.5,
        zIndex: -1, // Set to a negative value
    };

    const headerStyle = {
        padding: '20px 0',
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'normal',
        color: '#333',
        marginBottom: '30px',
    };

    const formRowStyle = {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    };

    const formStyle = {
        textAlign: 'left',
        borderRadius: '15px',
        padding: '40px',
    };

    const labelStyle = {
        color: '#333333',
        marginBottom: '1px',
    };

    return (
        <>
            <div style={pageStyle}>
                <div style={{ ...backgroundStyle, backgroundImage: `url(${backgroundImage})` }}></div>
                <h1 style={headerStyle}>Get In Touch! Contact our team below</h1>
                <Container>
                    <Row style={formRowStyle}>
                        <Col md={6} className="text-center">
                            <img src={frontImage} alt="Contact Us" style={{ maxWidth: '100%', height: 'auto', borderRadius: '24px' }} />
                        </Col>
                        <Col md={6} style={formStyle}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label style={labelStyle}>Name*:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>
                                <div style={{ marginBottom: '3px' }} />
                                <Form.Group>
                                    <Form.Label style={labelStyle}>Email*:</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                                <div style={{ marginBottom: '3px' }} />
                                <Form.Group>
                                    <Form.Label style={labelStyle}>Phone Number:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your phone number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </Form.Group>
                                <div style={{ marginBottom: '3px' }} />
                                <Form.Group>
                                    <Form.Label style={labelStyle}>Issue:</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="What can we help you with?"
                                        value={issue}
                                        onChange={(e) => setIssue(e.target.value)}
                                    />
                                </Form.Group>
                                <div style={{ marginBottom: '20px' }} />
                                <Button className="me-2" variant="secondary" type="reset">
                                    Reset
                                </Button>
                                <Button variant="primary" type="submit" className="text-center">
                                    Send
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Contact;
