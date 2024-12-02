"use client";

import React, { useState } from "react";
import { factorial } from "mathjs";

const Factorial: React.FC = () => {
  const [number, setNumber] = useState<string>(""); // Input number
  const [result, setResult] = useState<number | string>(""); // Result

  // Handle factorial calculation
  const calculateFactorial = () => {
    const parsedNumber = parseInt(number, 10);
    let ans;
    if (isNaN(parsedNumber) || parsedNumber < 0) {
      setResult("Please enter a non-negative integer."); // Validation
    } else {
      try {
        ans = factorial(parsedNumber); // Calculate factorial
        setResult(`${number} factorial == ${ans}`);
      } catch (error) {
        setResult("Error: Number too large."); // Handle large number errors
      }
    }
  };

  return (
    <div className=" mx-auto p-20 min-h-screen bg-white dark:bg-gray-900  shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center dark:text-white">
        Factorial Calculator
      </h2>

      <div className="flex flex-col items-center space-y-4">
        {/* Input Field */}
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
          className="w-full p-2 border rounded outline-none dark:bg-gray-700 dark:text-white"
        />

        {/* Calculate Button */}
        <button
          onClick={calculateFactorial}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Calculate Factorial
        </button>

        {/* Result Display */}
        {result !== "" && (
          <div className="mt-4 p-2 bg-gray-200 dark:bg-gray-700 rounded text-center dark:text-white">
            <span className="font-bold">Result:</span> {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default Factorial;
