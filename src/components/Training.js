import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Dropdown, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import Img from './img/si3.jpg';

function CustomDropdown({ options, label, selectedOption, setSelectedOption, onReset }) {
  const handleReset = () => {
    setSelectedOption('');
    if (onReset) {
      onReset();
    }
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        {selectedOption ? selectedOption : label}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {options.map(option => (
          <Dropdown.Item
            key={option}
            active={selectedOption === option}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </Dropdown.Item>
        ))}
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleReset}>Reset</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function Training() {

  // import all logos
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
      return null; // Return value to satisfy map method
    });
    return images;
  }
  const images = importAll(require.context('./img/course_logo', false, /\.(png|jpe?g|svg)$/));


  // id should match the courseData.json
  const courses = [
    { id: 1, name: 'Professional Scrum Master Training', certifyingBody: 'Scrum.org', role: 'Scrum Master', logo: images['cl1.png'] },
    { id: 2, name: 'CSM - Certified Scrum Master', certifyingBody: 'Scrum Alliance', role: 'Scrum Master', logo: images['cl2.png'] },
    { id: 3, name: 'CSPO - Certified Scrum Product Owner', certifyingBody: 'Scrum Alliance', role: 'Product Owner', logo: images['cl3.png'] },
    { id: 4, name: 'CSD - Certified Scrum Developer', certifyingBody: 'Scrum Alliance', role: 'Developer', logo: images['cl4.png'] },
    { id: 5, name: 'Certified SAFe Agilist', certifyingBody: 'Scaled Agile 5.0', role: '', logo: images['cl5.png'] },
    { id: 6, name: 'Certified SAFe® Scrum Master', certifyingBody: 'Scaled Agile 5.0', role: 'Scrum Master', logo: images['cl6.png'] },
    { id: 7, name: 'Certified SAFe® Product Owner / Product Manager', certifyingBody: 'Scaled Agile 5.0', role: 'Product Owner', logo: images['cl7.png'] },
    { id: 8, name: 'Certified SAFe® Government Practitioner', certifyingBody: 'Scaled Agile 5.0', role: '', logo: images['cl8.png'] },
    { id: 9, name: 'Certified SAFe® Program Consultant', certifyingBody: 'Scaled Agile 5.0', role: '', logo: images['cl9.png'] },
    { id: 10, name: 'Certified SAFe® Advanced Scrum Master', certifyingBody: 'Scaled Agile 5.0', role: 'Scrum Master', logo: images['cl10.png'] },
    { id: 11, name: 'Certified SAFe® DevOps Practitioner', certifyingBody: 'Scaled Agile 5.0', role: '', logo: images['cl11.png'] },
    { id: 12, name: 'Certified SAFe® Architect', certifyingBody: 'Scaled Agile 5.0', role: '', logo: images['cl12.png'] },
    { id: 13, name: 'Certified SAFe® Practitioner', certifyingBody: 'Scaled Agile 5.0', role: '', logo: images['cl13.png'] },
    { id: 14, name: 'Certified SAFe® Release Train Engineer', certifyingBody: 'Scaled Agile 5.0', role: '', logo: images['cl14.png'] },
    { id: 15, name: 'Certified SAFe® Agile Software Engineer', certifyingBody: 'Scaled Agile 5.0', role: '', logo: images['cl15.png'] },
    { id: 16, name: 'Certified SAFe® Lean Portfolio Manager', certifyingBody: 'Scaled Agile 5.0', role: '', logo: images['cl16.png'] },
    { id: 17, name: 'Certified SAFe® Agile Product Manager', certifyingBody: 'Scaled Agile 5.0', role: '', logo: images['cl17.png'] },
    { id: 18, name: 'Professional Scrum Product Owner', certifyingBody: 'Scrum.org', role: 'Product Owner', logo: images['cl18.png'] },
    { id: 19, name: 'Professional Scrum Developer', certifyingBody: 'Scrum.org', role: 'Developer', logo: images['cl19.png'] },
    { id: 20, name: 'Certified Agile Leadership (CAL1)', certifyingBody: 'Leadership', role: '', logo: images['cl20.png'] },
    { id: 21, name: 'Project Management Professional', certifyingBody: 'PMI', role: '', logo: images['cl21.png'] },
    { id: 22, name: 'PMI Agile Certified Practitioner', certifyingBody: 'PMI', role: '', logo: images['cl22.png'] },
    { id: 23, name: 'Value Stream Workshop', certifyingBody: 'Corporate Training', role: '', logo: images['cl23.jpeg'] },
    { id: 24, name: 'SAFe® Portfolio Management', certifyingBody: 'Corporate Training', role: '', logo: images['cl24.jpeg'] },
    { id: 25, name: 'Program Increment Workshop', certifyingBody: 'Corporate Training', role: '', logo: images['cl25.jpeg'] },
    { id: 26, name: 'Inspect & Adapt', certifyingBody: 'Corporate Training', role: '', logo: images['cl26.jpeg'] },
    { id: 27, name: 'Product Management Workshop', certifyingBody: 'Corporate Training', role: '', logo: images['cl27.jpeg'] },
    { id: 28, name: 'Team Building', certifyingBody: 'Corporate Training', role: '', logo: images['cl28.jpeg'] },
    { id: 29, name: 'Customized Scrum/Kanban Workshop', certifyingBody: 'Corporate Training', role: '', logo: images['cl29.jpeg'] },
  ];

  // State for dropdown selections
  const [certifyingBody, setCertifyingBody] = useState('');
  const [role, setRole] = useState('');

  // Filtered courses based on dropdown selections
  const filteredCourses = courses.filter(course => {
    return (!certifyingBody || course.certifyingBody === certifyingBody) &&
      (!role || course.role === role);
  });

  // Unique list of titles based on filtered courses
  const filteredTitles = Array.from(new Set(filteredCourses.map(course => course.certifyingBody)));
  // Unique list of certifying bodies
  const certifyingBodies = Array.from(new Set(courses.map(course => course.certifyingBody)));
  // Unique list of roles
  const roles = Array.from(new Set(courses.map(course => course.role)));

  return (
    <div>
      <div style={{ minHeight: '75vh' }}>
        <div style={{ height: '20vh', overflow: 'hidden' }} className='mb-2'>
          <img src={Img} alt="Cropped Img" style={{ width: '100%', objectFit: 'cover' }} />
        </div>
        <Row className="justify-content-start w-100">
          <Col>
            <CustomDropdown
              label="Certifying Body"
              options={certifyingBodies}
              selectedOption={certifyingBody}
              setSelectedOption={setCertifyingBody}
              onReset={() => setCertifyingBody('')}
            />
          </Col>
          <Col>
            <CustomDropdown
              label="Role"
              options={roles}
              selectedOption={role}
              setSelectedOption={setRole}
              onReset={() => setRole('')}
            />
          </Col>
        </Row>

        {/* Display filtered courses */}
        {
          filteredTitles.map(title => (
            <div className="text-start mx-5 my-3" key={title}>
              <div className="mb-2">
                <h4>{title}</h4>
                <hr />
              </div>
              <div className="text-center d-flex flex-wrap ms-5">
                {
                  filteredCourses.filter(course => course.certifyingBody === title).map(course => (
                    <div key={course.id} className='me-3 mb-2'>
                      <Link to={`/course/${course.id}`} style={{ textDecoration: 'none' }}>
                        <Card style={{ width: '18rem', height: '21rem' }}>
                          <Card.Img variant="top" className='my-2 mx-auto' src={course.logo} style={{ width: '90%' }}/>
                          <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">{course.name}</Card.Subtitle>
                          </Card.Body>
                        </Card>
                      </Link>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div >
      <Footer />
    </div>
  );
}


export default Training;
