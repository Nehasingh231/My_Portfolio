import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(timer) // Cleanup function to clear the timeout
      }, [])

    return (
        <>
        <div className='container-contact-page'>
        <div className='text-zone'>
        <h1>
        <AnimatedLetters
            letterClass={letterClass}
            stArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', ' M', 'e',]}
            idx={15}
          />
        </h1>
        <p>
        Thank you for visiting my portfolio!
         If you have any questions,
          would like to discuss a project,
           or simply want to connect,
            feel free to reach out.
             I'm always open to new opportunities and collaborations.
        </p>
        <div className='contact-form'>
        <form>
        <ul>
        <li className='half'>
           <input type='text' 
           name='name'
            placeholder='Name' required />
        </li>
        <li className='half'>
           <input type='email'
            name='email'
             placeholder='Email' required />
        </li>
        <li>
        <input placeholder='Subject'
         type='text'
          name='subject' required  />
        </li>
        <li>
        <textarea placeholder='Message'
        name='message'
        required ></textarea>
        </li>
        <li>
        <input type='submit' className='flat-button flat-button glow' value="SEND" />
        </li>
        </ul>
        </form>
        </div>
        </div>
        </div>
        <div className="info-map">
        
        Neha Singh,
        <br />
        India,
        <br />
        Bihar,Siwan 841241<br />
        Pachrukhi. <br />
        <span>singhneha234@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[26.1623085,84.4088247]} zoom={13}>
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'  />
            <Marker position={[26.1623085,84.4088247]}>
              <Popup className='popup'>Neha lives here, Come over for a cup of Cofee..😍</Popup>
            </Marker>
          </MapContainer>
        </div>
       
        <Loader type="pacman" />
        </>
    )
}
export default Contact;