import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';

const Home = () => {
  return (
    <section className="home-section">
      <AnimatePresence>
        <Container className="hero">
          <Row className="hero d-md-flex flex-md-row justify-content-center align-items-center">
            <Col md={4} className="d-flex justify-content-center items-center mb-4 mb-md-0">
              <Image
                src='/IMG_20230426_153952_087.jpg'
                width={400}
                height={400}
                style={{ minWidth: 300, border: '5px solid #007bff', borderRadius: '50%' }}
                roundedCircle
                fluid
              />
            </Col>
            <Col md={8} className="d-flex flex-column align-items-center">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="display-4 fw-bold"
                style={{ fontSize: 'clamp(2rem, 8vw, 4rem)' }}
              >
                ADRIAN SIGNO
              </motion.h1>
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="display-6 fw-semibold"
              >
                Web Developer
              </motion.h3>
              <div className="intro-paragraph">
                Welcome to my portfolio! I'm passionate about crafting exceptional web experiences that blend creativity and technology.
              </div>
              <div className="social-links-container">
                <SocialLinks />
              </div>
            </Col>
          </Row>
        </Container>
      </AnimatePresence>
    </section>
  );
};

export default Home;
