"use client";

import { useState } from "react";
import Button from "./Button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const SearchInput = () => {
  const [text, setText] = useState("");
  return (
    <form className="flex flex-1  border rounded-full items-center">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-10 placeholder-gray-500 text-gray-500 outline-none bg-transparent flex-1 px-3"
        placeholder="Search courses...."
      />
      <div className="">
        <MagnifyingGlassIcon className="h-8 w-8 cursor-pointer text-gray-900 dark:text-gray-100 pr-4" />
      </div>
    </form>
  );
};

export default SearchInput;
