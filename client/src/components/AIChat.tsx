"use client";
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { GoogleGenerativeAI } from "@google/generative-ai";

const AIChat: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [messages, setMessages] = useState<
    { sender: "user" | "ai"; content: string }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Initialize the Generative AI with the API key from environment variables
  const genAI = new GoogleGenerativeAI(
    process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""
  );

  const handleSend = async () => {
    console.log("API Key:", process.env.NEXT_PUBLIC_GEMINI_API_KEY);

    if (!userInput.trim()) return;

    setMessages([...messages, { sender: "user", content: userInput }]);
    setUserInput("");
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(userInput);
      const response = result.response.text();

      setMessages((prev) => [
        ...prev,
        { sender: "ai", content: response || "No response received." },
      ]);
    } catch (error) {
      console.error("Error communicating with AI:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", content: "Error communicating with AI service." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !loading) {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[87%] bg-gray-100 dark:bg-gray-800">
      {/* Header */}
      <div className="bg-blue-500 dark:bg-gray-900 p-4 text-white font-semibold text-lg text-center shadow-md">
        AI Chat Assistant
      </div>

      {/* Chat Window */}
      <div className="flex-1  overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex  ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs md:max-w-sm px-4 py-2 rounded-lg shadow-md ${
                message.sender === "user"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-300 text-black rounded-bl-none"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="max-w-xs md:max-w-sm px-4 py-2 bg-gray-300 text-black rounded-lg shadow-md">
              Typing...
            </div>
          </div>
        )}
      </div>

      {/* Input Box */}
      <div className="flex items-center p-4 bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown} // Listen for the Enter key
          className="flex-1 p-3 rounded-l-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white outline-none"
          placeholder="Type your message..."
          disabled={loading}
        />
        <button
          onClick={handleSend}
          className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 disabled:bg-blue-300"
          aria-label="Send"
          disabled={loading}
        >
          <FiSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default AIChat;
