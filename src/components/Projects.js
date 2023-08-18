import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import './Projects.css'; // Import your custom CSS for additional styling

// ... Rest of your component code ...

const projectsData = [
  {
    image: '/cite.jpg',
    title: 'CITE EVENTS',
    description: 'A project showcasing CITE events.',
  },
  {
    image: '/crud.jpg',
    title: 'CRUD',
    description: 'A CRUD application project.',
  },
  {
    image: '/hksa.jpg',
    title: 'H.K.S.A',
    description: 'H.K.S.A organization website project.',
  },
];

const Projects = () => {
  return (
    <Carousel className="projects-carousel">
      {projectsData.map((project, index) => (
        <Carousel.Item key={index}>
          <Image src={project.image} className="project-image" fluid rounded />
          <Carousel.Caption className="project-caption">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Projects;
