import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { fetchCourseById } from '../api/courseApi';
import { addEnrolledCourse } from '../features/studentSlice';

const CourseDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const loadCourse = async () => {
      const courseData = await fetchCourseById(id);
      setCourse(courseData);
    };
    loadCourse();
  }, [id]);

  const handleEnroll = () => {
    dispatch(addEnrolledCourse(course));
    alert('Course successfully added to your dashboard!');
  };

  if (!course) return <p>Loading...</p>;

  return (
    <div className="course-details">
      <h1>{course.name}</h1>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Location:</strong> {course.location}</p>
      <p><strong>Prerequisites:</strong> {course.prerequisites.join(', ')}</p>
      <div>
        <strong>Syllabus:</strong>
        <ul>
          {course.syllabus.map((week, index) => (
            <li key={index}>Week {week.week}: {week.topic} - {week.content}</li>
          ))}
        </ul>
      </div>
      {<button onClick={handleEnroll}>Enroll in Course</button>}
    </div>
  );
};

export default CourseDetails;