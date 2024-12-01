"use client";

import React, { useState } from "react";
import { useStore } from "../store/store"; // Assuming you already have a store for theme management
import { FiSun, FiMoon } from "react-icons/fi"; // Icons for sun and moon

const Calculator: React.FC = () => {
  const { theme, setTheme } = useStore(); // Access theme and setTheme from your store
  const [input, setInput] = useState<string>("");

  const handleButtonClick = (value: string) => {
    if (value === "C") {
      setInput(""); // Clear input
    } else if (value === "=") {
      try {
        setInput(eval(input).toString()); // Use eval carefully or replace with a safe math library
      } catch {
        setInput("Error"); // Handle any errors in calculation
      }
    } else {
      setInput(input + value); // Append the value to the input
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "C",
    "0",
    "=",
    "+",
  ];

 

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div
        className={`min-h-screen flex flex-col items-center justify-center ${
          theme === "light"
            ? "bg-white text-black"
            : "bg-gray-900 text-white"
        }`}
      >
        

        {/* Calculator */}
        <div className="w-full max-w-md p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <input
            type="text"
            value={input}
            disabled
            className="w-full p-4 mb-4 text-right bg-gray-100 dark:bg-gray-700 text-xl rounded focus:outline-none"
          />
          <div className="grid grid-cols-4 gap-2">
            {buttons.map((button) => (
              <button
                key={button}
                onClick={() => handleButtonClick(button)}
                className="p-4 text-xl font-semibold bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 rounded transition-colors"
              >
                {button}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
