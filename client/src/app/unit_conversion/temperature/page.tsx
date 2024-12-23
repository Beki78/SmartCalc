import Header from "@/components/Header";
import React from "react";
import { calculator_category } from "@/libs/data";
import AIChat from "@/components/AIChat";
import Temperature from "@/components/Temprature";

const Pages = () => {
  return (
    <div>
      <Header
        title={calculator_category[2].name}
        description={calculator_category[2].info}
      />
      <div className="flex flex-col lg:flex-row">
        {/* Calculator section */}
        <div className="lg:w-3/5">
          <Temperature />
        </div>

        {/* Description section */}
        <div className="lg:w-2/5 min-h-full">
          <h1 className="text-sm bg-gray-100 dark:text-white dark:bg-slate-700 p-4">
            ℹ️ This Temperature Converter is a simple and user-friendly tool
            designed to handle temperature conversions with ease. It allows
            users to input a temperature value and convert it between Celsius
            (°C), Fahrenheit (°F), and Kelvin (K). With a seamless interface,
            users can quickly select the input and output units to obtain
            accurate results. Whether you&apos;re solving scientific problems,
            working on engineering calculations, or simply curious about
            temperature differences, this tool ensures fast and reliable
            conversions. Perfect for students, professionals, and anyone needing
            quick temperature calculations.
          </h1>
          <AIChat />
        </div>
      </div>
    </div>
  );
};

export default Pages;
