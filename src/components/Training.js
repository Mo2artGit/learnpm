import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Row, Col } from 'react-bootstrap';
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
  // id should match the courseData.json
  const courses = [
    { id: 1, name: 'Professional Scrum Master Training', type: 'Scrum.org', certifyingBody: '', role: '' },
    { id: 2, name: 'CSM - Certified Scrum Master', type: 'Scrum Alliance', certifyingBody: '', role: '' },
    { id: 3, name: 'CSPO - Certified Scrum Product Owner', type: 'Scrum Alliance', certifyingBody: '', role: '' },
    { id: 4, name: 'CSD - Certified Scrum Developer', type: 'Scrum Alliance', certifyingBody: '', role: '' },
    { id: 5, name: 'Certified SAFe Agilist', type: 'Scaled Agile 5.0', certifyingBody: '', role: '' },
    { id: 6, name: 'Certified SAFe® Scrum Master', type: 'Scaled Agile 5.0', certifyingBody: '', role: '' },
    { id: 7, name: 'Certified SAFe® Product Owner / Product Manager', type: 'Scaled Agile 5.0', certifyingBody: '', role: '' },
    { id: 8, name: 'Certified SAFe® Government Practitioner', type: 'Scaled Agile 5.0', certifyingBody: '', role: '' },
    { id: 9, name: 'Certified SAFe® Program Consultant', type: 'Scaled Agile 5.0', certifyingBody: '', role: '' },
    { id: 10, name: 'Certified SAFe® Advanced Scrum Master', type: 'Scaled Agile 5.0', certifyingBody: '', role: '' },
    { id: 11, name: 'Certified SAFe® DevOps Practitioner', type: 'Scaled Agile 5.0', certifyingBody: '', role: '' },
    { id: 12, name: 'Certified SAFe® Architect', type: 'Scaled Agile 5.0', certifyingBody: '', role: '' },
    { id: 13, name: 'Certified SAFe® Practitioner', type: 'Scaled Agile 5.0', certifyingBody: '', role: '' },
    { id: 14, name: 'Certified SAFe® Release Train Engineer', type: 'Scaled Agile 5.0', certifyingBody: '', role: '' },
    { id: 15, name: 'Certified SAFe® Agile Software Engineer', type: 'Scaled Agile 5.0', certifyingBody: '', role: '' },
    { id: 16, name: 'Certified SAFe® Lean Portfolio Manager', type: 'Scaled Agile 5.0', certifyingBody: '', role: '' },
    { id: 17, name: 'Certified SAFe® Agile Product Manager', type: 'Scaled Agile 5.0', certifyingBody: '', role: '' },
    { id: 18, name: 'Professional Scrum Product Owner', type: 'Scrum.org', certifyingBody: '', role: '' },
    { id: 19, name: 'Professional Scrum Developer', type: 'Scrum.org', certifyingBody: '', role: '' },
    { id: 20, name: 'Certified Agile Leadership (CAL1)', type: 'Leadership', certifyingBody: '', role: '' },
    { id: 21, name: 'Project Management Professional', type: 'PMI', certifyingBody: '', role: '' },
    { id: 22, name: 'PMI Agile Certified Practitioner', type: 'PMI', certifyingBody: '', role: '' },
    { id: 23, name: 'Value Stream Workshop', type: 'Corporate Training', certifyingBody: '', role: '' },
    { id: 24, name: 'SAFe® Portfolio Management', type: 'Corporate Training', certifyingBody: '', role: '' },
    { id: 25, name: 'Program Increment Workshop', type: 'Corporate Training', certifyingBody: '', role: '' },
    { id: 26, name: 'Inspect & Adapt', type: 'Corporate Training', certifyingBody: '', role: '' },
    { id: 27, name: 'Product Management Workshop', type: 'Corporate Training', certifyingBody: '', role: '' },
    { id: 28, name: 'Team Building', type: 'Corporate Training', certifyingBody: '', role: '' },
    { id: 29, name: 'Customized Scrum/Kanban Workshop', type: 'Corporate Training', certifyingBody: '', role: '' },
  ];

  // State for dropdown selections
  const [courseType, setCourseType] = useState('');
  const [certifyingBody, setCertifyingBody] = useState('');
  const [role, setRole] = useState('');

  // Filtered courses based on dropdown selections
  const filteredCourses = courses.filter(course => {
    return (!courseType || course.type === courseType) &&
      (!certifyingBody || course.certifyingBody === certifyingBody) &&
      (!role || course.role === role);
  });

  // Unique list of titles based on filtered courses
  const filteredTitles = Array.from(new Set(filteredCourses.map(course => course.type)));

  // Unique list of types
  const certifyingTypes = Array.from(new Set(courses.map(course => course.type)));
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
        <Row className="justify-content-start">
          <Col>
            <CustomDropdown
              label="Course Type"
              options={certifyingTypes}
              selectedOption={courseType}
              setSelectedOption={setCourseType}
              onReset={() => setCourseType('')}
            />
          </Col>
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
              <h4>{title}</h4>
              <div className="d-flex flex-wrap ms-5">
                {
                  filteredCourses.filter(course => course.type === title).map(course => (
                    <div key={course.id} className='me-3 mb-2'>
                      <Link to={`/course/${course.id}`}>
                        <Button variant="outline-primary" >{course.name}</Button>
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
