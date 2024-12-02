"use client"

import React, { useState } from "react";

const EMI = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(principal); // Principal amount
    const R = parseFloat(rate) / (12 * 100); // Monthly interest rate
    const N = parseInt(tenure) * 12; // Loan tenure in months

    if (isNaN(P) || isNaN(R) || isNaN(N) || P <= 0 || R <= 0 || N <= 0) {
      setEmi("Invalid input. Please enter positive values for all fields.");
      return;
    }

    // EMI formula: P * R * (1 + R)^N / [(1 + R)^N - 1]
    const calculatedEMI =
      (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(calculatedEMI.toFixed(2));
  };

  const resetFields = () => {
    setPrincipal("");
    setRate("");
    setTenure("");
    setEmi(null);
  };

  return (
    <div className="p-20 bg-white dark:bg-gray-900 min-h-screen shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center dark:text-white">
        EMI Calculator
      </h2>
      <div className="mb-4">
        <label className="block mb-2 font-medium dark:text-white">
          Principal Amount (₹):
        </label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter principal amount"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium dark:text-white">
          Annual Interest Rate (%):
        </label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter annual interest rate"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium dark:text-white">
          Loan Tenure (years):
        </label>
        <input
          type="number"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter loan tenure in years"
        />
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={calculateEMI}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Calculate EMI
        </button>
        
      </div>
      {emi !== null && (
        <div className="mt-4 p-3 bg-green-100 border rounded">
          <h3 className="text-lg font-medium">Your EMI:</h3>
          <p className="text-xl font-semibold">₹{emi}</p>
        </div>
      )}
    </div>
  );
};

export default EMI;
