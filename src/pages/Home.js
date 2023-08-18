import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Button, Image, Row, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const Home = () => {
  return (
    <section>
       <AnimatePresence>
          <motion.div
            initial={{ opacity:0, y:15}}
            animate={{ opacity:1, y:0}}
            transition={{ ease: "easeOut", duration: 2}}>
            <Container className='hero'>
              <Row className='hero d-flex justify-content-center align-items-center'>
                <Col className='d-flex justify-content-center items-center'>
                  <Image src='/IMG_20230426_153952_087.jpg' width={400} height={400} style={{minWidth:300}} roundedCircle fluid/>
                </Col>
                <Col className='d-flex flex-column'>
                  <h1 className='display-5 fw-bold'>
                  ADRIAN SIGNO
                  </h1>
                  <h3 className='display-6 fw-semibold'>Web Developer</h3>
                  <hr />
                 
                  <div className='d-flex align-items-center gap-2'>
                    <Link to='/work'>
                      <Button className='btn-lg' variant='outline-light'>View More</Button>
                    </Link>
                    <SocialLinks />
                  </div>
                </Col>
              </Row>
            </Container>
        </motion.div>
      </AnimatePresence>
     
      <blockquote class="blockquote text-center">
  <p class="mb-0">I'm Adrian Signo, a web developer who is in my third year of college. I want to demonstrate my abilities, experience, and creative work in a captivating and engaging way through this portfolio. I have a tremendous enthusiasm for web development, and I have dedicated myself to mastering my craft and going beyond the boundaries of what is supposed to be possible. Thanks to my experience working on certain projects in my school, I have been able to learn a lot about web design.</p>
</blockquote>   
                
          
      
      
    </section>
  );
};

export default Home;