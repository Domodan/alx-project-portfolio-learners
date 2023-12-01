"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const DarkModeButton = () => {
  //we do this because on the server it doesnt know if user is using darkmode or light mode

  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {" "}
      {currentTheme === "dark" ? (
        <SunIcon
          className="h-10 w-10 cursor-pointer text-yellow-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MoonIcon
          className="h-10 w-10 cursor-pointer text-gray-900"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default DarkModeButton;
