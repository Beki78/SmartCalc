import Options from "@/components/Options";
import { Graph_Calculation_Options } from "@/libs/data";
import React from "react";

const page = () => {
  return (
    <div>
      <Options
        title="Graph Calculation Options"
        options={Graph_Calculation_Options}
      />
    </div>
  );
};

export default page;
