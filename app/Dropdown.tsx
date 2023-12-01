import React, { ReactNode } from "react";

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type === Button) {
          return React.cloneElement(child);
        }
        return null;
      })}
      <>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && child.type === Content) {
            return React.cloneElement(child);
          }
          return null;
        })}
      </>
    </div>
  );
};

const Button = ({ children }: { children: ReactNode }) => {
  return <span className="peer">{children}</span>;
};

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <div className="hidden peer-hover:flex hover:flex drop-shadow-lg absolute z-10">
      {children}
    </div>
  );
};

Dropdown.Button = Button;
Dropdown.Content = Content;

export default Dropdown;
