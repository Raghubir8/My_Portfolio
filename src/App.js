// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';
import CodingProfiles from './CodingProfiles';

function App() {
  return (
    <Router>
      <div>
      <Home/>
      <Skill/>
      <Project/>
      <CodingProfiles/>
      <Contact/>
        <Routes>
          <Route path="/skills" element={<Skill />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/coding-profiles" element={<CodingProfiles />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
