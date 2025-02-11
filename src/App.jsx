import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CourseListing from './pages/CourseListing';
import CourseDetails from './pages/CourseDetails';
import StudentDashboard from './pages/StudentDashboard';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<CourseListing />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
    </div>
  );
};

export default App;