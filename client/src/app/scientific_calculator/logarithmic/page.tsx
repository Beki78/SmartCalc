import Header from "@/components/Header";
import React from "react";
import { calculator_category } from "@/libs/data";
import Calculator from "@/components/Calculator";
import AIChat from "@/components/AIChat";
import Trigonometric from "@/components/Trigonometric";
import ExponentsAndRoots from "@/components/Exponents_and_Roots";
import Logarithmic from "@/components/Logarithmic";

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
          <Logarithmic />
        </div>

        {/* Description section */}
        <div className="w-2/5 min-h-full">
          <h1 className="text-sm bg-gray-100 dark:text-white dark:bg-slate-700 p-4">
            ℹ️ This Logarithmic Calculator is a simple and user-friendly tool
            designed to calculate logarithmic values with ease. It allows users
            to input a number and select a base (common logarithm, natural
            logarithm, or a custom base) to compute the logarithmic result.
            Ideal for solving math problems, understanding logarithmic concepts,
            or performing quick calculations, this tool provides accurate
            results and a seamless interface. Whether you're studying
            mathematics, working on scientific calculations, or exploring
            logarithmic functions, this calculator is perfect for your needs.
          </h1>
          <AIChat />
        </div>
      </div>
    </div>
  );
};

export default Pages;
