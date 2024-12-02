import Header from "@/components/Header";
import React from "react";
import { calculator_category } from "@/libs/data";
import Calculator from "@/components/Calculator";
import AIChat from "@/components/AIChat";
import Trigonometric from "@/components/Trigonometric";
import ExponentsAndRoots from "@/components/Exponents_and_Roots";
import Constants from "@/components/Constants";

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
          <Constants />
        </div>

        {/* Description section */}
        <div className="w-2/5 min-h-full">
          <h1 className="text-sm bg-gray-100 dark:text-white dark:bg-slate-700 p-4">
            ℹ️ This Mathematical Constants Calculator is a simple and
            user-friendly tool designed to provide the values of fundamental
            physical and mathematical constants. It allows users to easily
            access important constants like Pi (π), gravitational acceleration
            (g), speed of light (c), Euler's number (e), Planck's constant (h),
            and many others. With an intuitive interface, users can quickly
            retrieve values for these constants, making it ideal for solving
            physics, chemistry, and engineering problems, or for anyone
            exploring scientific concepts. This tool ensures accurate results,
            whether you're studying or performing scientific calculations.
          </h1>
          <AIChat />
        </div>
      </div>
    </div>
  );
};

export default Pages;
