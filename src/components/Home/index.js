import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['n', 'e', 'h', 'a']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timer) // Cleanup function to clear the timeout
  }, [])
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass}_12`}>i,</span>
          <br />
          <span className={`${letterClass}_13`}>I</span>
          <span className={`${letterClass}_14`}>'m</span>{' '}
          <AnimatedLetters
            letterClass={letterClass}
            stArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            stArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer / JavaScript Expert / React Expert</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home