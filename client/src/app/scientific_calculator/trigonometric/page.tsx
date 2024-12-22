import Header from "@/components/Header";
import React from "react";
import { calculator_category } from "@/libs/data";
import AIChat from "@/components/AIChat";
import Trigonometric from "@/components/Trigonometric";

const Pages = () => {
  return (
    <div>
      <Header
        title={calculator_category[1].name}
        description={calculator_category[1].info}
      />
      <div className="flex flex-col lg:flex-row">
        {/* Calculator section */}
        <div className="w-full lg:w-3/5">
          <Trigonometric />
        </div>

        {/* Description section */}
        <div className="w-full lg:w-2/5 min-h-full">
          <h1 className="text-sm bg-gray-100 dark:text-white dark:bg-slate-700 p-4">
            ℹ️ This Trigonometric Calculator is a simple and user-friendly tool
            designed to calculate basic trigonometric functions like sine,
            cosine, and tangent. It allows users to input an angle in either
            radians or degrees and instantly provides accurate results. Whether
            you&apos;re solving math problems, working on geometry, or exploring
            trigonometric concepts, this app offers an intuitive interface to
            make calculations quick and seamless.
          </h1>
          <AIChat />
        </div>
      </div>
    </div>
  );
};

export default Pages;
