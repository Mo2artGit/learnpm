import React from 'react';
import img from './img/img.jpg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Assessment() {
  return (
    <div>
      <h1>Assessment</h1>
      <img src={img} alt="img" style={{ width: '30%' }} />
      <div className="d-flex justify-content-end me-5">
        <Link to="/contact">
          <Button variant="outline-primary" >Contact Us</Button>
        </Link>
      </div>
      <div className="text-start ms-5">
        <h5>Why Assessment?</h5>
        <p>...</p>
        <h5>What Are The Different Type of Assessment?</h5>
        <ul>
          <li className="fs-5">Leadership Assessment</li>
          <p>...</p>
          <li className="fs-5">Organization Assessment</li>
          <p>...</p>
          <li className="fs-5">Portfolio Assessment</li>
          <p>...</p>
          <li className="fs-5">Program Assessment</li>
          <p>...</p>
          <li className="fs-5">Team Assessment</li>
          <p>...</p>
          <li className="fs-5">Individual Assessment</li>
          <p>...</p>
        </ul>
      </div>
      <div className="mb-4">
        <Link to="/contact">
          <Button variant="outline-primary" >Contact Us</Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Assessment;
