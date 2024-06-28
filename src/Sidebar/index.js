import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faReadme } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => ( 
     <div className='nav-bar'>
          <Link className='logo' to='/'>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSY_nf-ePbiqEUVb1NNelR4uv_L_87UIhwJA&usqp=CAU" alt="logo" />
          </Link>

          <nav>
               <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
               </NavLink>

               <NavLink exact="true" activeclassname="active"
                    className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
               </NavLink>

               <NavLink exact="true" activeclassname="active"
                    className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
               </NavLink>

               <NavLink exact="true" activeclassname="active"
               className="project-link" to="/project">
               <FontAwesomeIcon icon={faReadme} color="#4d4d4e" />
          </NavLink>

          </nav>

          <ul>
               <li>
                    <a
                         target='_blank'
                         rel='noreferrer'
                         href='https://www.linkedin.com/in/neha-singh-767671259/'
                    >
                         <FontAwesomeIcon icon={faLinkedin} color='4d4d4e' />
                    </a>
               </li>

               <li>
               <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/Nehasingh231'
               >
                    <FontAwesomeIcon icon={faGithub} color='4d4d4e' />
               </a>
          </li>
          <li>
          <a
               target='_blank'
               rel='noreferrer'
               href='https://www.youtube.com/@NehaSingh29263'
          >
               <FontAwesomeIcon icon={faYoutube} color='4d4d4e' />
          </a>
     </li>
          </ul>
     </div>
)
export default Sidebar; 