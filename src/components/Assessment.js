import React from 'react';
import img from './img/img.jpg';
import { Button } from 'react-bootstrap';


function Assessment() {
  return (
    <div>
      <h1>Assessment</h1>
      <img src={img} alt="img" style={{ width: '30%' }} />
      <p>This is the Assessment page.</p>
      <Button variant="light" >Contact Us</Button>
      <div className="d-flex justify-content-start">
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </div>
      <Button variant="light" >Contact Us</Button>
    </div>
  );
}

export default Assessment;
