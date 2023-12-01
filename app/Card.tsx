import Image from "next/image";
import { ClockIcon, UsersIcon, StarIcon } from "@heroicons/react/24/solid";
import { Course } from "./CoursesList";
const Card = ({ course }: { course: Course }) => {
  //console.log(course);
  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-500 ease-out dark:border-gray-600 hover:z-10">
      <div className="relative">
        <div className="relative w-full h-72">
          <Image
            src={
              course.previewImage ||
              "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
            }
            fill
            alt={"course-image.jpg"}
          />
        </div>
        <div className="absolute bottom-4 ml-1">
          <span className="bg-gray-100 text-gray-900 py-2 px-5 rounded-full dark:bg-gray-900 dark:text-gray-500">
            Beginner
          </span>
        </div>
      </div>
      <div className="px-8 py-1">
        <span className="text-xl font-sans font-extrabold dark:text-white">
          {course.title}
        </span>
        <div className="flex justify-between">
          <span>¢{course.price}</span>
          <span>4.5</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">{course.tutorId?.name}</span>
          <span>5hrs</span>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-center items-center bg-gray-100 text-gray-900 py-2 px-4 rounded-full dark:bg-gray-700 dark:text-gray-500">
            <ClockIcon className="h-4 w-4 text-gray-200 dark:text-gray-500" />
            <span className="text-sm">45hrs</span>
          </div>
          <div className="flex justify-center items-center bg-gray-100 text-gray-900 py-2 px-4 rounded-full dark:bg-gray-700 dark:text-gray-500">
            <UsersIcon className="h-4 w-4 text-gray-200 dark:text-gray-500" />
            <span className="text-sm">1000+</span>
          </div>
          <div className="flex justify-center items-center bg-gray-100 text-gray-900 py-2 px-4 rounded-full dark:bg-gray-700 dark:text-gray-500">
            <StarIcon className="h-4 w-4 text-yellow-500 dark:text-yellow-500" />
            <span className="text-sm">4.5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
