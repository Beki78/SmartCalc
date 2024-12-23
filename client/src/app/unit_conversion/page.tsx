import OptionUnit from "@/components/OptionUnit";
import { Unit_Conversion_Options } from "@/libs/data";
import React from "react";

const page = () => {
  return (
    <div>
      <OptionUnit
        title="Unit Conversion Options"
        options={Unit_Conversion_Options}
      />
    </div>
  );
};

export default page;
