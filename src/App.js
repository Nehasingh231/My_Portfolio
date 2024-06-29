import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/Home/About';
import Contact from './components/Contact';
import Project from './components/Project';
import project1 from './assets/images/project1.jpg';
import project2 from './assets/images/project2.jpg';
import project3 from './assets/images/project3.jpg';

const images = [
    project1,
    project2,
    project3,
];

const messages = [
  "This is the first project",
  "This is the second project",
  "This is the third project"
];


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="project" element={<Project images={images} messages={messages}/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
