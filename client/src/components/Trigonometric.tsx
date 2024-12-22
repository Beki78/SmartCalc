"use client";

import React, { useState } from "react";

const Trigonometric = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [angleType, setAngleType] = useState<"radian" | "degree">("radian");
  const [result, setResult] = useState<string>("");

  const calculateTrig = () => {
    const angle = parseFloat(inputValue);
    if (isNaN(angle)) {
      setResult("Invalid input");
      return;
    }

    const angleInRadians =
      angleType === "degree" ? (angle * Math.PI) / 180 : angle;

    const sinValue = Math.sin(angleInRadians).toFixed(4); // Sine value
    const cosValue = Math.cos(angleInRadians).toFixed(4); // Cosine value
    const tanValue = Math.tan(angleInRadians).toFixed(4); // Tangent value

    setResult(
      `Sine: ${sinValue}, Cosine: ${cosValue}, Tangent: ${
        tanValue === "Infinity" || tanValue === "-Infinity"
          ? "Undefined"
          : tanValue
      }`
    );
  };

  return (
    <div className="p-20  mx-auto bg-white min-h-screen dark:bg-gray-900  shadow-md">
      <h2 className="text-2xl font-semibold mb-4 dark:text-white">
        Trigonometric Calculator
      </h2>
      <div className="mb-4">
        <label
          htmlFor="angleInput"
          className="block mb-2 font-medium dark:text-white"
        >
          Enter Angle:
        </label>
        <input
          id="angleInput"
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
          className="w-full p-2 border rounded outline-none "
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium dark:text-white">
          Select Angle Type:
        </label>
        <div className="flex items-center gap-4">
          <label className="flex items-center dark:text-white">
            <input
              type="radio"
              name="angleType"
              value="radian"
              checked={angleType === "radian"}
              onChange={() => setAngleType("radian")}
              className="mr-2 "
            />
            Radian
          </label>
          <label className="flex items-center dark:text-white">
            <input
              type="radio"
              name="angleType"
              value="degree"
              checked={angleType === "degree"}
              onChange={() => setAngleType("degree")}
              className="mr-2"
            />
            Degree
          </label>
        </div>
      </div>
      <button
        onClick={calculateTrig}
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
      >
        Calculate
      </button>
      {result && (
        <div className="mt-4 p-2 bg-green-200 dark:bg-green-200 rounded dark:text-black">
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
};

export default Trigonometric;
