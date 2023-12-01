import React from "react";
import Card from "./Card";
import Link from "next/link";

export type Course = {
  _id: string;
  description: string;
  price: number;
  title: string;
  tutorId: { _id: string; name: string };
  previewImage: string;
};
const CoursesList = ({ courses }: { courses: Course[] }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {courses?.length === 0
        ? "No courses available"
        : courses?.map((course) => (
            <Link href={`/course-details/${course._id}`} key={course._id}>
              <Card course={course} />
            </Link>
          ))}
    </div>
  );
};

export default CoursesList;
