import Header from "@/components/Header";
import React from "react";
import { calculator_category } from "@/libs/data";
import AIChat from "@/components/AIChat";
import ProfitMargin from "@/components/ProfitMarigin";

const page = () => {
  return (
    <div>
      <Header
        title={calculator_category[3].name}
        description={calculator_category[3].info}
      />
      <div className="flex flex-col lg:flex-row">
        {/* Calculator section */}
        <div className="lg:w-3/5">
          <ProfitMargin />
        </div>

        {/* Description section */}
        <div className="lg:w-2/5 min-h-full">
          <h1 className="text-sm bg-gray-100 dark:text-white dark:bg-slate-700 p-4">
            ℹ️ This Profit Margin Calculator is a simple and user-friendly tool
            designed to help you calculate the profitability of a product or
            service. By inputting the Cost Price (CP) and Selling Price (SP),
            users can instantly determine the profit amount and profit margin
            percentage. Whether you&apos;re analyzing business performance, setting
            pricing strategies, or assessing the financial success of a sale,
            this tool provides accurate results with a seamless interface.
            Perfect for entrepreneurs, business owners, students, and
            professionals looking for quick and reliable profit margin
            calculations. use.
          </h1>
          <AIChat />
        </div>
      </div>
    </div>
  );
};

export default page;
