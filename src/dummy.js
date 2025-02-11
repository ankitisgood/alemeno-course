// src/pages/CourseDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addEnrolledCourse } from '../features/studentSlice';
import courseModel from '../mock/courseModel'; // Assume this is mock data for courses

const CourseDetails = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();

  // Find the course details based on courseId
  const course = courseModel.find(c => c.id.toString() === courseId);

  const handleEnroll = () => {
    dispatch(addEnrolledCourse(course));
    alert('Course successfully added to your dashboard!');
  };

  if (!course) return <p>Course not found!</p>;

  return (
    <div className="course-details">
      <h1>{course.name}</h1>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Location:</strong> {course.location}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <ul>
        <strong>Syllabus:</strong>
        {course.syllabus.map((item, index) => (
          <li key={index}>
            <strong>Week {item.week}:</strong> {item.topic} - {item.content}
          </li>
        ))}
      </ul>
      <button onClick={handleEnroll}>Enroll in Course</button>
    </div>
  );
};

export default CourseDetails;
