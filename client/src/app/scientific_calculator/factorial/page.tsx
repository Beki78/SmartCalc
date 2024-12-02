import Header from "@/components/Header";
import React from "react";
import { calculator_category } from "@/libs/data";
import Calculator from "@/components/Calculator";
import AIChat from "@/components/AIChat";
import Trigonometric from "@/components/Trigonometric";
import ExponentsAndRoots from "@/components/Exponents_and_Roots";
import Logarithmic from "@/components/Logarithmic";
import Factorial from "@/components/Factorial";

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
          <Factorial />
        </div>

        {/* Description section */}
        <div className="w-2/5 min-h-full">
          <h1 className="text-sm bg-gray-100 dark:text-white dark:bg-slate-700 p-4">
            ℹ️ This Factorial Calculator is a simple and user-friendly tool
            designed to calculate the factorial of a non-negative integer. It
            allows users to input a number and instantly compute its factorial,
            making it ideal for solving mathematical problems, understanding
            combinatorics, or performing quick calculations. With a seamless
            interface, this tool ensures accurate results, whether you're
            studying mathematics, working on probability problems, or exploring
            advanced mathematical concepts. This calculator is perfect for
            students, teachers, and anyone needing quick and reliable factorial
            computations.
          </h1>
          <AIChat />
        </div>
      </div>
    </div>
  );
};

export default Pages;
