import Link from "next/link";
import React from "react";

type Category = {
  _id: string;
  name: string;
  description: string;
};
const SideBar = ({ categories }: { categories: Category[] }) => {
  return (
    <>
      <h3 className="text-lg font-extrabold dark:text-white">Categories</h3>
      <ul>
        {categories?.map((category) => (
          <li className="" key={category._id}>
            <Link
              href={`/category/${category.name}`}
              className="hover:bg-gray-100 py-2 px-5 flex flex-1 rounded-md"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SideBar;
