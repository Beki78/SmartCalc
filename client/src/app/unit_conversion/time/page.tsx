import Header from "@/components/Header";
import React from "react";
import { calculator_category } from "@/libs/data";
import Calculator from "@/components/Calculator";
import AIChat from "@/components/AIChat";
import Trigonometric from "@/components/Trigonometric";
import ExponentsAndRoots from "@/components/Exponents_and_Roots";
import Length from "@/components/Length";
import Temperature from "@/components/Temprature";
import Weight from "@/components/Weight";
import Time from "@/components/Time";

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
          <Time />
        </div>

        {/* Description section */}
        <div className="w-2/5 min-h-full">
          <h1 className="text-sm bg-gray-100 dark:text-white dark:bg-slate-700 p-4">
            ℹ️ This Time Converter is a simple and user-friendly tool designed
            to handle time conversions with ease. It allows users to input a
            time value and convert it between different units, such as seconds,
            minutes, hours, and days. With a seamless interface, users can
            quickly select the input and output units to obtain accurate
            results. Whether you're solving time-related problems, scheduling
            events, or working on scientific calculations, this tool ensures
            fast and reliable conversions. Perfect for students, professionals,
            and anyone needing quick and accurate time calculations.
          </h1>
          <AIChat />
        </div>
      </div>
    </div>
  );
};

export default Pages;
