"use client";
import React, { useState } from "react";
import { constants, ConstantType } from "@/types/types";

const Constants: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const handleConstantClick = (constant: keyof ConstantType) => {
    const constantValue = constants[constant];
    const constantName = constant.charAt(0).toUpperCase() + constant.slice(1);
    const formattedResult = constantValue
      ? `${constantName}: ${constantValue.toString()}`
      : "Invalid constant";
    setResult(formattedResult);
  };
  return (
    <div className="p-10 lg:p-20 bg-white dark:bg-gray-900 lg:min-h-screen">
      <h2 className="text-xl font-semibold mb-4 text-center dark:text-white">
        Mathematical Constants
      </h2>
      <div className="mb-4">
        <p className="text-lg dark:text-white">
          Select a constant to get its value:
        </p>
        <div className="space-y-5 space-x-7">
          <button
            className="p-2 bg-blue-500 text-white rounded"
            onClick={() => handleConstantClick("pi")}
          >
            Pi (π)
          </button>
          <button
            className="p-2 bg-blue-500 text-white rounded"
            onClick={() => handleConstantClick("gravity")}
          >
            Gravitational Acceleration (g)
          </button>
          <button
            className="p-2 bg-blue-500 text-white rounded"
            onClick={() => handleConstantClick("speedOfLight")}
          >
            Speed of Light (c)
          </button>
          <button
            className="p-2 bg-blue-500 text-white rounded"
            onClick={() => handleConstantClick("euler")}
          >
            Euler&apos;s Number (e)
          </button>
          <button
            className="p-2 bg-blue-500 text-white rounded"
            onClick={() => handleConstantClick("plancksConstant")}
          >
            Planck&apos;s Constant (h)
          </button>
          <button
            className="p-2 bg-blue-500 text-white rounded"
            onClick={() => handleConstantClick("gravitationalConstant")}
          >
            Gravitational Constant (G)
          </button>
          <button
            className="p-2 bg-blue-500 text-white rounded"
            onClick={() => handleConstantClick("avogadro")}
          >
            Avogadro&apos;s Number (N<sub>A</sub>)
          </button>
          <button
            className="p-2 bg-blue-500 text-white rounded"
            onClick={() => handleConstantClick("boltzmann")}
          >
            Boltzmann Constant (k<sub>B</sub>)
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold dark:text-white">
          Selected Constant Value:
        </h3>
        <p className="dark:text-black bg-green-100 p-3 rounded-md">
          {result || "Select a constant to view its value."}
        </p>
      </div>
    </div>
  );
};

export default Constants;
