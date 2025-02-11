import native from '../assets/reactnative.webp'
import native1 from '../assets/java.png'
import native2 from '../assets/python.webp'

const courses = [
    {
      id: 1,
      name: 'Introduction to React Native',
      instructor: 'John Doe',
      description: 'Learn the basics of React Native development.',
      enrollmentStatus: 'Open',
      thumbnail: native,
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        { week: 1, topic: 'Introduction to React Native', content: 'Overview of React Native.' },
        { week: 2, topic: 'Building Your First App', content: 'Creating a simple app.' }
      ]
    },
    {
      id: 3,
      name: 'Introduction to  java & Devops',
      instructor: 'John snow',
      description: 'Learn the basics of java development.',
      enrollmentStatus: 'Open',
      thumbnail: native1,
      duration: '12 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic java knowledge', 'Familiarity with oop'],
      syllabus: [
        { week: 1, topic: 'Introduction to java ', content: 'Overview of  java.' },
        { week: 2, topic: 'Building Your First App', content: 'Creating a simple app.' }
      ]
    },
    {
      id: 2,
      name: 'Introduction to  python',
      instructor: 'John Doe',
      description: 'Learn the basics of python development.',
      enrollmentStatus: 'Open',
      thumbnail: native2,
      duration: '10 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic python knowledge', 'Familiarity with python basics'],
      syllabus: [
        { week: 1, topic: 'Introduction to python', content: 'Overview of  python.' },
        { week: 2, topic: 'Building Your First App', content: 'Creating a simple app.' }
      ]
    }
  ];
  
  export const fetchCourses = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(courses), 500);
    });
  };
  
  export const fetchCourseById = async (id) => {
    return new Promise((resolve) => {
      const course = courses.find(course => course.id === parseInt(id));
      setTimeout(() => resolve(course), 500);
    });
  };