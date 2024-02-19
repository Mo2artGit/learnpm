import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Row, Col } from 'react-bootstrap';

function CustomDropdown({ options, label, selectedOption, setSelectedOption, onReset }) {
  const handleReset = () => {
    setSelectedOption('');
    if (onReset) {
      onReset();
    }
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
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
  // Sample list of courses
  const courses = [
    { id: 1, name: 'Value Stream Workshop', type: 'Type 1', certifyingBody: 'Body 1', role: 'Role 1' },
    { id: 2, name: 'SAFe® Portfolio Management', type: 'Type 2', certifyingBody: 'Body 1', role: 'Role 2' },
    { id: 3, name: 'Program Increment Workshop', type: 'Type 1', certifyingBody: 'Body 2', role: 'Role 3' },
    // Add more courses as needed
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
          <div className="text-start mx-5" key={title}>
            <h2>{title}</h2>
            <div className="d-flex flex-wrap">
              {
                filteredCourses.filter(course => course.type === title).map(course => (
                  <div key={course.id}>
                    <h5>
                      <Link to={`/course/${course.id}`}>{course.name}</Link>
                    </h5>
                    <p>Name:{course.name} Type: {course.type}, Certifying Body: {course.certifyingBody}, Role: {course.role}</p>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div >
  );
}


export default Training;
