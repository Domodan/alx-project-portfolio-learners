import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <>
      {["Education", "Programming", "Finance"].map((category) => (
        <span className="" key={category}>
          <Link
            href={`/category/${category}`}
            className="hover:bg-gray-100 py-2 px-5 flex flex-1 rounded-md"
          >
            {category}
          </Link>
        </span>
      ))}
    </>
  );
};

export default CategoryList;
