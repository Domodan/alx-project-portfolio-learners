import Link from "next/link";
import React from "react";

const menuItems = [
  {
    id: 1,
    menuItem: "My Profile",
    link: "/profile",
  },
  {
    id: 2,
    menuItem: "My cart",
    link: "/profile",
  },
  {
    id: 3,
    menuItem: "Payment Methods",
    link: "/profile",
  },
  {
    id: 4,
    menuItem: "Logout",
    link: "/profile",
  },
];

const ProfileDropdownContent = () => {
  return (
    <>
      {menuItems.map((item) => (
        <Link
          href={item.link}
          key={item.id}
          className={`px-5 py-1 hover:text-blue-500 ${
            item.menuItem === "Logout" && "text-red-600"
          }`}
        >
          {item.menuItem}
        </Link>
      ))}
    </>
  );
};

export default ProfileDropdownContent;
