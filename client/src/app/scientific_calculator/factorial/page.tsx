import Header from "@/components/Header";
import React from "react";
import { calculator_category } from "@/libs/data";
import Factorial from "@/components/Factorial";
import AIChat from "@/components/AIChat";

const Pages = () => {
  return (
    <div>
      <Header
        title={calculator_category[1].name}
        description={calculator_category[1].info}
      />
      <div className="flex flex-col lg:flex-row">
        {/* Calculator section */}
        <div className=" lg:w-3/5">
          <Factorial />
        </div>

        {/* Description section */}
        <div className="lg:w-2/5 min-h-full">
          <h1 className="text-sm bg-gray-100 dark:text-white dark:bg-slate-700 p-4">
            ℹ️ This Factorial Calculator is a simple and user-friendly tool
            designed to calculate the factorial of a non-negative integer. It
            allows users to input a number and instantly compute its factorial,
            making it ideal for solving mathematical problems, understanding
            combinatorics, or performing quick calculations. With a seamless
            interface, this tool ensures accurate results, whether you&apos;re
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
