import Header from "@/components/Header";
import React from "react";
import { calculator_category } from "@/libs/data";
import Calculator from "@/components/Calculator";
import AIChat from "@/components/AIChat";
import Trigonometric from "@/components/Trigonometric";
import ExponentsAndRoots from "@/components/Exponents_and_Roots";

const Pages = () => {
  return (
    <div>
      <Header
        title={calculator_category[1].name}
        description={calculator_category[1].info}
      />
      <div className="flex">
        {/* Calculator section */}
        <div className="w-3/5">
          <ExponentsAndRoots />
        </div>

        {/* Description section */}
        <div className="w-2/5 min-h-full">
          <h1 className="text-sm bg-gray-100 dark:text-white dark:bg-slate-700 p-4">
            ℹ️ This Exponents and Roots Calculator is a simple and user-friendly
            tool designed to handle basic mathematical operations involving
            exponents and roots. It allows users to input a base value and
            either calculate its power (exponent) or extract its root, depending
            on the selected operation. With a seamless interface, users can
            choose between calculating exponential values or nth roots, making
            it ideal for solving math problems, exploring algebraic concepts, or
            performing quick calculations. The tool ensures accurate results,
            whether you're studying or working on complex equations.
          </h1>
          <AIChat />
        </div>
      </div>
    </div>
  );
};

export default Pages;
