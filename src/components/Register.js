import React from 'react';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';

function Register() {
  return (
    <Container className='text-start'>
      <h2>
        Welcome!
      </h2>
      <p>Register Below To Create Your Account</p>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formName">
          <Form.Label column sm={2}>
            *Full Name:
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formEmail">
          <Form.Label column sm={2}>
            *Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPassword">
          <Form.Label column sm={2}>
            *Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formCountry">
          <Form.Label column sm={2}>
            *Country:
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formMail">
          <Col sm={2}>
            <Form.Label>Mailing Address</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control as="textarea" rows={3} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formNumber">
          <Form.Label column sm={2}>
            Contact No. :
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formCourse">
          <Form.Label column sm={2}>
            Courses :
          </Form.Label>
          <Col sm={10}>
            <Form.Select aria-label="Courses">
              <option disabled>Select Course</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPayment">
          <Form.Label column sm={2}>
            Payment Info:
          </Form.Label>
          <Col sm={10}>
            <Row>
              <Col>
                <Form.Control type="text" placeholder="Cardholder Name" />
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Card Number" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control type="text" placeholder="MM/YY" />
              </Col>
              <Col>
                <Form.Control placeholder="CVC" />
              </Col>
            </Row>
          </Col>
        </Form.Group>

        <Row className='text-center'>
          <Col>
            <Button variant="primary" type="submit">
              Reset
            </Button>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Col>
        </Row>

      </Form>
    </Container>
  );
}

export default Register;
