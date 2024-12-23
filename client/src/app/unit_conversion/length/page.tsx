import Header from "@/components/Header";
import React from "react";
import { calculator_category } from "@/libs/data";
import AIChat from "@/components/AIChat";
import Length from "@/components/Length";

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
          <Length />
        </div>

        {/* Description section */}
        <div className="lg:w-2/5 min-h-full">
          <h1 className="text-sm bg-gray-100 dark:text-white dark:bg-slate-700 p-4">
            ℹ️ This Length Converter is a simple and user-friendly tool designed
            to handle unit conversions for various lengths and distances. It
            allows users to input a value, select a unit to convert from, and
            choose a unit to convert to, instantly providing accurate results.
            Whether you&apos;re working on everyday calculations, scientific
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
