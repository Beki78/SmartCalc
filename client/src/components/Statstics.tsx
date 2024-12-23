"use client";
import React, { useState } from "react";
import { create, all } from "mathjs";

const math = create(all);

const Statistics = () => {
  const [inputValues, setInputValues] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const calculateStatistics = () => {
    try {
      const values = inputValues
        .split(",")
        .map((val) => parseFloat(val.trim()))
        .filter((num) => !isNaN(num));

      if (values.length === 0) {
        setResult("Please enter valid numbers.");
        return;
      }

      const mean = math.mean(values);
      const median = math.median(values);
      const mode = math.mode(values);
      const variance = math.variance(values);
      const stdDev = math.std(values);

      setResult(`
        Mean: ${Number(mean).toFixed(2)} 
        Median: ${Number(median).toFixed(2)} 
        Mode: ${Array.isArray(mode) ? mode.join(", ") : mode} 
        Variance: ${Number(variance).toFixed(2)} 
        Standard Deviation: ${Number(stdDev).toFixed(2)}
      `);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setResult("An error occurred while calculating statistics.");
    }
  };

  return (
    <div className="p-10 lg:p-20 bg-white dark:bg-gray-900 lg:min-h-screen shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center dark:text-white">
        Statistics Calculator
      </h2>
      <div className="mb-4 ">
        <p className="dark:text-white">
          Enter a comma-separated list of numbers:
        </p>
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
        <h3 className="bg-green-100 dark:text-black p-3 rounded-md">
          Results:{" "}
          <pre className=" ">
            {result || "Enter values and click 'Calculate' to see results."}
          </pre>
        </h3>
      </div>
    </div>
  );
};

export default Statistics;
