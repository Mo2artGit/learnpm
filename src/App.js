import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigator from './components/Navigator';
import Home from './components/Home';
import Assessment from './components/Assessment';
import Training from './components/Training';
import Course from './components/Course';
import Register from './components/Register';
import Upcoming from './components/Upcoming';
import Coaching from './components/Coaching';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigator />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/training" element={<Training />} />
            <Route path="/course" element={<Course />} />
            <Route path="/register" element={<Register />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;