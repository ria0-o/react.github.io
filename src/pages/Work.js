// Work.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Projects from '../components/Projects';
import { motion, AnimatePresence } from 'framer-motion';
import './Work.css'; // Import your custom CSS for additional styling

const Work = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeOut', duration: 2 }}
        className='work-container'
      >
        <Container>
          <Row className='align-items-center justify-content-center'>
            <Col md={6}>
              <h1 className='display-4 fw-bold'>My Work</h1>
              <ul className='work-list'>
                <li>
                  <h4 className='fw-bold'>CITE EVENTS</h4>
                  <p>A website that showcases the latest events happening in CITE.</p>
                </li>
                <li>
                  <h4 className='fw-bold'>CRUD PROJECT</h4>
                  <p>Four basic operations a software application should be able to perform.</p>
                </li>
                <li>
                  <h4 className='fw-bold'>H.K.S.A</h4>
                  <p>A Mobile Application, a daily time record for H.K scholars at University of Pangasinan.</p>
                </li>
              </ul>
            </Col>
            <Col md={6} className='projects'>
              <Projects />
            </Col>
          </Row>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default Work;
