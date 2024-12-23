"use client"

import React, { useState } from "react";




const Volume: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [fromUnit, setFromUnit] = useState<string>("liters"); 
  const [toUnit, setToUnit] = useState<string>("milliliters");
  const [result, setResult] = useState<string>(""); 

  const conversionFactors: Record<string, number> = {
    liters: 1,
    milliliters: 1000,
    cubicMeters: 0.001,
    cubicCentimeters: 1000,
    gallons: 0.264172,
    quarts: 1.05669,
    pints: 2.11338,
    cups: 4.22675,
  };

  // Handle conversion
  const handleConvert = () => {
    const input = parseFloat(inputValue);
    if (isNaN(input)) {
      setResult("Please enter a valid number.");
      return;
    }

    const fromFactor = conversionFactors[fromUnit];
    const toFactor = conversionFactors[toUnit];
    const convertedValue = (input * fromFactor) / toFactor;

    setResult(`${convertedValue.toFixed(4)} ${toUnit}`);
  };

  return (
    <div className="p-10 lg:p-20 bg-white dark:bg-gray-900 lg:min-h-screen shadow-md">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">
        Volume Converter
      </h2>
      <div className="mb-4">
        <label className="block text-lg font-medium dark:text-white">
          Enter Volume:
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Enter a value"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium dark:text-white">
          From Unit:
        </label>
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        >
          {Object.keys(conversionFactors).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium dark:text-white">
          To Unit:
        </label>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        >
          {Object.keys(conversionFactors).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleConvert}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Convert
      </button>
      <div className="mt-4">
        <h3 className=" p-3 rounded-md bg-green-100 dark:text-black ">
          Converted Value:  {result || "Enter a value and select units to convert."}
        </h3>
    
      </div>
    </div>
  );
};

export default Volume;
