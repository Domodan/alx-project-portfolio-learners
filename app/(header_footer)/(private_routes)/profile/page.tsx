"use client";
import NewTab from "../../../NewTab";

const Profile = () => {
  return (
    <div>
      <div className="flex justify-center bg-blue-500">
        <div className="w-9/12 my-10">
          <span className="text-white text-4xl">My Courses</span>
        </div>
      </div>
      <NewTab>
        <NewTab.TabList>
          <NewTab.Title>Tab 1</NewTab.Title>
          <NewTab.Title>Tab 2</NewTab.Title>
          <NewTab.Title>Tab 3</NewTab.Title>
        </NewTab.TabList>
        <NewTab.Panels>
          <NewTab.Panel>Tab 1</NewTab.Panel>
          <NewTab.Panel>Tab 2</NewTab.Panel>
          <NewTab.Panel>Tab 3</NewTab.Panel>
        </NewTab.Panels>
      </NewTab>
    </div>
  );
};

export default Profile;
