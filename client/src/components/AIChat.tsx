"use client"
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

const AIChat: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [aiResponse, setAiResponse] = useState<string>("");

  const handleSend = async () => {
    if (!userInput.trim()) return; 

    setAiResponse("Loading...");

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: userInput }),
      });

      const data = await response.json();
      setAiResponse(data?.response || "Sorry, something went wrong.");
    } catch (error) {
      setAiResponse("Error communicating with AI service.");
    }
  };

  return (
    <div className="p-4 bg-gray-200 dark:bg-gray-700 shadow-lg w-full h-[82vh]">
      <h2 className="text-xl text-black dark:text-white font-semibold mb-4 text-center">AI Assistant</h2>

      {/* AI Chat */}
      <div className="mb-4">
        <p className="text-gray-800 dark:text-gray-300">{aiResponse}</p>
      </div>

      {/* User Input */}
      <div className="flex items-center">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="flex-1 p-2 rounded-l-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white text-sm outline-none"
          placeholder="Ask me anything..."
        />
        <button
          onClick={handleSend}
          className="p-[11px] bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
          aria-label="Send"
        >
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default AIChat;
