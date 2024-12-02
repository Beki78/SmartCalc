"use client";

import React, { useState } from "react";

const Time = () => {
  const [inputValue, setInputValue] = useState<number | string>("");
  const [fromUnit, setFromUnit] = useState<TimeUnit>("seconds");
  const [toUnit, setToUnit] = useState<TimeUnit>("minutes");
  const [result, setResult] = useState<number | string>("");

  // Define a type for valid time units
  type TimeUnit = "seconds" | "minutes" | "hours" | "days";

  // Define the time conversions with a proper type
  const timeConversions: Record<TimeUnit, Record<TimeUnit, number>> = {
    seconds: {
      seconds: 1,
      minutes: 1 / 60,
      hours: 1 / 3600,
      days: 1 / 86400,
    },
    minutes: {
      seconds: 60,
      minutes: 1,
      hours: 1 / 60,
      days: 1 / 1440,
    },
    hours: {
      seconds: 3600,
      minutes: 60,
      hours: 1,
      days: 1 / 24,
    },
    days: {
      seconds: 86400,
      minutes: 1440,
      hours: 24,
      days: 1,
    },
  };

  const handleConvert = () => {
    if (inputValue === "") {
      setResult("Please enter a value");
      return;
    }

    const value = parseFloat(inputValue as string);
    if (isNaN(value)) {
      setResult("Invalid input");
      return;
    }

    const conversionRate = timeConversions[fromUnit][toUnit];
    const convertedValue = value * conversionRate;
    setResult(convertedValue.toFixed(2)); // Format result to 2 decimal places
  };

  return (
    <div className="p-20 bg-white dark:bg-gray-900 min-h-screen shadow-md">
      <h2 className="text-xl font-semibold text-center mb-5 text-gray-800 dark:text-white">
        Time Conversion Tool
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Enter Time Value:
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
          placeholder="Enter a number"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          From Unit:
        </label>
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value as TimeUnit)}
          className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
        >
          <option value="seconds">Seconds</option>
          <option value="minutes">Minutes</option>
          <option value="hours">Hours</option>
          <option value="days">Days</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          To Unit:
        </label>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value as TimeUnit)}
          className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
        >
          <option value="seconds">Seconds</option>
          <option value="minutes">Minutes</option>
          <option value="hours">Hours</option>
          <option value="days">Days</option>
        </select>
      </div>

      <button
        onClick={handleConvert}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Convert
      </button>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Converted Value:
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {result || "Enter a value to convert."}
        </p>
      </div>
    </div>
  );
};

export default Time;
