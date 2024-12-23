import OptionFinancial from "@/components/OptionFinancial";
import { Financial_Calculation_Options } from "@/libs/data";
import React from "react";

const page = () => {
  return (
    <div>
      <OptionFinancial
        title="Financial Calculation Options"
        options={Financial_Calculation_Options}
      />
    </div>
  );
};

export default page;
