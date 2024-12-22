"use client"

import React, { useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { evaluate } from "mathjs";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// Define the type for graph data
interface GraphData {
  labels: number[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    borderWidth: number;
    pointRadius: number;
  }[];
}

const Quadratic = () => {
  const [equation, setEquation] = useState<string>("");
  const [graphData, setGraphData] = useState<GraphData | null>(null); // Allow graphData to be either GraphData type or null

  const plotGraph = () => {
    try {
      // Generate X values (from -100 to 100)
      const xValues = Array.from({ length: 201 }, (_, i) => i - 100); // [-100 to 100]
      // Generate Y values by evaluating the equation
      const yValues = xValues.map((x) => evaluate(equation, { x }));

      // Prepare data for the graph
      const data: GraphData = {
        labels: xValues,
        datasets: [
          {
            label: `Graph of y = ${equation}`,
            data: yValues,
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            pointRadius: 0,
          },
        ],
      };

      setGraphData(data);
    } catch (error) {
      alert("Invalid equation! Please enter a valid quadratic equation.");
    }
  };

  return (
    <div className="p-8 bg-white dark:bg-gray-900 min-h-screen shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center dark:text-white">
        Quadratic Graph Plotter
      </h2>
      <div className="mb-4">
        <label className="block mb-2 font-medium dark:text-white">
          Enter Quadratic Equation (e.g., x^2 + 2*x - 3):
        </label>
        <input
          type="text"
          value={equation}
          onChange={(e) => setEquation(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter quadratic equation"
        />
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={plotGraph}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Show Graph
        </button>
      </div>
      {graphData && (
        <div className="mt-6">
          <Line
            data={graphData}
            options={{
              responsive: true,
              plugins: {
                legend: { display: true, position: "top" },
              },
              scales: {
                x: { title: { display: true, text: "x-axis" } },
                y: { title: { display: true, text: "y-axis" } },
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Quadratic;
