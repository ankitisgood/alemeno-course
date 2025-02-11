import { createSlice } from '@reduxjs/toolkit';


const loadEnrolledCourses = () => {
  const storedCourses = localStorage.getItem('enrolledCourses');
  return storedCourses ? JSON.parse(storedCourses) : [];
};

const studentSlice = createSlice({
  name: 'student',
  initialState: {
    enrolledCourses: loadEnrolledCourses()
  },
  reducers: {
    addEnrolledCourse: (state, action) => {
      const courseExists = state.enrolledCourses.some(course => course.id === action.payload.id);
      if (!courseExists) {
        state.enrolledCourses.push({ ...action.payload, progress: 0, completed: false });
        // Save to localStorage
        localStorage.setItem('enrolledCourses', JSON.stringify(state.enrolledCourses));
      }
    },
    markCourseCompleted: (state, action) => {
      const course = state.enrolledCourses.find(course => course.id === action.payload);
      if (course) {
        course.progress = 100;
        course.completed = true;
        // Update localStorage
        localStorage.setItem('enrolledCourses', JSON.stringify(state.enrolledCourses));
      }
    }
  }
});

export const { addEnrolledCourse, markCourseCompleted } = studentSlice.actions;
export default studentSlice.reducer;