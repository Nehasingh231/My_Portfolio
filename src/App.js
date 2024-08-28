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
    text: `A full-featured food ordering application that allows users to browse menus,
     customize orders and add food to cart also star your favourite food.`,
    buttonText: 'SOURCE ',
     anotherButton: 'DEMO',
     sourceUrl: 'https://github.com/Nehasingh231/Food-App',
     demoUrl: 'https://bloom-and-glow-blogging-website.vercel.app/' //its dice roll game link
},

  {
      heading: 'Dice Roll Game',
      text: `An engaging browser-based game that allows users to roll dice and experience randomized outcomes with animated visuals. 
      Built using vanilla JavaScript for game logic and CSS for styling and animations, 
      providing an interactive and fun user experience. `,
      buttonText: 'SOURCE ',
       anotherButton: 'DEMO',
       sourceUrl: 'https://github.com/Nehasingh231/Dice-Roll-Game',
       demoUrl: 'https://dice-roll-game-fawn.vercel.app/' 
  },
  {
      heading: 'Code Editior Project',
      text: ` A feature-rich and customizable code editor application designed for web development, 
      providing an enhanced coding experience with modern features and a user-friendly interface.`,
      buttonText: 'SOURCE ',
       anotherButton: 'DEMO',
       sourceUrl: 'https://github.com/Nehasingh231/Code_Editor',
       demoUrl: 'https://code-editor-theta-nine.vercel.app/' //
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
