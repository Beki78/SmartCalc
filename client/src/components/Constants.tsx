"use client";
import React, { useState } from "react";
import { create, all } from "mathjs";
import { ConstantType } from "@/types/types";

const math = create(all);

const Constants: React.FC = () => {
  const [result, setResult] = useState<string>("");

  // Constants
  const constants: ConstantType = {
    pi: math.pi,
    gravity: 9.81,
    speedOfLight: 299792458, 
    euler: math.e, 
    plancksConstant: 6.62607015e-34, 
    gravitationalConstant: 6.6743e-11, 
    avogadro: 6.02214076e23, 
    boltzmann: 1.380649e-23, 
  };

  // Handle the constant selection and calculation
  const handleConstantClick = (constant: keyof ConstantType) => {
    setResult(
      constants[constant] ? constants[constant].toString() : "Invalid constant"
    );
  };

  return (
    <div className="p-20 bg-white dark:bg-gray-900 min-h-screen">
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
            Euler's Number (e)
          </button>
          <button
            className="p-2 bg-blue-500 text-white rounded"
            onClick={() => handleConstantClick("plancksConstant")}
          >
            Planck's Constant (h)
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
            Avogadro's Number (N<sub>A</sub>)
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
        <p className="dark:text-white">
          {result || "Select a constant to view its value."}
        </p>
      </div>
    </div>
  );
};

export default Constants;
