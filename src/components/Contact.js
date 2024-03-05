import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        alert('Thank you for contacting us!');

        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <Container className="mt-5">
            <h2>Contact Us</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="formName">
                    <Form.Label column sm={2}>
                        Name:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formEmail">
                    <Form.Label column sm={2}>
                        Email:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formMessage">
                    <Form.Label column sm={2}>
                        Message:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </Col>
                </Form.Group>

                <Row>
                    <Col className="text-center">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default ContactUs;