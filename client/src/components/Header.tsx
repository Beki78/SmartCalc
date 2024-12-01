"use client";

import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useStore } from "@/store/store";
import { HeaderProps } from "@/types/types";

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  const { theme, setTheme } = useStore();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);

    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.className = storedTheme;
  }, [setTheme]);

  if (!isHydrated) return null;

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };
  return (
    <div>
      <div className="bg-slate-200 text-black dark:bg-gray-800 dark:text-white p-4  flex justify-around items-center">
        <div className="header-content">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm">{description} </p>
        </div>

        <button
          onClick={toggleTheme}
          className="theme-toggle p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <FiMoon className="moon text-gray-800 text-2xl" />
          ) : (
            <FiSun className="sun text-yellow-500 text-2xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
