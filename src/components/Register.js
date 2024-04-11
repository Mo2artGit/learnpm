import React, { useState } from 'react';
import { Button, Form, Col, Row, Container, Modal } from 'react-bootstrap';
import register from './img/register.svg';

function Register() {
  const [showModal, setShowModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(true);

    if (form.checkValidity() === true) {
      handleShowModal();
      setFormSubmitted(true);
    }
  };

  var divStyle = {
    minHeight: '75vh',
  };

  return (
    <div>
      <div className='px-5 py-3' style={divStyle}>
        <h2 className='fst-italic'>Welcome!</h2>
        <h4 className='fst-italic'>Register Below To Create Your Account</h4>
        <Row className='mt-4'>
          <Col>
            <Container>
              <img src={register} alt="register" />
            </Container>
          </Col>
          <Col>
            <Container className='text-start'>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>
                    *Name:
                  </Form.Label>
                  <Form.Control type="text" required />
                  <Form.Control.Feedback type="invalid">
                    Please enter your name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>
                    *Email:
                  </Form.Label>
                  <Form.Control type="email" required />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email address.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>
                    *Password:
                  </Form.Label>
                  <Form.Control type="password" required />
                  <Form.Control.Feedback type="invalid">
                    Please enter a password.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCountry">
                  <Form.Label>
                    *Country:
                  </Form.Label>
                  <Form.Control type="text" required />
                  <Form.Control.Feedback type="invalid">
                    Please enter your country.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMail">
                  <Form.Label>
                    Address:
                  </Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formNumber">
                  <Form.Label>
                    Contact No. :
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCourse">
                  <Form.Label>
                    Courses:
                  </Form.Label>
                  <Form.Select aria-label="Courses">
                    <option disabled>Select Course</option>
                    <option value="1">Professional Scrum Master Training</option>
                    <option value="2">CSM - Certified Scrum Master</option>
                    <option value="3">CSPO - Certified Scrum Product Owner</option>
                  </Form.Select>
                </Form.Group>

                <Row className='text-center'>
                  <Col>
                    <Button variant="outline-secondary" className="w-100" type="reset">
                      Reset
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="secondary" className="w-100" type="submit">
                      Register
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Col>
        </Row>
      </div>
      {formSubmitted && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Registration Successful</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Thank you for registering!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Register;
