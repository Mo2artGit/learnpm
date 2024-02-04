import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import Si1 from './img/si1.jpg';
import Si2 from './img/si2.jpg';
import Si3 from './img/si3.jpg';
import Si4 from './img/si4.jpg';

function Home() {
  const scrollImageStyle = {
    width: '100%', // Adjust the width as needed
    height: '400px', // Adjust the height as needed
  };

  return (
    <div>
      {/* Section 1 */}
      <section>
        <Carousel>
          <Carousel.Item>
            <img src={Si1} className="d-block w-100" alt="First slide" style={scrollImageStyle} />
            <Button variant="primary" style={{ position: 'absolute', bottom: 50, right: 50 }}>Collaborate</Button>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Si2} className="d-block w-100" alt="Second slide" style={scrollImageStyle} />
            <Button variant="primary" style={{ position: 'absolute', bottom: 50, right: 50 }}>Schedule An Assessment</Button>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Si3} className="d-block w-100" alt="Third slide" style={scrollImageStyle} />
            <Button variant="primary" style={{ position: 'absolute', bottom: 50, right: 50 }}>View Courses</Button>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Si4} className="d-block w-100" alt="Fourth slide" style={scrollImageStyle} />
            <Button variant="primary" style={{ position: 'absolute', bottom: 50, right: 50 }}>Our Offerings</Button>
            <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      {/* Section 2 */}
      <section>
        <p>This is space holder for Our service.</p>
      </section>
    </div>
  );
}

export default Home;
