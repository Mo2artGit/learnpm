import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import courseData from './data/course_data.json';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import reviewImage1 from './img/review1.png';
import reviewImage2 from './img/review2.png';
import reviewImage3 from './img/review3.png';
import reviewImage4 from './img/review4.png';

function Courses() {

  const { courseId } = useParams();
  const course = courseData[courseId];

  const [logoSrc, setLogoSrc] = useState('');
  useEffect(() => {
    import(`${course.logo}`)
      .then(image => setLogoSrc(image.default))
      .catch(error => console.error('Error loading image:', error));
  }, [course.logo]);

  const [photoSrc, setphotoSrc] = useState('');
  useEffect(() => {
    import(`${course.photo}`)
      .then(image => setphotoSrc(image.default))
      .catch(error => console.error('Error loading image:', error));
  }, [course.photo]);

  if (!course) {
    // Handle case where the course ID is not found
    return <div>Course not found</div>;
  }

  const whatLines = course.what.split('\n').map((line, index) => (
    <p key={index}>{line}</p>
  ));

  const reviewImages = [reviewImage1, reviewImage2, reviewImage3, reviewImage4];

  return (
    <div>
      <div className='py-4'>
        <Container>
          <Row>
            <Col xs={3}>
              {logoSrc ? (
                <img src={logoSrc} alt="logo" className="img-fluid" />
              ) : (
                <div>Logo not available</div>
              )}
            </Col>
            <Col xs={9} className='text-start'>
              <h4>{course.title}</h4>
              <p>Apr 09, 2020 - Today</p>
              <p>Location: 725 Commonwealth Ave, Boston, MA 02215</p>
              <Link to="/register">
                <Button variant='primary' className="w-25">Register</Button>
              </Link>
            </Col>
          </Row>
        </Container>
        <Container className='text-start mt-3'>
          <Row>
            <Col xs={8}>
              <h5>About This Course</h5>
              <p>{course.about}</p>
              <h5>What You Learn</h5>
              <p>{whatLines}</p>
              <h5>Meet the Instructors</h5>
              <Row>
                <Col xs={2}>
                  <img src={photoSrc} alt="instructor" className="img-fluid" />
                </Col>
                <Col xs={10}>
                  <p>{course.instructor}</p>
                </Col>
              </Row>
            </Col>
            <Col xs={1}>
              <div style={{ borderRight: '1px solid', borderColor: 'Gray', height: '100%' }}></div>
            </Col>
            <Col xs={3}>
              <p>Length: 2 hours</p>
              <p>Effort Duration: {course.duration}</p>
              <p>Cost: {course.cost}</p>
              <h5>Reviews</h5>
              {course.reviews.map((review, index) => (
                <p key={index}>
                  <Row>
                    <Col xs={3}>
                      <Image src={reviewImages[index]} alt="review" roundedCircle className="img-fluid" />
                    </Col>
                    <Col xs={9}>
                      <p>{review}</p>
                    </Col>
                  </Row>
                </p>
              ))}
            </Col>
          </Row>
        </Container>
        <Link to="/register">
          <Button variant='primary' className="w-25 mt-3">Register</Button>
        </Link>
      </div>
    </div>
  );
}

export default Courses;
