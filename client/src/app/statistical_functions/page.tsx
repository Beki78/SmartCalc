import Header from "@/components/Header";
import React from "react";
import { calculator_category } from "@/libs/data";
import AIChat from "@/components/AIChat";
import Statistics from "@/components/Statstics";

const Pages = () => {
  return (
    <div>
      <Header
        title={calculator_category[4].name}
        description={calculator_category[4].info}
      />
      <div className="flex flex-col lg:flex-row">
        {/* Calculator section */}
        <div className="lg:w-3/5">
          <Statistics />
        </div>

        {/* Description section */}
        <div className="lg:w-2/5 min-h-full">
          <h1 className="text-sm bg-gray-100 dark:text-white dark:bg-slate-700 p-4">
            ℹ️ This Statistics Calculator is a simple and user-friendly tool
            designed to compute essential statistical measures such as mean,
            median, mode, variance, and standard deviation. It allows users to
            input a dataset and instantly obtain detailed statistical insights.
            Whether you&apos;re analyzing data for academic purposes, conducting
            research, or working on everyday statistical problems, this tool
            provides accurate results with an intuitive interface. Perfect for
            students, data analysts, and professionals looking for quick and
            reliable statistical computations.
          </h1>
          <AIChat />
        </div>
      </div>
    </div>
  );
};

export default Pages;
