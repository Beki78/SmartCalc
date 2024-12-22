"use client";

import React, { useEffect, useState } from "react";
import { calculator_category } from "../libs/data";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "../store/store";
import Header from "../components/Header";
import { SyncLoader } from "react-spinners";

const Page = () => {
  const [showTooltip, setShowTooltip] = useState<number | null>(null);
  const { theme, loading, setLoading } = useStore();
  const [fadeOut, setFadeOut] = useState(false); // Add fadeOut state

  useEffect(() => {
    setLoading(true);
    setFadeOut(false); // Reset fadeOut when loading starts

    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade out
      setTimeout(() => {
        setLoading(false); // Stop loading after fading out
      }, 500); // Match this duration with your CSS transition
    }, 500); // Initial loading duration

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <>
      {loading && (
        <div
          className={`flex justify-center items-center min-h-screen bg-slate-100 transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <SyncLoader size={20} className="to-gray-700" />
        </div>
      )}
      <div className={`${theme === "dark" ? "dark" : ""}`}>
        <Header
          title="SmartCalc"
          description="A simple calculator for your everyday needs with AI"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-20 min-h-screen bg-white dark:bg-slate-700">
          {calculator_category.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="relative flex flex-col items-center justify-center text-center h-72 bg-white dark:bg-slate-600 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="absolute top-2 right-2"
                onMouseEnter={() => setShowTooltip(index)}
                onMouseLeave={() => setShowTooltip(null)}
              >
                <Image
                  src="/info.png"
                  alt="info"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
                {showTooltip === index && (
                  <div
                    role="tooltip"
                    className="absolute w-72 z-10 inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md shadow-lg"
                    style={{
                      top: "-6rem",
                      right: "-.5rem",
                      transform: "translateY(-5px)",
                      opacity: 1,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    {item.info}
                    <span className="absolute -bottom-1.5 right-2 h-3 w-3 border-b border-r border-gray-300 rotate-45 bg-white"></span>
                  </div>
                )}
              </div>

              <Image
                src={item.icon}
                alt={item.name}
                width={80}
                height={80}
                unoptimized
              />
              <p className="mt-2 font-semibold text-black dark:text-white">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
