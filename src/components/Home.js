import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
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
            <Button variant="primary" style={{ position: 'absolute', bottom: "10%", right: "20%", zIndex: 1 }}>Collaborate</Button>
            <Carousel.Caption>
              <h3>About Us</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Si2} className="d-block w-100" alt="Second slide" style={scrollImageStyle} />
            <Button variant="primary" style={{ position: 'absolute', bottom: "10%", right: "20%", zIndex: 1 }}>Schedule An Assessment</Button>
            <Carousel.Caption>
              <h3>Assessment</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Si3} className="d-block w-100" alt="Third slide" style={scrollImageStyle} />
            <Button variant="primary" style={{ position: 'absolute', bottom: "10%", right: "20%", zIndex: 1 }}>View Courses</Button>
            <Carousel.Caption>
              <h3>Courses</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Si4} className="d-block w-100" alt="Fourth slide" style={scrollImageStyle} />
            <Button variant="primary" style={{ position: 'absolute', bottom: "10%", right: "20%", zIndex: 1 }}>Our Offerings</Button>
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
        <h2>Our Services</h2>
        <p>This is space holder for Our service.</p>
      </section>
      {/*About Us*/}
      <section>
        <h2>About Us</h2>
        <p>This is space holder for About Us.</p>
      </section>
      {/*Our Partners*/}
      <section>
        <h2>Our Partners</h2>
        <p>This is space holder for Our Partners.</p>
      </section>
      {/*Get Inspired*/}
      <section>
        <h2>Get Inspired</h2>
        <p>This is space holder for Get Inspired.</p>
      </section>
      <Footer />
    </div >
  );
}

export default Home;
