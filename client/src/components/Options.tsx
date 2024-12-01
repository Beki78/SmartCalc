"use client";

import React from "react";
import { useStore } from "../store/store"; // Assuming you already have a store for theme management
import Link from "next/link";
import { OptionsProps } from "@/types/types";



const Options: React.FC<OptionsProps> = ({ options, title }) => {
  const { theme } = useStore(); 

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } p-4 min-h-screen shadow-md`}
    >
      <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
      <ul className="space-y-7 mt-20 text-center">
        {options.map((item, index) => (
          <li key={index} className="cursor-pointer w-1/2 mx-auto ">
            <Link
              href={"/scientific_calculator" + item.path}
              className={`block p-2 rounded-md py-4 ${
                theme === "dark"
                  ? "hover:bg-gray-500 text-white bg-gray-700"
                  : "hover:bg-gray-400 text-black bg-gray-200"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Options;
