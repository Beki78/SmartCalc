"use client"
import React, { useState } from "react";
import { create, all } from "mathjs";

const math = create(all);

const Statistics = () => {
  const [inputValues, setInputValues] = useState<string>(""); // For user input
  const [result, setResult] = useState<string>(""); // To display results

  // Calculate Statistics
  const calculateStatistics = () => {
    try {
      // Parse input values into an array
      const values = inputValues
        .split(",")
        .map((val) => parseFloat(val.trim()))
        .filter((num) => !isNaN(num)); // Remove invalid numbers

      if (values.length === 0) {
        setResult("Please enter valid numbers.");
        return;
      }

      // Perform calculations
      const mean = math.mean(values);
      const median = math.median(values);
      const mode = math.mode(values);
      const variance = math.variance(values);
      const stdDev = math.std(values);

      // Set results
      setResult(`
        Mean: ${Number(mean).toFixed(2)} 
        Median: ${Number(median).toFixed(2)} 
        Mode: ${Array.isArray(mode) ? mode.join(", ") : mode} 
        Variance: ${Number(variance).toFixed(2)} 
        Standard Deviation: ${Number(stdDev).toFixed(2)}
      `);
    } catch (error) {
      setResult("An error occurred while calculating statistics.");
    }
  };

  return (
    <div className="p-20 bg-white dark:bg-gray-900 min-h-screen shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center dark:text-white">
        Statistics Calculator
      </h2>
      <div className="mb-4 dark:text-white">
        <p>Enter a comma-separated list of numbers:</p>
        <input
          type="text"
          value={inputValues}
          onChange={(e) => setInputValues(e.target.value)}
          placeholder="e.g., 10, 20, 30, 40, 50"
          className="w-full p-2 border rounded mt-2"
        />
      </div>
      <button
        className="p-2 bg-blue-500 text-white rounded mt-4"
        onClick={calculateStatistics}
      >
        Calculate
      </button>
      <div className="mt-4">
        <h3 className="text-lg font-semibold dark:text-white">Results:</h3>
        <pre className="dark:text-white">
          {result || "Enter values and click 'Calculate' to see results."}
        </pre>
      </div>
    </div>
  );
};

export default Statistics;
