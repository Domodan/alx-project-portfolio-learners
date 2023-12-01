"use client";
import React, { ReactNode, useState } from "react";

interface TabProps {
  children: ReactNode;
}
interface TabListProps {
  children: ReactNode;
  setActiveTab?: (index: number) => void;
  activeTab?: number;
}
interface TitleProps {
  children: ReactNode;
  active?: boolean;
  setActiveTab?: (index: number) => void;
  index?: number;
}

interface PanelsProps {
  children: ReactNode;
  setActiveTab?: (index: number) => void;
  activeTab?: number;
}

interface PanelProps {
  children: ReactNode;
  active?: boolean;
}

const Tab = ({ children }: TabProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div className="w-full text-sm font-medium text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type === TabList) {
          return React.cloneElement(child, {
            activeTab,
            setActiveTab: (tab: number) => setActiveTab(tab),
          } as TabListProps);
        }
        return null;
      })}
      <>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && child.type === Panels) {
            return React.cloneElement(child, {
              activeTab,
              setActiveTab: (tab: number) => setActiveTab(tab),
            } as PanelsProps);
          }
          return null;
        })}
      </>
    </div>
  );
};

const TabList = ({ children, activeTab, setActiveTab }: TabListProps) => {
  return (
    <ul className="flex flex-wrap -mb-px">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type === Title) {
          const active: any = activeTab === index;
          return React.cloneElement(child, {
            active,
            setActiveTab: (tab: number) => setActiveTab && setActiveTab(tab),
            index,
          } as TitleProps);
        }
        return null;
      })}
    </ul>
  );
};
const Title = ({ children, active, setActiveTab, index }: TitleProps) => {
  return (
    <li
      className="mr-2"
      onClick={() => setActiveTab && setActiveTab(index as number)}
    >
      <span
        className={`inline-block p-4 ${
          active &&
          "text-blue-600 border-blue-600 dark:border-blue-500 dark:text-blue-500 "
        } border-b-2 rounded-t-lg active cursor-pointer`}
      >
        {children}
      </span>
    </li>
  );
};

const Panels = ({ children, activeTab }: PanelsProps) => {
  return (
    <div>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type === Panel) {
          const active = activeTab === index;
          return React.cloneElement(child, {
            active,
          } as PanelProps);
        }
        return null;
      })}
    </div>
  );
};

const Panel = ({ children, active }: PanelProps) => {
  return <div className={`${active ? "block" : "hidden"}`}>{children}</div>;
};

Tab.TabList = TabList;
Tab.Title = Title;
Tab.Panels = Panels;
Tab.Panel = Panel;

export default Tab;
