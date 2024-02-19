import React from 'react';
import { Image, Form, Stack, Row, Col, Card, Carousel, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Si1 from './img/si1.jpg';
import Si2 from './img/si2.jpg';
import Si3 from './img/si3.jpg';
import Si4 from './img/si4.jpg';
import img from './img/img.jpg';
import SA from './img/SA.png';
import SAFe from './img/SAFe.png';
import Scrumorg from './img/Scrumorg.png';

function Home() {
  const scrollImageStyle = {
    width: '100%', // Adjust the width as needed
    height: '50vh', // Adjust the height as needed
  };
  const imageStyle = {
    width: '100%', // Adjust the width as needed
    height: '30vh', // Adjust the height as needed
  };
  const buttonstyle = {
    position: 'absolute',
    bottom: "8%",
    right: "15%", zIndex: 1
  };

  return (
    <div>
      {/*Scrolling Images*/}
      <section>
        <Carousel>
          <Carousel.Item>
            <img src={Si1} className="d-block w-100" alt="First slide" style={scrollImageStyle} />
            <Carousel.Caption className="mb-4">
              <h3>About Us</h3>
              <p>
                Who We Are: We are your go-to Agile experts with master's degrees and decades of industry experience.
              </p>
              <p>
                What We Do: We are Agile experts providing you with our industry-leading 360° Assessment, coaching, and training.
              </p>
            </Carousel.Caption>
            <Button variant="light" style={buttonstyle}>Collaborate</Button>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Si2} className="d-block w-100" alt="Second slide" style={scrollImageStyle} />
            <Link to="/assessment">
              <Button variant="light" style={buttonstyle}>Schedule An Assessment</Button>
            </Link>
            <Carousel.Caption className="mb-4">
              <h3>Assessment</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Si3} className="d-block w-100" alt="Third slide" style={scrollImageStyle} />
            <Button variant="light" style={buttonstyle}>View Courses</Button>
            <Carousel.Caption className="mb-4">
              <h3>Courses</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Si4} className="d-block w-100" alt="Fourth slide" style={scrollImageStyle} />
            <Link to="/coaching">
              <Button variant="light" style={buttonstyle}>Our Offerings</Button>
            </Link>
            <Carousel.Caption className="mb-4">
              <h3>Coaching</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      {/*Our Services*/}
      <section className="py-4">
        <h3 className='mb-3'>Our Services</h3>
        <Container>
          <Row>
            <Col>
              <Card className='mb-4'>
                <Card.Body>
                  <Image className="d-block w-100" src={img} roundedCircle />
                  <Card.Text>
                    Apex agile experts can perform an Agile Maturity Assessment for your company. We thoroughly
                    study your business organization and measure how the software development practices you
                    follow conform to the Agile Manifesto's 12 Agile Principles...<Link to="/assessment">More</Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='mb-4'>
                <Card.Body>
                  <Image className="d-block w-100" src={img} roundedCircle />
                  <Card.Text>
                    Working one on one with your own technology leaders, Apex experts share our decades of Agile
                    expertise, with just the right level of sensitivity and suitability for your business needs...<Link to="/training">More</Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='mb-4'>
                <Card.Body>
                  <Image className="d-block w-100" src={img} roundedCircle />
                  <Card.Text>
                    Apex coursework will thoroughly prepare you for Agile certification. Having worked side-byside with the three elite certification agencies, we know just what you will need to gain
                    certification from the three important certification organizations SAFe, Scrum.org, and Scrum
                    Alliance...<Link to="/coaching">More</Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/*About Us*/}
      <section>
        <h3 className="py-4">About Us</h3>
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
              <p class="text-start">
                Apex is a boutique Agile consultancy with decades of software development experience. We
                grew up in the era of structured design methodologies, adapted our learning to the rapid
                development approaches, and graduated to Agile. Wherever you are in your software evolution,
                we are there to help in your journey.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/*Our Partners*/}
      <section className="py-4">
        <h3 className='mb-3'>Our Partners</h3>
        <Container>
          <Row>
            <Col>
              <a href="https://www.scrumalliance.org/" target="_blank" rel="noopener noreferrer">
                <img src={SA} className="d-block w-100" alt="logo" />
              </a>
            </Col>
            <Col>
              <a href="http://www.scaledagile.com/" target="_blank" rel="noopener noreferrer">
                <img src={SAFe} className="d-block w-100" alt="logo" />
              </a>
            </Col>
            <Col>
              <a href="http://scrum.org" target="_blank" rel="noopener noreferrer">
                <img src={Scrumorg} className="d-block w-100" alt="logo" />
              </a>
            </Col>
          </Row>
        </Container>
      </section >
      {/*Get Inspired*/}
      < section className="py-4" >
        <h3 className='mb-3'>Get Inspired</h3>
        <Carousel indicators={false}>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="h-100 justify-content-center align-items-center"
              gap={3}
            >
              <img src={img} className="d-block w-100" alt="First slide" style={imageStyle} />
              <img src={img} className="d-block w-100" alt="Second slide" style={imageStyle} />
              <img src={img} className="d-block w-100" alt="Third slide" style={imageStyle} />
              <img src={img} className="d-block w-100" alt="Second slide" style={imageStyle} />
            </Stack>
          </Carousel.Item>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="h-100 justify-content-center align-items-center"
              gap={3}
            >
              <img src={img} className="d-block w-100" alt="First slide" style={imageStyle} />
              <img src={img} className="d-block w-100" alt="Second slide" style={imageStyle} />
              <img src={img} className="d-block w-100" alt="Third slide" style={imageStyle} />
              <img src={img} className="d-block w-100" alt="First slide" style={imageStyle} />
            </Stack>
          </Carousel.Item>
        </Carousel>
      </section >
      {/*Sign Up*/}
      < section className="py-4" >
        <h3 className='mb-3'>Stay Connected With Us...</h3>
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
      </section >
      <Footer />
    </div >
  );
}

export default Home;
