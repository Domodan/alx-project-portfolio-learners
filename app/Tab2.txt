"use client";
import React, { useState } from "react";

const Tabs = ({ children }: { children: [React.ReactNode] }) => {
  const [tab, setTab] = useState(1);
  return (
    <>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {children?.map((tab_title, index) => {
          return (
            <li className="mr-2" key={index}>
              <a
                className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                onClick={() => setTab(index)}
              >
                Tabs
              </a>
            </li>
          );
        })}
      </ul>
      <div className="flex">
        {[1, 2, 3].map((item, index) => (
          <span className={`${index == tab ? "flex" : "hidden"}`} key={index}>
            Content {index}
          </span>
        ))}
      </div>
    </>
  );
};

export default Tabs;
