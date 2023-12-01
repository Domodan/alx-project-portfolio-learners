import React, { ReactNode, useState } from "react";

type TabsProps = {
  children: ReactNode;
};

type Tab = {
  children: ReactNode;
};

type Title = {
  children: ReactNode;
};

type Content = {
  children: ReactNode;
};

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const changeTab = () => {};
  return (
    <div>
      {/* <div>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && child.type === Tab) {
            return React.cloneElement(child);
          }
          return null;
        })}
      </div> */}
    </div>
  );
};

const Tab = async ({ children }: Tab) => {
  const content = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child) && child.type === Content) {
      return child;
    }
    return null;
  });
  return (
    <>
      <div>{content}</div>
      <ul>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && child.type === Title) {
            return React.cloneElement(child);
          }
          return null;
        })}
      </ul>
    </>
  );
};

const Title = ({ children }: Title) => {
  return <li>{children}</li>;
};

const Content = ({ children }: Content) => {
  return <div>hahah</div>;
};

// Tabs.Tab = Tab;
// Tabs.Title = Title;
// Tabs.Content = Content;
export default Tabs;
