import OptionGraph from "@/components/OptionGraph";
import Options from "@/components/Options";
import { Graph_Calculation_Options } from "@/libs/data";
import React from "react";

const page = () => {
  return (
    <div>
      <OptionGraph
        title="Graph Calculation Options"
        options={Graph_Calculation_Options}
      />
    </div>
  );
};

export default page;
