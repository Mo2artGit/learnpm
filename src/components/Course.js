import React from 'react';
import { useParams } from 'react-router-dom';

function Courses() {

  const { courseId } = useParams();
  const courseData = {
    1: { name: 'Course 1', description: 'Description for Course 1' },
    2: { name: 'Course 2', description: 'Description for Course 2' },
    3: { name: 'Course 3', description: 'Description for Course 3' },
  };

  const course = courseData[courseId];

  if (!course) {
    // Handle case where the course ID is not found
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h2>{course.name}</h2>
      <p>{course.description}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default Courses;
