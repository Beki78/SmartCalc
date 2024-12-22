"use client"

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { create, all } from "mathjs";

const math = create(all);

const AbsoluteValueGraph = () => {
  const [expression, setExpression] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handlePlotGraph = () => {
    try {
      setError(null);

      // Generate x values
      const xValues = Array.from({ length: 200 }, (_, i) => -50 + i * 0.5); // Range: -50 to 50
      const yValues = xValues.map((x) =>
        math.evaluate(expression.replace(/\|/g, "abs"), { x })
      );

      // Set graph data
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
    } catch (err) {
      setError(
        "Invalid function. Please enter a valid absolute value expression (e.g., |x|, |x - 2| + 3)."
      );
    }
  };

  return (
    <div className="p-8 bg-white dark:bg-gray-900 min-h-screen">
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
