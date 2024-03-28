import React from 'react';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import register from './img/register.svg';
//import registerBg from './img/register_bg.png';

function Register() {

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
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>
                    *Name:
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>
                    *Email:
                  </Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>
                    *Password:
                  </Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCountry">
                  <Form.Label>
                    *Country:
                  </Form.Label>
                  <Form.Control type="text" />
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

                {/*
                <Form.Group className="mb-3" controlId="formPayment">
                  <Form.Label>
                    Payment Info:
                  </Form.Label>
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
                </Form.Group>
                */}

                <Row className='text-center'>
                  <Col>
                    <Button variant="outline-secondary" className="w-100" type="submit">
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
    </div>
  );
}

export default Register;
