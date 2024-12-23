"use client";

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { evaluate } from "mathjs";

interface ChartData {
  labels: number[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    borderWidth: number;
  }[];
}

const LogarithmicGraph = () => {
  const [logFunction, setLogFunction] = useState<string>("");
  const [data, setData] = useState<ChartData | null>(null); 
  const [error, setError] = useState<string>("");

  const generateGraph = () => {
    try {
      setError("");

      if (!logFunction) {
        setError("Please enter a valid logarithmic function.");
        return;
      }

      // Generate x values
      const xValues = Array.from({ length: 100 }, (_, i) => i + 1); 
      const yValues = xValues.map((x) => evaluate(logFunction, { x }));

      const chartData: ChartData = {
        labels: xValues,
        datasets: [
          {
            label: `y = ${logFunction}`,
            data: yValues,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
          },
        ],
      };

      setData(chartData);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError(
        "Invalid function! Please ensure you enter a valid logarithmic expression."
      );
      setData(null);
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 lg:min-h-screen shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center dark:text-white">
        Logarithmic Graph Plotter
      </h2>
      <div className="mb-4">
        <label className="block mb-2 font-medium dark:text-white">
          Logarithmic Function (e.g., log(x), ln(x), log10(x)):
        </label>
        <input
          type="text"
          value={logFunction}
          onChange={(e) => setLogFunction(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter logarithmic function"
        />
      </div>
      <button
        onClick={generateGraph}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Show Graph
      </button>
      {error && (
        <div className="mt-4 p-3 bg-red-100 border rounded text-red-700">
          {error}
        </div>
      )}
      {data && (
        <div className="mt-6">
          <Line
            data={data}
            options={{
              responsive: true,
              plugins: {
                legend: { display: true },
                tooltip: { enabled: true },
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default LogarithmicGraph;
