import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './Education.css'; // Import the CSS file

const Education = () => {
  // Dummy education data
  const educationData = [
    {
      school: 'Baruan Elementary School',
      year: '2015',
      degree: 'Elementary Education',
      location: 'Baruan, Agno, Pangasinan, Philippines',
    },
    {
      school: 'Baguio City Nationsl High School',
      year: '2019',
      degree: 'High School Diploma',
      location: 'Baguio City, Philippines',
    },
    {
      school: 'PHINMA Universirty of Pangasinan',
      year: '2021',
      degree: 'Senior High School Diploma',
      location: 'Dagupan City, Philippines',
    },
    // Add more education data as needed
  ];

  return (
    <section className="education-section">
      <Container>
        <h2 className="section-title">Education</h2>
        <Row>
          {educationData.map((edu, index) => (
            <Col key={index} md={4} sm={6}>
              <Card className="education-card">
                <Card.Body>
                  <Card.Title>{edu.school}</Card.Title>
                  <Card.Text>{edu.year}</Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">{edu.degree}</Card.Subtitle>
                  <Card.Text>{edu.location}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;
