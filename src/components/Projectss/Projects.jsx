import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import { motion } from 'framer-motion';  // Framer Motion ekledik
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGit,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

// Resimleri içe aktar
import vekaImage from './../../assets/images/veka.png';
import aryaImage from './../../assets/images/arya.png';
import fiyakImage from './../../assets/images/fiyak.png';

const projects = [
  {
    id: 1,
    image: vekaImage, // Proje 1 resmi
    link: 'https://www.vekadekorasyonmimarlik.com', // Proje 1 linki
  },
  {
    id: 2,
    image: aryaImage, // Proje 2 resmi
    link: 'https://www.aryadizayn.com', // Proje 2 linki
  },
  {
    id: 3,
    image: fiyakImage, // Proje 3 resmi
    link: 'https://www.fiyakinsaat.com', // Proje 3 linki
  },
];

const About = () => {
  const [letterClass] = useState('text-animate');

  return (
    <>
      <div className="container about-page">
      <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'l', 'e', 'r', 'i', 'm']}
              idx={16}
            />
          </h1>

          {/* Projelerin Listelendiği Bölüm */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-item"
                initial={{ opacity: 0, x: -100,  }} // Başlangıç: Solda ve bulanık
                animate={{ opacity: 1, x: -50,  }} // Normal hale gelme
                transition={{
                  duration: 1, // Geçiş süresi
                  ease: 'easeInOut', // Yumuşak giriş
                  delay: index * 0.8, // Soldan sağa sırayla giriş
                }}
              >
                <img src={project.image} alt={`Proje ${project.id}`} />
              </motion.a>
            ))}
          </div>
        </div>
        {/* Küp Animasyonu */}
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGit} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;