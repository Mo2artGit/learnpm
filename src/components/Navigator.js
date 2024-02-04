import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/" className="ms-4">Learn PM</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link as={Link} to="/assessment">Assessment</Nav.Link>
          <NavDropdown title="Training" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/">Public</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/">Corporate</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/upcoming">Upcoming Courses</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/coaching">Coaching</Nav.Link>
          <Nav.Link as={Link} to="/rescources">Rescources</Nav.Link>
          <Navbar.Text>|</Navbar.Text>
        </Nav>
        <div className="d-flex flex-column align-items-center">
          <Button variant="outline-primary" className="mb-2">View Courses</Button>
          <small>F T L U</small>
        </div>

      </Navbar.Collapse>
    </Navbar>

  );
}

export default NavigationBar;

