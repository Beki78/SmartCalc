"use client";
import { Units } from "@/types/types";
import React, { useState } from "react";

const Weight = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("kg");
  const [toUnit, setToUnit] = useState("lb");
  const [result, setResult] = useState("");

  const units: Units = {
    kg: 1, // Base unit
    g: 1000, // Grams
    lb: 2.20462, // Pounds
    oz: 35.274, // Ounces
    mg: 1e6, // Milligrams
  };

  const handleConversion = () => {
    const valueInKg = parseFloat(inputValue) / units[fromUnit]; // Convert to kg
    const convertedValue = valueInKg * units[toUnit]; // Convert to target unit
    setResult(convertedValue.toFixed(4)); // Format result to 4 decimal places
  };

  return (
    <div className="p-20 bg-white dark:bg-gray-900 min-h-screen shadow-md">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">
        Weight Converter
      </h2>
      <div className="mb-4">
        <label className="block mb-2 dark:text-white">Enter weight:</label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 dark:text-white">From:</label>
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className="border p-2 rounded w-full"
        >
          {Object.keys(units).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 dark:text-white">To:</label>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className="border p-2 rounded w-full"
        >
          {Object.keys(units).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleConversion}
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Convert
      </button>

      <div className="mt-4">
        <h3 className="text-lg font-semibold dark:text-white">Result:</h3>
        <p className="dark:text-white">
          {result ? `${result} ${toUnit}` : "Enter values to convert."}
        </p>
      </div>
    </div>
  );
};

export default Weight;
