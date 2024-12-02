import Header from "@/components/Header";
import React from "react";
import { calculator_category } from "@/libs/data";
import Calculator from "@/components/Calculator";
import AIChat from "@/components/AIChat";
import Trigonometric from "@/components/Trigonometric";
import ExponentsAndRoots from "@/components/Exponents_and_Roots";
import Length from "@/components/Length";
import EMI from "@/components/EMI";

const page = () => {
  return (
    <div>
      <Header
        title={calculator_category[3].name}
        description={calculator_category[3].info}
      />
      <div className="flex">
        {/* Calculator section */}
        <div className="w-3/5">
          <EMI />
        </div>

        {/* Description section */}
        <div className="w-2/5 min-h-full">
          <h1 className="text-sm bg-gray-100 dark:text-white dark:bg-slate-700 p-4">
            ℹ️ This EMI Calculator is a simple and user-friendly tool designed
            to help you calculate Equated Monthly Installments for loans. By
            inputting the principal loan amount, annual interest rate, and loan
            tenure, users can instantly determine their monthly payment. Whether
            you're planning finances, managing a loan, or exploring repayment
            options, this tool provides accurate results with a seamless
            interface. Perfect for students, professionals, and anyone looking
            for reliable and quick EMI calculations for personal or professional
            use.
          </h1>
          <AIChat />
        </div>
      </div>
    </div>
  );
};

export default page;
