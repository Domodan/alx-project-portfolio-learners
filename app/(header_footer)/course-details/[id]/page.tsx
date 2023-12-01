import AccordionLayout from "@/app/AccordionLayout";
import Button from "@/app/Button";
import CourseDetailsSection from "@/app/CourseDetailsSection";
import ExpandableText from "@/app/ExpandableText";
import {
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  MicrophoneIcon,
  DocumentTextIcon,
  Square3Stack3DIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
  TrophyIcon,
  PlayCircleIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

type Lesson = {
  title: string;
  content: string;
  type: string;
};
type Resource = {
  heading: string;
  lessons: Lesson[];
};

async function getCourse(id: string) {
  try {
    const res = await fetch(`${process.env.SITE_URL}/api/courses/${id}`, {
      cache: "no-cache",
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

const CourseDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const course = await getCourse(id);
  return (
    <div className="flex w-full px-1 lg:px-5">
      <div className="grid lg:grid-cols-3 pt-7 mb-6">
        <div className="lg:col-span-2 mx-2 lg:mx-5">
          <span className="flex flex-col text-3xl lg:text-5xl font-extrabold dark:text-white">
            {course.title}
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 mt-4">
            <div className="flex items-center">
              <StarIcon className="h-4 w-4 cursor-pointer text-yellow-500 mr-2 lg:mr-5" />
              <span className="text-sm font-extrabold">4.5</span>
              <span className="text-xs font-extralight">(1,234 Reviews)</span>
            </div>
            <div className="flex  items-center">
              <BookOpenIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-2 lg:mr-5" />
              <span className="text-sm font-bold">Lessons: 16</span>
            </div>
            <div className="flex  items-center">
              <BookOpenIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-2 lg:mr-5" />
              <span className="text-sm font-bold">Assignments/Tests: 2</span>
            </div>
            <div className="flex  items-center">
              <ClockIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-2 lg:mr-5" />
              <span className="text-sm">2hrs 10min</span>
            </div>
          </div>
          <div className="mt-3 w-full h-96 relative">
            <Image alt="course-image" src={course.previewImage || ""} fill />
          </div>
          <div className="mt-4">
            <CourseDetailsSection title="About Page">
              <ExpandableText max={100}>{course.description}</ExpandableText>
            </CourseDetailsSection>
          </div>
          <div className="mt-8">
            <CourseDetailsSection title="After completing this Course you will be able to;">
              <ul>
                {course.completionBenefits.map(
                  (benefit: string, index: number) => (
                    <li key={index}>
                      <div className="flex items-center mb-4" key={index}>
                        <CheckCircleIcon className="h-4 w-4 cursor-pointer text-blue-700 mr-2" />
                        {benefit}
                      </div>
                    </li>
                  )
                )}
              </ul>
            </CourseDetailsSection>
          </div>
          <div className="mt-8">
            <CourseDetailsSection title="Lessons">
              <ul>
                {course.resources.map((resource: Resource, index: number) => (
                  <li className="mb-1" key={index}>
                    <AccordionLayout
                      title={resource.heading}
                      initialOpen={index === 0 && true}
                    >
                      {resource.lessons.map((lesson, _ind) => (
                        <li
                          className="py-3 border-b-2 dark:border-sky-100"
                          key={_ind}
                        >
                          <div className="flex justify-between">
                            <div className="flex flex-row items-center">
                              {lesson.type === "video" ? (
                                <PlayCircleIcon className="h-4 w-4 cursor-pointer text-black dark:text-gray-500" />
                              ) : (
                                <BookOpenIcon className="h-4 w-4 cursor-pointer text-black dark:text-gray-500" />
                              )}
                              <span className="ml-2 text-md">
                                {lesson.title}
                              </span>
                            </div>
                            {lesson.type === "video" ? (
                              <span>
                                {Math.floor(Math.random() * 9) + 2} mins
                              </span>
                            ) : null}
                          </div>
                        </li>
                      ))}
                    </AccordionLayout>
                  </li>
                ))}
              </ul>
            </CourseDetailsSection>
          </div>
          <div className="mt-8">
            <CourseDetailsSection title="Requirements">
              <ul>
                {course.requirements.map(
                  (requirement: string, index: number) => (
                    <li key={index}>
                      <div className="flex items-center mb-4" key={index}>
                        <CheckCircleIcon className="h-4 w-4 cursor-pointer text-blue-700 mr-2" />
                        {requirement}
                      </div>
                    </li>
                  )
                )}
              </ul>
            </CourseDetailsSection>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="border-l-2 dark:border-l-gray-600">
            <div className="border-b border-dashed pb-5 dark:border-b-gray-600">
              <div className="flex items-center ml-2 mb-3">
                <MicrophoneIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
                <span className="text-sm">English</span>
              </div>
              <div className="flex items-center ml-2 mb-3">
                <DocumentTextIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
                <span className="text-sm">
                  Exercises and quizes to help you put what you learn to
                  practice
                </span>
              </div>
              <div className="flex items-center ml-2 mb-3">
                <Square3Stack3DIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
                <span className="text-sm">Beginner and Intermediate</span>
              </div>
              <div className="flex items-center ml-2 mb-3">
                <DevicePhoneMobileIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
                <span className="text-sm">Access on mobile and desktop</span>
              </div>
              <div className="flex items-center ml-2 mb-3">
                <BoltIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
                <span className="text-sm">Lifetime access</span>
              </div>
              <div className="flex items-center ml-2 mb-3">
                <TrophyIcon className="h-4 w-4 cursor-pointer text-gray-200 mr-5" />
                <span className="text-sm">Certificate on completion</span>
              </div>
            </div>
            <div className="ml-5 my-5">
              <span className="text-2xl text-blue-700">$500</span>
            </div>
            <div className="flex justify-center">
              <Button styles="bg-blue-700 px-7">
                <span className="text-gray-100">Enroll Now</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
