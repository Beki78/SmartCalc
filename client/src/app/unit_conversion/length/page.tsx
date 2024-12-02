import Header from "@/components/Header";
import React from "react";
import { calculator_category } from "@/libs/data";
import Calculator from "@/components/Calculator";
import AIChat from "@/components/AIChat";
import Trigonometric from "@/components/Trigonometric";
import ExponentsAndRoots from "@/components/Exponents_and_Roots";
import Length from "@/components/Length";

const Pages = () => {
  return (
    <div>
      <Header
        title={calculator_category[2].name}
        description={calculator_category[2].info}
      />
      <div className="flex">
        {/* Calculator section */}
        <div className="w-3/5">
          <Length />
        </div>

        {/* Description section */}
        <div className="w-2/5 min-h-full">
          <h1 className="text-sm bg-gray-100 dark:text-white dark:bg-slate-700 p-4">
            ℹ️ This Length Converter is a simple and user-friendly tool designed
            to handle unit conversions for various lengths and distances. It
            allows users to input a value, select a unit to convert from, and
            choose a unit to convert to, instantly providing accurate results.
            Whether you're working on everyday calculations, scientific
            measurements, or academic problems, this tool offers a seamless
            interface for quick and reliable length conversions. Perfect for
            students, professionals, and anyone needing precise conversions
            between units such as meters, kilometers, miles, inches, and more.
          </h1>
          <AIChat />
        </div>
      </div>
    </div>
  );
};

export default Pages;
