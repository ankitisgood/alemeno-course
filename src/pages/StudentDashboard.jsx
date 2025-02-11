// src/pages/StudentDashboard.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markCourseCompleted } from '../features/studentSlice';

const StudentDashboard = () => {
  const enrolledCourses = useSelector(state => state.student.enrolledCourses);
  const dispatch = useDispatch();

  return (
    <div className="student-dashboard">
      <h1>Your Enrolled Courses</h1>
      <div className="course-list">
        {enrolledCourses.length > 0 ? (
          enrolledCourses.map(course => (
            <div key={course.id} className="course-card">
              <img src={course.thumbnail} alt={course.name} />
              <h2>{course.name}</h2>
              <p>Instructor: {course.instructor}</p>
              <progress value={course.progress} max="100">
                {course.progress}%
              </progress>
              {course.completed ? (
                <p className="completed-label">✅ Completed</p>
              ) : (
                <button onClick={() => dispatch(markCourseCompleted(course.id))}>
                  Mark as Completed
                </button>
              )}
            </div>
          ))
        ) : (
          <p>You are not enrolled in any courses yet.</p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
