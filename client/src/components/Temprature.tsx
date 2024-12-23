"use client";
import React, { useState } from "react";

const Temperature: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>(""); 
  const [inputUnit, setInputUnit] = useState<string>("Celsius"); 
  const [outputUnit, setOutputUnit] = useState<string>("Fahrenheit"); 
  const [result, setResult] = useState<string>(""); 

  const handleConversion = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setResult("Please enter a valid number.");
      return;
    }

    let convertedValue = value;

    if (inputUnit === "Celsius" && outputUnit === "Fahrenheit") {
      convertedValue = value * (9 / 5) + 32;
    } else if (inputUnit === "Celsius" && outputUnit === "Kelvin") {
      convertedValue = value + 273.15;
    } else if (inputUnit === "Fahrenheit" && outputUnit === "Celsius") {
      convertedValue = (value - 32) * (5 / 9);
    } else if (inputUnit === "Fahrenheit" && outputUnit === "Kelvin") {
      convertedValue = (value - 32) * (5 / 9) + 273.15;
    } else if (inputUnit === "Kelvin" && outputUnit === "Celsius") {
      convertedValue = value - 273.15;
    } else if (inputUnit === "Kelvin" && outputUnit === "Fahrenheit") {
      convertedValue = (value - 273.15) * (9 / 5) + 32;
    }

    if (inputUnit === outputUnit) {
      convertedValue = value;
    }

    setResult(`${convertedValue.toFixed(2)} ${outputUnit}`);
  };

  return (
    <div className="p-10 lg:p-20 bg-gray-100 dark:bg-gray-900 lg:min-h-screen shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center dark:text-white">
        Temperature Converter
      </h2>

      {/* Input Section */}
      <div className="mb-4">
        <label className="block font-medium mb-2 dark:text-white">
          Enter Temperature:
        </label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter value"
        />
      </div>

      {/* Input Unit Selection */}
      <div className="mb-4">
        <label className="block font-medium mb-2 dark:text-white">From:</label>
        <select
          value={inputUnit}
          onChange={(e) => setInputUnit(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="Celsius">Celsius (°C)</option>
          <option value="Fahrenheit">Fahrenheit (°F)</option>
          <option value="Kelvin">Kelvin (K)</option>
        </select>
      </div>

      {/* Output Unit Selection */}
      <div className="mb-4">
        <label className="block font-medium mb-2 dark:text-white">To:</label>
        <select
          value={outputUnit}
          onChange={(e) => setOutputUnit(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="Celsius">Celsius (°C)</option>
          <option value="Fahrenheit">Fahrenheit (°F)</option>
          <option value="Kelvin">Kelvin (K)</option>
        </select>
      </div>

      {/* Convert Button */}
      <button
        onClick={handleConversion}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Convert
      </button>

      {/* Result Section */}
      {result && (
        <div className="mt-4 p-2 bg-green-100 text-black rounded ">
          <h3 className="font-medium">Result: {result}</h3>
         
        </div>
      )}
    </div>
  );
};

export default Temperature;
