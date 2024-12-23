"use client";
import { Units } from "@/types/types";
import React, { useState } from "react";

const Weight = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("kg");
  const [toUnit, setToUnit] = useState("lb");
  const [result, setResult] = useState("");

  const units: Units = {
    kg: 1, 
    g: 1000, 
    lb: 2.20462, 
    oz: 35.274, 
    mg: 1e6, 
  };

  const handleConversion = () => {
    const valueInKg = parseFloat(inputValue) / units[fromUnit];
    const convertedValue = valueInKg * units[toUnit]; 
    setResult(convertedValue.toFixed(4)); 
  };

  return (
    <div className="p-10 lg:p-20 bg-white dark:bg-gray-900 lg:min-h-screen shadow-md">
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
        <h3 className="text-lg p-3 rounded-md dark:text-black bg-green-100">
          Result: {result ? `${result} ${toUnit}` : "Enter values to convert."}
        </h3>
      </div>
    </div>
  );
};

export default Weight;
