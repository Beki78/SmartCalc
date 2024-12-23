import Header from "@/components/Header";
import React from "react";
import { calculator_category } from "@/libs/data";
import AIChat from "@/components/AIChat";
import Logarithmic from "@/components/Logarithmic";

const Pages = () => {
  return (
    <div>
      <Header
        title={calculator_category[1].name}
        description={calculator_category[1].info}
      />
      <div className="flex flex-col lg:flex-row">
        {/* Calculator section */}
        <div className="lg:w-3/5">
          <Logarithmic />
        </div>

        {/* Description section */}
        <div className="lg:w-2/5 min-h-full">
          <h1 className="text-sm bg-gray-100 dark:text-white dark:bg-slate-700 p-4">
            ℹ️ This Logarithmic Calculator is a simple and user-friendly tool
            designed to calculate logarithmic values with ease. It allows users
            to input a number and select a base (common logarithm, natural
            logarithm, or a custom base) to compute the logarithmic result.
            Ideal for solving math problems, understanding logarithmic concepts,
            or performing quick calculations, this tool provides accurate
            results and a seamless interface. Whether you&apos;re studying
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
