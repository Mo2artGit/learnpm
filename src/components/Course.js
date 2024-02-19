import React from 'react';
import { useParams } from 'react-router-dom';
import courseData from './data/courseData.json';

function Courses() {

  const { courseId } = useParams();
  const course = courseData[courseId];

  if (!course) {
    // Handle case where the course ID is not found
    return <div>Course not found</div>;
  }

  const whatLines = course.what.split('\n').map((line, index) => (
    <p key={index}>{line}</p>
  ));

  const reviewsLines = course.reviews.split('\n').map((line, index) => (
    <p key={index}>{line}</p>
  ));

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.about}</p>
      <p>{whatLines}</p>
      <p>{reviewsLines}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default Courses;
