import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/1.jpg';
import LogoSubtitle from '../../assets/images/logo.jpg';
import './index.scss';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="Mehmet" />
      <span>ehmet</span>
    </Link>
    <nav>
      <NavLink exact="true" activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeClassName="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeClassName="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/mehmet-karaka%C5%9F-856364199/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://github.com/mhmtkarakas"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCVJr7qXIpdPNxmSzhMSWv-g"
        >
          <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/M_Karakas21"
        >
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
