"use client";
import React, { useState, ReactNode } from "react";

interface TabContainerProps {
  children: ReactNode;
}

interface TabTitleProps {
  isActive: boolean;
  changeTab: (index: number) => void;
  children: string;
  index: number;
}

interface TabContentProps {
  children: ReactNode;
  isActive: boolean;
}

const TabContainer: React.FC<TabContainerProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex border-b border-gray-300 mb-4">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && child.type === TabTitle) {
            const isActive = index === activeTab;
            return React.cloneElement(child, { isActive, changeTab, index });
          }
          return null;
        })}
      </div>
      <div>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && child.type === TabContent) {
            return React.cloneElement(child, {
              isActive: index === activeTab + 3,
              changeTab,
              index,
            });
          }
          return null;
        })}
      </div>
    </div>
  );
};

const TabTitle: React.FC<TabTitleProps> = ({
  children,
  isActive,
  changeTab,
  index,
}) => {
  return (
    <button
      className={`${
        isActive
          ? "bg-gray-300 text-gray-800 font-bold"
          : "bg-gray-100 text-gray-600"
      } py-2 px-4 mr-2 focus:outline-none`}
      onClick={() => changeTab(index)}
    >
      {children}
    </button>
  );
};

const TabContent: React.FC<TabContentProps> = ({ children, isActive }) => {
  return <div className={`${isActive ? "block" : "hidden"}`}>{children}</div>;
};

interface TabProps {
  Container: typeof TabContainer;
  Title: typeof TabTitle;
  Content: typeof TabContent;
}

const Tab: TabProps = {
  Container: TabContainer,
  Title: TabTitle,
  Content: TabContent,
};

export default Tab;
