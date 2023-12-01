import React from "react";

const CourseDetailsSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <h3 className="font-extrabold text-xl text-gray-900 uppercase dark:text-white mb-3">
        {title}
      </h3>
      <span className="mt-4 text-gray-600 dark:text-gray-400">{children}</span>
    </>
  );
};

export default CourseDetailsSection;
