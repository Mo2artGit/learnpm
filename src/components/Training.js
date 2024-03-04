import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import Img from './img/si3.jpg';
import SA from "./img/SA.png";
import SO from "./img/Scrumorg.png";
import SAF from "./img/SAFe.png";
import PMI from "./img/pmi.svg";

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
    { id: 1, name: 'Professional Scrum Master Training', certifyingBody: 'Scrum.org', role: 'Scrum Master' },
    { id: 2, name: 'CSM - Certified Scrum Master', certifyingBody: 'Scrum Alliance', role: 'Scrum Master' },
    { id: 3, name: 'CSPO - Certified Scrum Product Owner', certifyingBody: 'Scrum Alliance', role: 'Product Owner' },
    { id: 4, name: 'CSD - Certified Scrum Developer', certifyingBody: 'Scrum Alliance', role: 'Developer' },
    { id: 5, name: 'Certified SAFe Agilist', certifyingBody: 'Scaled Agile 5.0', role: '' },
    { id: 6, name: 'Certified SAFe® Scrum Master', certifyingBody: 'Scaled Agile 5.0', role: 'Scrum Master' },
    { id: 7, name: 'Certified SAFe® Product Owner / Product Manager', certifyingBody: 'Scaled Agile 5.0', role: 'Product Owner' },
    { id: 8, name: 'Certified SAFe® Government Practitioner', certifyingBody: 'Scaled Agile 5.0', role: '' },
    { id: 9, name: 'Certified SAFe® Program Consultant', certifyingBody: 'Scaled Agile 5.0', role: '' },
    { id: 10, name: 'Certified SAFe® Advanced Scrum Master', certifyingBody: 'Scaled Agile 5.0', role: 'Scrum Master' },
    { id: 11, name: 'Certified SAFe® DevOps Practitioner', certifyingBody: 'Scaled Agile 5.0', role: '' },
    { id: 12, name: 'Certified SAFe® Architect', certifyingBody: 'Scaled Agile 5.0', role: '' },
    { id: 13, name: 'Certified SAFe® Practitioner', certifyingBody: 'Scaled Agile 5.0', role: '' },
    { id: 14, name: 'Certified SAFe® Release Train Engineer', certifyingBody: 'Scaled Agile 5.0', role: '' },
    { id: 15, name: 'Certified SAFe® Agile Software Engineer', certifyingBody: 'Scaled Agile 5.0', role: '' },
    { id: 16, name: 'Certified SAFe® Lean Portfolio Manager', certifyingBody: 'Scaled Agile 5.0', role: '' },
    { id: 17, name: 'Certified SAFe® Agile Product Manager', certifyingBody: 'Scaled Agile 5.0', role: '' },
    { id: 18, name: 'Professional Scrum Product Owner', certifyingBody: 'Scrum.org', role: 'Product Owner' },
    { id: 19, name: 'Professional Scrum Developer', certifyingBody: 'Scrum.org', role: 'Developer' },
    { id: 20, name: 'Certified Agile Leadership (CAL1)', certifyingBody: 'Leadership', role: '' },
    { id: 21, name: 'Project Management Professional', certifyingBody: 'PMI', role: '' },
    { id: 22, name: 'PMI Agile Certified Practitioner', certifyingBody: 'PMI', role: '' },
    { id: 23, name: 'Value Stream Workshop', certifyingBody: 'Corporate Training', role: '' },
    { id: 24, name: 'SAFe® Portfolio Management', certifyingBody: 'Corporate Training', role: '' },
    { id: 25, name: 'Program Increment Workshop', certifyingBody: 'Corporate Training', role: '' },
    { id: 26, name: 'Inspect & Adapt', certifyingBody: 'Corporate Training', role: '' },
    { id: 27, name: 'Product Management Workshop', certifyingBody: 'Corporate Training', role: '' },
    { id: 28, name: 'Team Building', certifyingBody: 'Corporate Training', role: '' },
    { id: 29, name: 'Customized Scrum/Kanban Workshop', certifyingBody: 'Corporate Training', role: '' },
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
                {title === 'Scrum.org' && <img src={SO} alt="Scrum.org" style={{ width: '15%' }} />}
                {title === 'Scrum Alliance' && <img src={SA} alt="Scrum Alliance" style={{ width: '15%' }} />}
                {title === 'Scaled Agile 5.0' && <img src={SAF} alt="Scaled Agile 5.0" style={{ width: '15%' }} />}
                {title === 'Leadership' && <h4>{title}</h4>}
                {title === 'PMI' && <img src={PMI} alt="PMI" style={{ width: '15%' }} />}
                {title === 'Corporate Training' && <h4>{title}</h4>}
                <hr />
              </div>
              <div className="d-flex flex-wrap ms-5">
                {
                  filteredCourses.filter(course => course.certifyingBody === title).map(course => (
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
