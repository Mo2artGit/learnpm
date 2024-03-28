import React from 'react';
import { Image, Form, Row, Col, Card, Carousel, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Si1 from './img/si1.jpg';
import Si2 from './img/si2.jpg';
import Si3 from './img/si3.jpg';
import Si4 from './img/si4.jpg';
import AssessmentImg from './img/assessment.jpg';
import TrainingImg from './img/training.jpg';
import CoachingImg from './img/coaching.jpg';
import SA from './img/SA.png';
import SAFe from './img/SAFe.png';
import Scrumorg from './img/Scrumorg.png';

function Home() {
  const scrollImageStyle = {
    width: '100%',
    height: 'auto',
  };

  const buttonstyle = {
    position: 'absolute',
    bottom: "15%",
    right: "15%", zIndex: 1
  };

  const reviews = [
    {
      id: 1,
      avatar: 'https://i.pravatar.cc/400?img=61',
      name: 'John Doe',
      review: 'Valuable, well-instructed course to help pass the PMP the first time! Raj was engaging and did a great job leading the course. The materials provided really helped me get into the mindset to take the PMP.',
    },
    {
      id: 2,
      avatar: 'https://i.pravatar.cc/400?img=43',
      name: 'Jane Smith',
      review: 'The course was engaging and covered all of the pertinent material required to easily pass the PMP certification test. Raj was a great instructor and very engaged with the course and participants both during and after the course.',
    },
    {
      id: 3,
      avatar: 'https://i.pravatar.cc/400?img=52',
      name: 'Bob Johnson',
      review: 'The sessions were easy to schedule, and you get a ton of value out of the course materials. The instructors really go out of their way to make sure you understand the content, and manage to offer real world examples for why one answer is more correct than the others.',
    },
    {
      id: 4,
      avatar: 'https://i.pravatar.cc/400?img=11',
      name: 'Logan Jonathan',
      review: 'The 4 day boot camp was excellent and very informative. I felt very prepared after performing the practice exams especially in learning mode to get instant feedback. I passed the exam above target and in only 3 hours due to the prep I received. Highly recommend and 5 stars.',
    },
    {
      id: 5,
      avatar: 'https://i.pravatar.cc/400?img=5',
      name: 'Otania Baker',
      review: 'Great course. Fast-paced, challenging, but yet rewarding once you realize you have all the available PMTI tools at your disposal. Raj Senapathy is an incredible instructor that brings forth his tacit and explicit knowledge to the course. The tools and knowledge transfer from Raj allowed me to pass this exam on the first attempt! Hats off to the PMTI team!',
    },
    {
      id: 6,
      avatar: 'https://i.pravatar.cc/400?img=8',
      name: 'Alan Fakename',
      review: 'The materials provided for after-class prep were top-notch. I could not have passed without all of the testing materials and support through PMI. Raj was an amazing instructor and I also took advantage of the bi-weekly PMP Exam Review Session.',
    },
    {
      id: 7,
      avatar: 'https://i.pravatar.cc/400?img=7',
      name: 'Joe Iceman',
      review: 'I took PMTI in person boot camp workshop and utilized their associated online materials that come with the course. The instructor was fantastic. Very fun, patient and super knowledgeable. Best part was excellent practice question sets and mock exams that had questions true to the pmi exam. Almost identical in some cases.',
    },
    {
      id: 8,
      avatar: 'https://i.pravatar.cc/400?img=4',
      name: 'Rob Queue',
      review: 'PMTI provided a professional course the prepared me to take the PMP certification exam. This preparation was only enhanced by the number of tools provided by PMTI to quell any doubts I had. Would recommend to anyone.',
    },
  ];

  const chunkReviews = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  const reviewChunks = chunkReviews(reviews, 4);

  return (
    <div>
      {/*Scrolling Images*/}
      <section>
        <Carousel>
          <Carousel.Item>
            <img src={Si1} className="d-block w-100" alt="First slide" style={scrollImageStyle} />
            <Carousel.Caption style={{ bottom: "18%" }}>
              <h3>About Us</h3>
              <p>
                Who We Are: We are your go-to Agile experts with master's degrees and decades of industry experience.
              </p>
              <p>
                What We Do: We are Agile experts providing you with our industry-leading 360° Assessment, coaching, and training.
              </p>
            </Carousel.Caption>
            <Button variant="outline-light" style={buttonstyle}>Collaborate</Button>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Si2} className="d-block w-100" alt="Second slide" style={scrollImageStyle} />
            <Link to="/assessment">
              <Button variant="outline-light" style={buttonstyle}>Schedule An Assessment</Button>
            </Link>
            <Carousel.Caption style={{ bottom: "18%" }}>
              <h3>Assessment</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Si3} className="d-block w-100" alt="Third slide" style={scrollImageStyle} />
            <Link to="/training">
              <Button variant="outline-light" style={buttonstyle}>View Courses</Button>
            </Link>
            <Carousel.Caption style={{ bottom: "18%" }}>
              <h3>Courses</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Si4} className="d-block w-100" alt="Fourth slide" style={scrollImageStyle} />
            <Link to="/coaching">
              <Button variant="outline-light" style={buttonstyle}>Our Offerings</Button>
            </Link>
            <Carousel.Caption style={{ bottom: "18%" }}>
              <h3>Coaching</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      {/*Our Services*/}
      <section className="py-5">
        <h2 className='pb-3 fst-italic'>Our Services</h2>
        <Container>
          <Row>
            <Col>
              <Card className='h-100'>
                <Card.Body>
                  <Image className="d-block w-100 mb-3" src={AssessmentImg} />
                  <Card.Text>
                    Learn PM agile experts can perform an Agile Maturity Assessment for your company. We thoroughly
                    study your business organization and measure how the software development practices you
                    follow conform to the Agile Manifesto's 12 Agile Principles...<Link to="/assessment" style={{ color: '#999c9a', textDecoration: 'none' }}>More</Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='h-100'>
                <Card.Body>
                  <Image className="d-block w-100 mb-3" src={TrainingImg} />
                  <Card.Text>
                    Working one on one with your own technology leaders, Learn PM experts share our decades of Agile
                    expertise, with just the right level of sensitivity and suitability for your business needs...<Link to="/training" style={{ color: '#999c9a', textDecoration: 'none' }}>More</Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='h-100'>
                <Card.Body>
                  <Image className="d-block w-100 mb-3" src={CoachingImg} />
                  <Card.Text>
                    Learn PM coursework will thoroughly prepare you for Agile certification. Having worked side-byside with the three elite certification agencies, we know just what you will need to gain
                    certification from the three important certification organizations SAFe, Scrum.org, and Scrum
                    Alliance...<Link to="/coaching" style={{ color: '#999c9a', textDecoration: 'none' }}>More</Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <hr />
      {/*About Us*/}
      <section className="py-5">
        <h2 className="pt-5 pb-3 fst-italic">About Us</h2>
        <Container className="pb-5 fs-5">
          <Row>
            <Col xs={3}>
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
            <Col xs={9} className=' d-flex align-items-center'>
              <p class="text-start">
                Learn PM is a boutique Agile consultancy with decades of software development experience. We
                grew up in the era of structured design methodologies, adapted our learning to the rapid
                development approaches, and graduated to Agile. Wherever you are in your software evolution,
                we are there to help in your journey.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <hr />
      {/*Our Partners*/}
      <section className="py-5">
        <h2 className='pb-3 fst-italic'>Our Partners</h2>
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
      <hr />
      {/*Get Inspired*/}
      <section className="py-5">
        <h2 className='pb-3 fst-italic'>Get Inspired</h2>
        <Carousel indicators={false} className='mx-5' style={{height: '18rem'}}>
          {reviewChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-around">
                {chunk.map((review) => (
                  <div key={review.id} className="text-center mx-2">
                    <img
                      className="rounded-circle mb-2"
                      src={review.avatar}
                      alt={review.name}
                      width="64"
                      height="64"
                    />
                    <h6>{review.name}</h6>
                    <p>{review.review}</p>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section >
      <hr />
      {/*Sign Up*/}
      < section className="py-5" >
        <h3 className='pb-3 fst-italic'>Stay Connected With Us...</h3>
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
          <Row className='mt-2'>
            <Col xs={12}>
              <Button variant="secondary" className="w-25" type="submit">
                Sign Up
              </Button>
            </Col>
          </Row>
        </Container>
      </section >
    </div >
  );
}

export default Home;
