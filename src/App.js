import React from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Project from './components/Project'
import project1 from './assets/images/project1.jpg'
import project2 from './assets/images/project2.jpg'
import project3 from './assets/images/project3.jpg'
import { Home, About, Contact } from './components'

const images = [project3, project1, project2]



const messages = [

  {
    heading: 'Food App Project',
    text: 'This is a project to made people life easy, they can easily order healthy and delicious food in very less time and save there time as well.',
    buttonText: 'SOURCE ',
     anotherButton: 'DEMO'
},

  {
      heading: 'Watch Wave Project',
      text: 'This is a project similar to Netflix, Deep learning of React ',
      buttonText: 'SOURCE ',
       anotherButton: 'DEMO'
  },
  {
      heading: 'Code Editior Project',
      text: 'This is the second project',
      buttonText: 'SOURCE ',
       anotherButton: 'DEMO'
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
