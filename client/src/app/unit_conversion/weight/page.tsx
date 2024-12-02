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
          <Weight />
        </div>

        {/* Description section */}
        <div className="w-2/5 min-h-full">
          <h1 className="text-sm bg-gray-100 dark:text-white dark:bg-slate-700 p-4">
            ℹ️ This Weight Converter is a simple and user-friendly tool designed
            to handle weight conversions with ease. It allows users to input a
            weight value and convert it between various units such as kilograms
            (kg), grams (g), pounds (lb), ounces (oz), and milligrams (mg). With
            a seamless interface, users can quickly select the input and output
            units to obtain accurate results. Whether you're working on
            scientific calculations, planning recipes, or measuring weights for
            any purpose, this tool ensures fast and reliable conversions.
            Perfect for students, professionals, and anyone needing quick weight
            calculations.
          </h1>
          <AIChat />
        </div>
      </div>
    </div>
  );
};

export default Pages;
