import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
     faAngular,
      faGitAlt ,
      faCss3,
      faHtml5,
      faJsSquare,
       faReact,
    } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer) // Cleanup function to clear the timeout
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            stArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p></p>
        <p></p>
      </div>
      <div className="stage-cube-cont">
      <div className='cubespinner'>
        <div className="face1">
          <FontAwesomeIcon icon={faAngular} color="#DD0031" />
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faHtml5} color="#EFD81D" />
        </div>
        <div className="face">
          <FontAwesomeIcon icon={faCss3} color="#F06529" />
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faReact} color="#28A4D9" />
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faJsSquare} color="#Ec4561" />
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faGitAlt} color="#5ED4F4" />
        </div>
      </div>
    </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}
export default About;
