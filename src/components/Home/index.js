import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';

const Home = () => {
const [letterClass, setLetterClass] = useState('text-animate')
const nameArray = ['n', 'e', 'h', 'a']
const jobArray = ['w', 'e', 'b', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '']

    return (
        <div className="container home-page">
         <div className="text-zone">
         <h1>Hi, <br /> I'm 
         Neha Singh
         <br />
         web developer
         </h1>
         <h2>Frontend Developer / JavaScript Expert / React Expert</h2>
         <Link to="/contact" className='flat-button'>CONTACT ME</Link>
         </div>
        </div>
    );
}

export default Home;