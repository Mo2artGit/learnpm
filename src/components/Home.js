import React from 'react';
import { Form, Stack, Row, Col, Card, Carousel, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Si1 from './img/si1.jpg';
import Si2 from './img/si2.jpg';
import Si3 from './img/si3.jpg';
import Si4 from './img/si4.jpg';

function Home() {
  const scrollImageStyle = {
    width: '100%', // Adjust the width as needed
    height: '30vh', // Adjust the height as needed
  };

  return (
    <div>
      {/*Scrolling Images*/}
      <section>
        <Carousel>
          <Carousel.Item>
            <img src={Si1} className="d-block w-100" alt="First slide" style={scrollImageStyle} />
            <Button variant="light" style={{ position: 'absolute', bottom: "10%", right: "20%", zIndex: 1 }}>Collaborate</Button>
            <Carousel.Caption>
              <h3>About Us</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Si2} className="d-block w-100" alt="Second slide" style={scrollImageStyle} />
            <Button variant="light" style={{ position: 'absolute', bottom: "10%", right: "20%", zIndex: 1 }}>Schedule An Assessment</Button>
            <Carousel.Caption>
              <h3>Assessment</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Si3} className="d-block w-100" alt="Third slide" style={scrollImageStyle} />
            <Button variant="light" style={{ position: 'absolute', bottom: "10%", right: "20%", zIndex: 1 }}>View Courses</Button>
            <Carousel.Caption>
              <h3>Courses</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Si4} className="d-block w-100" alt="Fourth slide" style={scrollImageStyle} />
            <Button variant="light" style={{ position: 'absolute', bottom: "10%", right: "20%", zIndex: 1 }}>Our Offerings</Button>
            <Carousel.Caption>
              <h3>Coaching</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      {/*Our Services*/}
      <section>
        <h3 className='mt-3 mb-3'>Our Services</h3>
        <Container>
          <Row>
            <Col>
              <Card className='mb-4'>
                <Card.Body>
                  <Link to="/assessment">
                    <Button variant="secondary" size="lg">Assessment</Button>
                  </Link>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content...<Link to="/assessment">More</Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='mb-4'>
                <Card.Body>
                  <Link to="/training">
                    <Button variant="secondary" size="lg">Training</Button>
                  </Link>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content...<Link to="/training">More</Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='mb-4'>
                <Card.Body>
                  <Link to="/coaching">
                    <Button variant="secondary" size="lg">Coaching</Button>
                  </Link>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content...<Link to="/coaching">More</Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/*About Us*/}
      <section>
        <h3 className='mb-3'>About Us</h3>
        <Container>
          <Row>
            <Col xs={4}>
              <Row>
                <Col xs={12}>
                  <Button variant="outline-secondary" className="mb-3">Who We Are</Button>
                </Col>
                <Col xs={12}>
                  <Button variant="outline-secondary" className="mb-3">What We Do</Button>
                </Col>
                <Col xs={12}>
                  <Link to="/contact">
                    <Button variant="outline-secondary" className="mb-3">Contact Us</Button>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col xs={8}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo at velit commodo fermentum. Integer id convallis lorem. Quisque tincidunt massa nec lorem ultrices, non faucibus enim ultricies. Sed venenatis, ligula a varius ullamcorper, elit nunc fermentum dolor, sed ultrices lacus dui nec nulla. Duis eu turpis ac nunc facilisis lacinia. Sed fringilla magna ac justo eleifend, ac placerat nisi vulputate. In eget dolor nec felis consectetur faucibus nec ac lacus. Curabitur non dolor feugiat, volutpat lectus nec, mollis quam. Nulla quis sollicitudin lorem, eget convallis sapien.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/*Our Partners*/}
      <section>
        <h3 className='mb-3'>Our Partners</h3>
        <Container>
          <Row>
            <Col>
              <h5>SAFe</h5>
              <p>logo</p>
            </Col>
            <Col>
              <h5>Scrum Alliance</h5>
              <p>logo</p>
            </Col>
            <Col>
              <h5>Scrum.org</h5>
              <p>logo</p>
            </Col>
          </Row>
        </Container>
      </section>
      {/*Get Inspired*/}
      <section>
        <h3 className='mb-3'>Get Inspired</h3>
        <Carousel indicators={false}>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="h-100 justify-content-center align-items-center"
              gap={3}
            >
              <img src={Si1} className="d-block w-100" alt="First slide" style={scrollImageStyle} />
              <img src={Si2} className="d-block w-100" alt="Second slide" style={scrollImageStyle} />
              <img src={Si3} className="d-block w-100" alt="Third slide" style={scrollImageStyle} />
              <img src={Si4} className="d-block w-100" alt="Second slide" style={scrollImageStyle} />
            </Stack>
          </Carousel.Item>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="h-100 justify-content-center align-items-center"
              gap={3}
            >
              <img src={Si3} className="d-block w-100" alt="First slide" style={scrollImageStyle} />
              <img src={Si4} className="d-block w-100" alt="Second slide" style={scrollImageStyle} />
              <img src={Si2} className="d-block w-100" alt="Third slide" style={scrollImageStyle} />
              <img src={Si1} className="d-block w-100" alt="First slide" style={scrollImageStyle} />
            </Stack>
          </Carousel.Item>
        </Carousel>
      </section>
      {/*Sign Up*/}
      <section className='mt-3'>
        <h3 className='mb-3'>Stay Connectd With Us...</h3>
        <p>Receive information on upcoming workshops and insights.</p>
        <Container>
          <Row>
            <Col xs={5}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
            </Col>
            <Col xs={7}>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Group controlId="terms">
                <Form.Check inline type="checkbox" label="I am permitting you to email me" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Button variant="secondary" type="submit">
                Sign Up
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div >
  );
}

export default Home;
