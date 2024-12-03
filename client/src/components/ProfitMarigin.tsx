"use client"

import React, { useState } from "react";

const ProfitMargin = () => {
  const [costPrice, setCostPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [result, setResult] = useState("");

  const calculateProfitMargin = () => {
    const CP = parseFloat(costPrice);
    const SP = parseFloat(sellingPrice);

    if (isNaN(CP) || isNaN(SP) || CP <= 0) {
      setResult("Invalid input. Please enter valid numbers.");
      return;
    }

    // Profit Margin formula: ((Selling Price - Cost Price) / Selling Price) * 100
    const profit = SP - CP;
    const profitMargin = (profit / SP) * 100;

    setResult(
      `Profit: ${profit.toFixed(2)}, Profit Margin: ${profitMargin.toFixed(2)}%`
    );
  };

  return (
    <div className="p-20 bg-white dark:bg-gray-900 min-h-screen shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4 dark:text-white">
        Profit Margin Calculator
      </h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium dark:text-white">Cost Price (CP):</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={costPrice}
          onChange={(e) => setCostPrice(e.target.value)}
          placeholder="Enter cost price"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium dark:text-white">Selling Price (SP):</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
          placeholder="Enter selling price"
        />
      </div>
      <button
        onClick={calculateProfitMargin}
        className="w-full p-2 bg-blue-500 text-white font-semibold rounded"
      >
        Calculate
      </button>
      <div className="mt-4 text-lg font-medium dark:text-white">
        {result && <p>{result}</p>}
      </div>
    </div>
  );
};

export default ProfitMargin;
