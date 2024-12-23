"use client";

import React, { useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { create, all } from "mathjs";
import { ChartData } from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

const math = create(all);

const AbsoluteValueGraph: React.FC = () => {
  const [expression, setExpression] = useState<string>(""); 
  const [data, setData] = useState<ChartData<"line"> | null>(null); 
  const [error, setError] = useState<string | null>(null); 

  const parseExpression = (input: string): string => {
    return input.replace(/\|([^|]+)\|/g, "abs($1)");
  };

  const handlePlotGraph = () => {
    try {
      setError(null);

      const parsedExpression = parseExpression(expression);

      const xValues = Array.from({ length: 200 }, (_, i) => -50 + i * 0.5);

      const yValues = xValues.map((x) =>
        math.evaluate(parsedExpression, { x })
      );

      setData({
        labels: xValues,
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
        "Invalid function. Please enter a valid absolute value expression (e.g., |x|, |x - 2| + 3)."
      );
    }
  };

  return (
    <div className="p-8 bg-white dark:bg-gray-900 lg:min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-center dark:text-white">
        Absolute Value Graph Plotter
      </h2>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        ℹ️ This Absolute Value Graph Plotter is a simple and user-friendly tool
        designed to help you visualize absolute value equations in a graph
        format. By inputting an absolute value equation (e.g., |x|, |x - 2| +
        3), users can instantly generate a graph displaying the curve of the
        function. Perfect for students, professionals, and anyone exploring
        mathematical concepts.
      </p>
      <div className="mb-4">
        <label className="block mb-2 font-medium dark:text-white">
          Enter an Absolute Value Function (e.g., |x|, |x - 3| + 2):
        </label>
        <input
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="e.g., |x|, |x - 3| + 2"
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
                    text: "x",
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

export default AbsoluteValueGraph;
