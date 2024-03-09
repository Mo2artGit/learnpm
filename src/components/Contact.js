import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import frontImage from './img/contactus_front_img.svg';
import backgroundImage from './img/contactus_bg_img.png'; // Import your background image

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        alert('Thank you for contacting us!');
        setName('');
        setEmail('');
        setMessage('');
    };

    // Inline styles
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        padding: '50px 0',
    };

    const overlayStyle = {
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: '15px',
        padding: '40px',
        marginTop: '50px',
    };

    const titleStyle = {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '30px',
    };

    return (
        <div style={sectionStyle}>
            <Container style={overlayStyle}>
                <h2 style={titleStyle}>Get In Touch! Contact our team below</h2>
                <Form onSubmit={handleSubmit}>
                    {/* ... Your Form Groups remain unchanged */}
                    <Row>
                        <Col className="text-center">
                            <Button variant="primary" type="submit">
                                Send
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
            <Footer />
        </div>
    );
}

export default Contact;