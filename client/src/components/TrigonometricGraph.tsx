"use client"

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { create, all } from "mathjs";

const math = create(all);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    borderWidth: number;
    fill: boolean;
  }[];
}

const TrigonometricGraph = () => {
  const [expression, setExpression] = useState<string>(""); 
  const [data, setData] = useState<ChartData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePlotGraph = () => {
    try {
      setError(null);

      const xValues = Array.from(
        { length: 500 },
        (_, i) => -2 * Math.PI + (i * 4 * Math.PI) / 499
      );

      const yValues = xValues.map((x) => math.evaluate(expression, { x }));

      setData({
        labels: xValues.map((x) => x.toFixed(2)), 
        datasets: [
          {
            label: `y = ${expression}`,
            data: yValues,
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            fill: false,
          },
        ],
      });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError(
        "Invalid function. Please enter a valid trigonometric expression (e.g., sin(x), cos(x), tan(x))."
      );
      setData(null); 
    }
  };

  return (
    <div className="p-8 bg-white dark:bg-gray-900 lg:min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-center dark:text-white">
        Trigonometric Graph Plotter
      </h2>
      <div className="mb-4">
        <label className="block mb-2 font-medium dark:text-white">
          Enter a Trigonometric Function (e.g., sin(x), cos(x), tan(x)):
        </label>
        <input
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="e.g., sin(x)"
        />
      </div>
      <button
        onClick={handlePlotGraph}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Show Graph
      </button>

      {error && <div className="mt-4 text-red-500 font-medium">{error}</div>}

      {data && (
        <div className="mt-8">
          <Line
            data={data}
            options={{
              responsive: true,
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "x (radians)",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "y",
                  },
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TrigonometricGraph;
