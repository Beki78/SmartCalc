import Header from "@/components/Header";
import React from "react";
import { calculator_category } from "@/libs/data";
import Calculator from "@/components/Calculator";
import AIChat from "@/components/AIChat";

const Pages = () => {
  return (
    <div>
      <Header
        title={calculator_category[0].name}
        description={calculator_category[0].info}
      />
      <div className="flex">
        {/* Calculator section */}
        <div className="w-3/5">
          <Calculator />
        </div>

        {/* Description section */}
        <div className="w-2/5 min-h-full">
          <h1 className="text-sm bg-gray-100 dark:text-white dark:bg-slate-700 p-4">
            ℹ️This calculator is a simple and user-friendly tool designed to
            handle basic arithmetic operations such as addition, subtraction,
            multiplication, and division. Whether you're solving everyday math
            problems or just need quick calculations, this app provides an
            intuitive interface for your needs.
          </h1>
          <AIChat/>
        </div>
      </div>
    </div>
  );
};

export default Pages;
