import React from 'react';
import img from './img/img.jpg';

function Assessment() {
  return (
    <div>
      <h1>Assessment</h1>
      <img src={img} alt="img" style={{ width: '30%' }} />
      <p>This is the Assessment page.</p>
      <div className="d-flex justify-content-start">
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </div>

    </div>
  );
}

export default Assessment;
