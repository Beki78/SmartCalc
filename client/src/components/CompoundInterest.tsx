"use client"
import React, { useState } from "react";

const CompoundInterest = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [compoundsPerYear, setCompoundsPerYear] = useState("");
  const [result, setResult] = useState("");

  const calculateCompoundInterest = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseInt(compoundsPerYear);

    if (isNaN(P) || isNaN(r) || isNaN(t) || isNaN(n) || n <= 0) {
      setResult("Invalid input. Please enter valid numbers.");
      return;
    }

    const A = P * Math.pow(1 + r / n, n * t);
    const CI = A - P;

    setResult(
      `Total Amount: ${A.toFixed(2)}, Compound Interest: ${CI.toFixed(2)}`
    );
  };

  return (
    <div className="p-10 lg:p-20 bg-white dark:bg-gray-900 lg:min-h-screen shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4 dark:text-white">
        Compound Interest Calculator
      </h2>
      <div className="mb-4">
        <label className="block mb-1 dark:text-white">
          Principal Amount (P):
        </label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          placeholder="Enter principal amount"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 dark:text-white">
          Annual Interest Rate (R%):
        </label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Enter interest rate"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 dark:text-white">Time (T in years):</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter time in years"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium dark:text-white">
          Compounds Per Year (N):
        </label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={compoundsPerYear}
          onChange={(e) => setCompoundsPerYear(e.target.value)}
          placeholder="Enter number of compounds per year"
        />
      </div>
      <button
        onClick={calculateCompoundInterest}
        className="w-full p-2 bg-blue-500 text-white font-semibold rounded"
      >
        Calculate
      </button>
      <div className="mt-4 bg-green-100 p-3 rounded-md dark:text-black">
        {result && <p className="">{result}</p>}
      </div>
    </div>
  );
};

export default CompoundInterest;
