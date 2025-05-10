import React, { lazy, Suspense } from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Project from './components/Project'
import project1 from './assets/images/project1.png'
import project2 from './assets/images/project2.png'
import project3 from './assets/images/project3.png'
import { Home, About, Contact } from './components'

const images = [project1,project2, project3]

const messages = [
  {
    heading: 'Multi-E Commerce website',
    text: `Developed during my internship using HTML, CSS, and JavaScript.
Includes product listings, filters, cart, wishlist, and Razorpay payment integration.
Responsive design with separate sections for men, women, and kids.
Search bar, dropdown menus, smooth navigation, and product detail modals.
Mimics real-world e-commerce flow with features like order form and login/signup system.
Built with attention to layout, responsiveness, and user flow.`,
    buttonText: 'SOURCE ',
    anotherButton: 'DEMO',
    sourceUrl: 'https://amoralofa-neha-e-commerce.pages.dev/',
    demoUrl: 'https://amoralofa-neha-e-commerce.pages.dev/',
  },

  {
    heading: 'Dice Roll Game',
    text: `A fun dice game built using HTML, CSS, and JavaScript.
Generates random dice results with smooth CSS animations and sound feedback.
Responsive layout designed for all screen sizes.
A great project to practice DOM manipulation, events, and dynamic content.
Deployed live and completely developed independently to enhance JS fundamentals.
Simple yet interactive game to improve frontend logic skills.`,
    buttonText: 'SOURCE ',
    anotherButton: 'DEMO',
    sourceUrl: 'https://github.com/Nehasingh231/Dice-Roll-Game',
    demoUrl: 'https://dice-roll-game-fawn.vercel.app/',
  },
  {
    heading: 'Code Editior Project',
    text: ` A browser-based real-time code editor made using React.js.
Supports live preview of HTML, CSS, and JS code with split screen view.
Includes syntax highlighting and resizable panes for better user experience.
Built from scratch using React hooks, useState and useEffect.
Perfect for learning state management and layout structuring.
Emphasizes UI minimalism, performance, and real-time rendering concepts.`,
    buttonText: 'SOURCE ',
    anotherButton: 'DEMO',
    sourceUrl: 'https://github.com/Nehasingh231/Code_Editor',
    demoUrl: 'https://code-editor-theta-nine.vercel.app/', //
  },
]

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
