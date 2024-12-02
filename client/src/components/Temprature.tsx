"use client";
import React, { useState } from "react";

const Temperature: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>(""); // Input temperature value
  const [inputUnit, setInputUnit] = useState<string>("Celsius"); // Unit to convert from
  const [outputUnit, setOutputUnit] = useState<string>("Fahrenheit"); // Unit to convert to
  const [result, setResult] = useState<string>(""); // Result of the conversion

  // Handle temperature conversion
  const handleConversion = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setResult("Please enter a valid number.");
      return;
    }

    let convertedValue = value;

    // Perform conversions based on selected units
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

    // If inputUnit and outputUnit are the same, return the same value
    if (inputUnit === outputUnit) {
      convertedValue = value;
    }

    setResult(`${convertedValue.toFixed(2)} ${outputUnit}`);
  };

  return (
    <div className="p-20 bg-gray-100 dark:bg-gray-900 min-h-screen shadow-md">
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
        <div className="mt-4 p-2 bg-gray-200 rounded text-center">
          <h3 className="font-medium">Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Temperature;
