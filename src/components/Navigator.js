import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
        <div className="d-flex flex-column align-items-center me-2">
          <Button variant="outline-primary" className="mb-2">View Courses</Button>
          <small>
            <a href="https://www.facebook.com"><FaFacebook /></a>
            <a href="https://twitter.com"><FaXTwitter /></a>
            <a href="https://www.linkedin.com"><FaLinkedin /></a>
            <a href="https://www.youtube.com"><FaYoutube /></a>
          </small>
        </div>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default NavigationBar;

