import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCourses } from '../api/courseApi';

const CourseListing = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadCourses = async () => {
      const courseList = await fetchCourses();
      setCourses(courseList);
    };
    loadCourses();
  }, []);

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="course-listing">
      <h1>Course Listing</h1>
      <input
        type="text"
        placeholder="Search by course name or instructor"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="course-list">
        {filteredCourses.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.thumbnail} alt={course.name} />
            <h2>{course.name}</h2>
            <p>Instructor: {course.instructor}</p>
            <button>
            <Link to={`/courses/${course.id}`}>View Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseListing;