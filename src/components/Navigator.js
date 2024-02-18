import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from './img/learnpm.jpg';

function NavigationBar() {
  return (
    <Navbar className="px-4" bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src={Logo}
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="Learn PM logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
          <Nav.Link as={Link} to="/assessment">Assessment</Nav.Link>
          <NavDropdown title="Training" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/training">Public</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/training">Corporate</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/upcoming">Upcoming Courses</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/coaching">Coaching</Nav.Link>
          <Nav.Link as={Link} to="/rescources">Resources</Nav.Link>
          <Navbar.Text className="fs-1">|</Navbar.Text>
        </Nav>
        <div className="d-flex flex-column align-items-center">
          <Button variant="outline-primary" className="mb-2">View Courses</Button>
          <small>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com" className="me-2"><FaFacebook style={{ color: '#1877F2' }} /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com" className="me-2"><FaXTwitter style={{ color: '#000000' }} /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com" className="me-2"><FaLinkedin style={{ color: '#0A66C2' }} /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com" className="me-2"><FaYoutube style={{ color: '#FF0000' }} /></a>
          </small>
        </div>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default NavigationBar;

