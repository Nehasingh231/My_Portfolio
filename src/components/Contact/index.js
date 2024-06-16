import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';

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
        <input type='submit' className='flat-button' value="SEND" />
        </li>
        </ul>
        </form>
        </div>
        </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}
export default Contact;