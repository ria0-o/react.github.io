import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
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
      school: 'Baguio City National High School',
      year: '2019',
      degree: 'High School Diploma',
      location: 'Baguio City, Philippines',
    },
    {
      school: 'PHINMA University of Pangasinan',
      year: '2021',
      degree: 'Senior High School Diploma',
      location: 'Dagupan City, Philippines',
    },
    // Add more education data as needed
  ];

  return (
    <section className="education-section">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="section-title"
        >
          Education
        </motion.h2>
        <Row xs={1} md={2} className="g-4">
          {educationData.map((edu, index) => (
            <Col key={index}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 1 }}
              >
                <Card className="education-card">
                  <Card.Body>
                    <Card.Title>{edu.school}</Card.Title>
                    <Card.Text>{edu.year}</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">{edu.degree}</Card.Subtitle>
                    <Card.Text>{edu.location}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;
