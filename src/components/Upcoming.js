import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Dropdown, DropdownButton, Card } from 'react-bootstrap';
import courseData from './data/upcoming_data.json';
import { FaFilter } from "react-icons/fa";
import Img from './img/si3.jpg';

const UpcomingCourses = () => {
  const initialFilters = {
    courseType: '',
    dateRange: {
      start: '',
      end: '',
    },
    location: '',
    instructor: '',
  };
  const [filteredCourses, setFilteredCourses] = useState(courseData);
  const [filters, setFilters] = useState(initialFilters);
  const [showCalendar, setShowCalendar] = useState(false);
  const [logoSources, setLogoSources] = useState({});

  useEffect(() => {
    // Dynamically import the course logo images
    const importAllLogos = async () => {
      const logos = await Promise.all(
        courseData.map(async (course) => {
          try {
            const logo = await import(`${course.logo}`);
            return { [course.id]: logo.default };
          } catch (error) {
            console.error(`Error loading image for course ${course.id}:`, error);
            return { [course.id]: '' };
          }
        })
      );
      setLogoSources(Object.assign({}, ...logos));
    };
    importAllLogos();
  }, []);

  const handleFilterChange = (filterName, value) => {
    const updatedFilters = { ...filters, [filterName]: value };
    setFilters(updatedFilters);

    const filtered = courseData.filter((course) => {
      const dateRange =
        updatedFilters.dateRange.start === '' ||
        updatedFilters.dateRange.end === '' ||
        (new Date(course.date) >= new Date(updatedFilters.dateRange.start) &&
          new Date(course.date) <= new Date(updatedFilters.dateRange.end));
      return (
        (updatedFilters.courseType === '' || course.type === updatedFilters.courseType) &&
        dateRange &&
        (updatedFilters.location === '' || course.location === updatedFilters.location) &&
        (updatedFilters.instructor === '' || course.instructor === updatedFilters.instructor)
      );
    });
    setFilteredCourses(filtered);
  };

  const handleResetFilters = () => {
    setFilters(initialFilters);
    setFilteredCourses(courseData);
    setShowCalendar(false);
  };

  return (
    <div style={{ minHeight: '75vh' }}>
      <div style={{ height: '20vh', overflow: 'hidden' }} className='mb-2'>
        <img src={Img} alt="Cropped Img" style={{ width: '100%', objectFit: 'cover' }} />
      </div>
      <div className='ps-5 overflow-x-hidden'>
        <Row className="mt-5">
          <Col xs={3} style={{ maxWidth: '300px', flexBasis: '300px', flexGrow: 0, flexShrink: 0 }}>
            <div className="p-3 bg-secondary rounded">
              <h5 className='text-light'><FaFilter /> Filter</h5>
              {/* Course Type Filter */}
              <DropdownButton variant="dark" title="Course Type" onSelect={(e) => handleFilterChange('courseType', e)} className="d-grid mb-3">
                <Dropdown.Item eventKey="">All</Dropdown.Item>
                <Dropdown.Item eventKey="Scrum Master">Scrum Master</Dropdown.Item>
                <Dropdown.Item eventKey="Product Owner">Product Owner</Dropdown.Item>
                <Dropdown.Item eventKey="Developer">Developer</Dropdown.Item>
              </DropdownButton>

              {/* Calendar Filter */}
              <Button variant="dark" onClick={() => setShowCalendar(!showCalendar)} style={{ cursor: 'pointer' }} className="w-100 mb-3">
                Calendar
              </Button>
              {showCalendar && (
                <div className="d-flex justify-content-between mb-3">
                  <input type="date" value={filters.dateRange.start} onChange={(e) => handleFilterChange('dateRange', { ...filters.dateRange, start: e.target.value })} className="form-control me-2" />
                  <input type="date" value={filters.dateRange.end} onChange={(e) => handleFilterChange('dateRange', { ...filters.dateRange, end: e.target.value })} className="form-control" />
                </div>
              )}

              {/* Location Filter */}
              <DropdownButton variant="dark" title="Location" onSelect={(e) => handleFilterChange('location', e)} className="d-grid mb-3">
                <Dropdown.Item eventKey="">All</Dropdown.Item>
                <Dropdown.Item eventKey="New York">New York</Dropdown.Item>
                <Dropdown.Item eventKey="San Francisco">San Francisco</Dropdown.Item>
                <Dropdown.Item eventKey="Boston">Boston</Dropdown.Item>
              </DropdownButton>

              {/* Instructor Filter */}
              <DropdownButton variant="dark" title="Instructor" onSelect={(e) => handleFilterChange('instructor', e)} className="d-grid mb-3">
                <Dropdown.Item eventKey="">All</Dropdown.Item>
                <Dropdown.Item eventKey="John Doe">John Doe</Dropdown.Item>
                <Dropdown.Item eventKey="Raj Heda">Raj Heda</Dropdown.Item>
              </DropdownButton>

              {/* Reset Button */}
              <Button variant="light" onClick={handleResetFilters} className="w-100">
                Reset
              </Button>
            </div>
          </Col>

          <Col xs={9}>
            <div>
              {/* Display the list of filtered courses */}
              {filteredCourses.map((course) => (
                <Col key={course.id}>
                  <Card className="pt-2 mb-3 d-flex flex-row align-items-center">
                    <Card.Img variant="top" src={logoSources[course.id] || ''} className="ms-5" style={{ objectFit: 'contain', width: '150px', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title>{course.name}</Card.Title>
                      <Card.Text>Location: {course.location}</Card.Text>
                      <Card.Text>Instructor: {course.instructor}</Card.Text>
                      <Card.Text>Date: {course.date}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UpcomingCourses;
