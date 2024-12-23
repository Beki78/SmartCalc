"use client";

import React, { useState } from "react";
import { log, log10, log2 } from "mathjs";

const Logarithmic = () => {
  const [inputValue, setInputValue] = useState("");
  const [baseValue, setBaseValue] = useState("10"); 
  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      const input = parseFloat(inputValue);
      const base = parseFloat(baseValue);

      if (isNaN(input) || (base !== 10 && base !== 2 && isNaN(base))) {
        setResult("Please provide valid numbers.");
        return;
      }

      let calculatedValue: number;

      if (base === 10) {
        calculatedValue = log10(input);
      } else if (base === 2) {
        calculatedValue = log2(input);
      } else {
        calculatedValue = log(input, base); 
      }

      setResult(
        `${inputValue} to the base ${baseValue} == ${calculatedValue.toFixed(
          6
        )}`
      );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setResult("Error in calculation.");
    }
  };

  return (
    <div className="p-10 lg:p-20 bg-white dark:bg-gray-900 lg:min-h-screen shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center dark:text-white">
        Logarithmic Calculator
      </h2>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="inputValue"
            className="block text-sm font-medium dark:text-white"
          >
            Enter a number:
          </label>
          <input
            type="number"
            id="inputValue"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
            placeholder="e.g., 100"
          />
        </div>

        <div>
          <label
            htmlFor="baseValue"
            className="block text-sm font-medium dark:text-white"
          >
            Select a base:
          </label>
          <select
            id="baseValue"
            value={baseValue}
            onChange={(e) => setBaseValue(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
          >
            <option value="10">Base 10 (Common Logarithm)</option>
            <option value="2">Base 2 (Binary Logarithm)</option>
            <option value="">Custom Base</option>
          </select>
        </div>

        {baseValue === "" && (
          <div>
            <label
              htmlFor="customBase"
              className="block text-sm font-medium dark:text-white"
            >
              Enter a custom base:
            </label>
            <input
              type="number"
              id="customBase"
              onChange={(e) => setBaseValue(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
              placeholder="e.g., 5"
            />
          </div>
        )}

        <button
          onClick={handleCalculate}
          className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Calculate
        </button>

        {result && (
          <div className="mt-4 p-2 bg-green-100 dark:bg-green-100 rounded-md dark:text-black">
            <strong>Result: </strong> {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default Logarithmic;
