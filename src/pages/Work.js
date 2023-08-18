import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './Work.css'; // Import the CSS file for styling

const works = [
  {
    title: 'CITE EVENTS',
    description: 'A website that showcases the latest events happening in CITE.',
    image: '/cite.jpg',
  },
  {
    title: 'CRUD PROJECT',
    description: 'Four basic operations a software application should be able to perform.',
    image: '/crud.jpg',
  },
  {
    title: 'H.K.S.A',
    description: 'A Mobile Application, a daily time record for H.K scholars at University of Pangasinan.',
    image: '/hksa.jpg',
  },
];

const Work = () => {
  return (
    <section className="work-section">
      <Container>
        <h2 className="section-title">My Works</h2>
        <Row>
          {works.map((work, index) => (
            <Col key={index} md={4}>
              <Card className="work-card">
                <div className="image-container">
                  <Card.Img variant="top" src={work.image} alt={work.title} />
                </div>
                <Card.Body>
                  <Card.Title>{work.title}</Card.Title>
                  <Card.Text>{work.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Work;
