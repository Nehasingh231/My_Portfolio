import React, { lazy, Suspense } from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Project from './components/Project'
import project1 from './assets/images/project1.jpg'
import project2 from './assets/images/project2.jpg'
import project3 from './assets/images/project3.jpg'
import { Home, About, Contact} from './components'

const images = [project3, project1, project2]


const messages = [

  {
    heading: 'Food App Project',
    text: 'This is a project to made people life easy, they can easily order healthy and delicious food in very less time and save there time as well.',
    buttonText: 'SOURCE ',
     anotherButton: 'DEMO',
     sourceUrl: 'https://github.com/Nehasingh231/Food-App',
     demoUrl: 'https://dice-roll-game-fawn.vercel.app/' //its dice roll game link
},

  {
      heading: 'Netflix-Gpt',
      text: 'This is a project similar to Netflix,you can stay home and chill with Watch Wave. Deep learning of React. ',
      buttonText: 'SOURCE ',
       anotherButton: 'DEMO',
       sourceUrl: 'https://github.com/Nehasingh231/NetflixGpt',
       demoUrl: 'https://netflix-gpt-b1cbd.web.app' 
  },
  {
      heading: 'Code Editior Project',
      text: 'This is the a Code Editior App who makes your coding life so easy and happy.',
      buttonText: 'SOURCE ',
       anotherButton: 'DEMO',
       sourceUrl: 'https://github.com/Nehasingh231/Food-App',
    demoUrl: 'https://dice-roll-game-fawn.vercel.app/' //its dice roll game link
  },
 
];

 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="project"
            element={<Project images={images} messages={messages} />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
