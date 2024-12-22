import Header from "@/components/Header";
import React from "react";
import { calculator_category } from "@/libs/data";
import Calculator from "@/components/Calculator";
import AIChat from "@/components/AIChat";
import Trigonometric from "@/components/Trigonometric";
import ExponentsAndRoots from "@/components/Exponents_and_Roots";
import Length from "@/components/Length";
import EMI from "@/components/EMI";
import CompoundInterest from "@/components/CompoundInterest";
import Quadratic from "@/components/Quadratic";
import LogarithmicGraph from "@/components/LogarithmicGraph";

const page = () => {
  return (
    <div>
      <Header
        title={calculator_category[5].name}
        description={calculator_category[5].info}
      />
      <div className="flex">
        {/* Calculator section */}
        <div className="w-3/5">
          <LogarithmicGraph />
        </div>

        {/* Description section */}
        <div className="w-2/5 min-h-full">
          <h1 className="text-sm bg-gray-100 dark:text-white dark:bg-slate-700 p-4">
            ℹ️ This Quadratic Graph Plotter is a simple and user-friendly tool
            designed to help you visualize quadratic equations in a graph
            format. By inputting a quadratic equation (e.g., x^2 - 4x + 3),
            users can instantly generate a graph displaying the curve of the
            function. Whether you're a student studying mathematics, a
            professional analyzing data, or someone exploring mathematical
            concepts, this tool provides accurate visualizations with a seamless
            interface. Perfect for educational purposes, problem-solving, and
            gaining deeper insights into quadratic functions.
          </h1>
          <AIChat />
        </div>
      </div>
    </div>
  );
};

export default page;
