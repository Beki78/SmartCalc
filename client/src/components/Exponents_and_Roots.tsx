"use client";

import React, { useState } from "react";
import { evaluate } from "mathjs"; 

const ExponentsAndRoots: React.FC = () => {
  const [base, setBase] = useState<string>("");
  const [exponent, setExponent] = useState<string>(""); 
  const [operation, setOperation] = useState<string>("exponent"); 
  const [result, setResult] = useState<number | string>("");

  const calculateResult = () => {
    try {
      const baseValue = parseFloat(base);
      const exponentValue = parseFloat(exponent);

      if (isNaN(baseValue) || isNaN(exponentValue)) {
        setResult("Invalid Input");
        return;
      }

      let calcResult;
      if (operation === "exponent") {
        calcResult = evaluate(`${baseValue} ^ ${exponentValue}`); 
      } else if (operation === "root") {
        calcResult = evaluate(`nthRoot(${baseValue}, ${exponentValue})`);
      }

      setResult(calcResult);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setResult("Error in Calculation");
    }
  };

  return (
    <div className="p-10 lg:p-20 bg-gray-100 dark:bg-gray-900 lg:min-h-screen shadow-md ">
      <h2 className="text-xl font-semibold mb-4 text-center dark:text-white">
        Exponents and Roots Calculator
      </h2>
      <div className="space-y-4">
        {/* Base Input */}
        <div>
          <label
            htmlFor="base"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Base:
          </label>
          <input
            type="number"
            id="base"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            className="w-full p-2 border rounded outline-none  dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Exponent/Root Input */}
        <div>
          <label
            htmlFor="exponent"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Exponent/Root Degree:
          </label>
          <input
            type="number"
            id="exponent"
            value={exponent}
            onChange={(e) => setExponent(e.target.value)}
            className="w-full p-2 border rounded outline-none dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Operation Selection */}
        <div className="flex  items-center space-x-4">
          <label className="flex items-center dark:text-white">
            <input
              type="radio"
              name="operation"
              value="exponent"
              checked={operation === "exponent"}
              onChange={(e) => setOperation(e.target.value)}
              className="mr-2"
            />
            Exponent
          </label>
          <label className="flex items-center dark:text-white">
            <input
              type="radio"
              name="operation"
              value="root"
              checked={operation === "root"}
              onChange={(e) => setOperation(e.target.value)}
              className="mr-2"
            />
            Root
          </label>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateResult}
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Calculate
        </button>

        {/* Result Display */}
        {result !== "" && (
          <div className="mt-4 p-2 bg-green-100 dark:bg-green-100 rounded text-center dark:text-black">
            <span className="font-medium ">Result:</span> {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExponentsAndRoots;
