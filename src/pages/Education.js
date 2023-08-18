import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Education = () => {
  // Dummy education data
  const educationData = [
    { school: 'Elementary School', year: '2014' },
    { school: 'High School', year: '2014' },
    { school: 'Senior High School', year: '2017' },
    { school: 'College',  }, // Add more education data as needed
  ];

  return (
    <section className="education-section">
      <Container>
        <h2 className="section-title">Education</h2>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {educationData.map((edu, index) => (
            <Col key={index}>
              <Card className="education-card">
                <Card.Body>
                  <Card.Title>{edu.school}</Card.Title>
                  <Card.Text>Year Graduated: {edu.year}</Card.Text>
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
