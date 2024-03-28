import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import frontImage from './img/Coaching_Img.png';

// Define CSS as JavaScript objects
const styles = {
  image: {
    width: '1338px',
    height: '457px',
    boxSizing: 'border-box',
    marginBottom: '40px',
  },
  heading: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
  },
  generalText: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    textAlign: 'left',
    marginBottom: '1em',
  },
  bulletPointWithMargin: {
    marginLeft: '30px',
  },
  button: {
    width: '154px',
    height: '48px',
    padding: '2px 2px 2px 2px',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    border: '1px solid #007bff',
    color: '#007bff',
    boxSizing: 'border-box',
    fontWeight: 'bold',
    marginTop: '20px',
    marginBottom: '40px',
  }
};

const AgileTransformationsText = () => (
  <div>
    <div style={styles.bulletPointWithMargin}>• Shifting from traditional project management methodologies to Agile methodologies like Scrum or Kanban.</div>
    <div style={styles.bulletPointWithMargin}>• Implementing cross-functional teams with members from different departments or disciplines.</div>
    <div style={styles.bulletPointWithMargin}>• Embracing iterative and incremental development to deliver value in smaller, frequent increments.</div>
    <div style={styles.bulletPointWithMargin}>• Encouraging close collaboration between business stakeholders, product owners, and development teams.</div>
    <div style={styles.bulletPointWithMargin}>• Adopting a flexible mindset that values responding to change over strict adherence to initial plans.</div>
    <div style={styles.bulletPointWithMargin}>• Implementing daily stand-up meetings for improved communication, transparency, and alignment.</div>
  </div>
);

const DevopsTransformationsText = () => (
  <div>
    <div style={styles.bulletPointWithMargin}>• Implementing continuous integration and continuous delivery (CI/CD) pipelines to automate the software release process.</div>
    <div style={styles.bulletPointWithMargin}>• Breaking down silos between development and operations teams and promoting collaboration and shared responsibilities.</div>
    <div style={styles.bulletPointWithMargin}>• Adopting infrastructure as code (IaC) to automate the provisioning and management of infrastructure resources.</div>
    <div style={styles.bulletPointWithMargin}>• Implementing monitoring and logging solutions to gain real-time visibility into application performance and system health releases.</div>
  </div>
);

const ToolsAssessmentsText = () => (
  <div>
    <div>1. Version Control Systems:</div>
    <div style={styles.bulletPointWithMargin}>• Assessment: Evaluate tools like Git, Subversion, or Mercurial based on ease of use, collaboration features, branching capabilities, and integration with CI/CD pipelines.</div>
    <div style={styles.bulletPointWithMargin}>• Implementation: Integrate the chosen tool into the development workflow, establish coding guidelines, and ensure all code changes are version controlled.</div>
    <div>2. Continuous Integration/Continuous Delivery (CI/CD) Tools:</div>
    <div style={styles.bulletPointWithMargin}>• Assessment: Assess tools like Jenkins, CircleCI, or GitLab CI/CD based on their ability to automate build, test, and deployment processes, scalability, integrations, and support.</div>
    <div style={styles.bulletPointWithMargin}>• Implementation: Configure the CI/CD pipeline to trigger automated builds, run tests, and deploy applications, while ensuring proper monitoring and feedback mechanisms.</div>
  </div>
);

const Page = () => {

  return (
    <>
      <Container>
        <Row>
          <Col>
            <img src={frontImage} alt="Contact Us" style={styles.image} />
          </Col>
        </Row>
        <Row>
          <Col style={styles.heading}>AGILE TRANSFORMATIONS</Col>
        </Row>
        <Row>
          <Col style={styles.generalText}>
            <AgileTransformationsText />
          </Col>
        </Row>
        <Row>
          <Col style={styles.heading}>DEVOPS TRANSFORMATIONS</Col>
        </Row>
        <Row>
          <Col style={styles.generalText}>
            <DevopsTransformationsText />
          </Col>
        </Row>
        <Row>
          <Col style={styles.heading}>TOOLS ASSESSMENTS & IMPLEMENTATION</Col>
        </Row>
        <Row>
          <Col style={styles.generalText}>
            <ToolsAssessmentsText />
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/contact">
              <Button style={styles.button}>Contact Us</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Page;