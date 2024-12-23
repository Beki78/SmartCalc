"use client";
import { conversionFactors } from "@/types/types";
import React, { useState } from "react";



const Length: React.FC = () => {
  const [inputValue, setInputValue] = useState<number | string>("");
  const [fromUnit, setFromUnit] = useState<string>("meter");
  const [toUnit, setToUnit] = useState<string>("kilometer");
  const [result, setResult] = useState<string>("");

  const handleConvert = () => {
    if (!inputValue || isNaN(Number(inputValue))) {
      setResult("Please enter a valid number.");
      return;
    }

    const valueInMeters = Number(inputValue) * conversionFactors[fromUnit];
    const convertedValue = valueInMeters / conversionFactors[toUnit];
    setResult(
      `${inputValue} ${fromUnit} = ${convertedValue.toFixed(4)} ${toUnit}`
    );
  };

  return (
    <div className="p-10 lg:p-20 bg-white dark:bg-gray-900 lg:min-h-screen shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center dark:text-white">
        Length Converter
      </h2>

      <div className="mb-4">
        <label
          className="block font-medium mb-2 dark:text-white"
          htmlFor="inputValue"
        >
          Enter Length:
        </label>
        <input
          type="text"
          id="inputValue"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter a value"
        />
      </div>

      <div className="mb-4">
        <label
          className="block font-medium mb-2 dark:text-white"
          htmlFor="fromUnit"
        >
          Convert From:
        </label>
        <select
          id="fromUnit"
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {Object.keys(conversionFactors).map((unit) => (
            <option key={unit} value={unit}>
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label
          className="block font-medium mb-2 dark:text-white"
          htmlFor="toUnit"
        >
          Convert To:
        </label>
        <select
          id="toUnit"
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {Object.keys(conversionFactors).map((unit) => (
            <option key={unit} value={unit}>
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleConvert}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Convert
      </button>

      {result && (
        <div className="mt-4 p-3 bg-green-100 border rounded text-black">
          {result}
        </div>
      )}
    </div>
  );
};

export default Length;
