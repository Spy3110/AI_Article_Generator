"use client";
import { useState } from "react";
import { toast } from "react-toastify";

type GenerateCardProps = {
  onGenerate: (article: string) => void;
};

export default function GenerateCard({ onGenerate }: GenerateCardProps) {
  const [input, setInput] = useState("");

  function handleGenerate() {
    onGenerate(`Here is your AI-generated article about: ${input}`);
    toast.success("Article generated!");
  }

  return (
    <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col gap-4 max-w-xl w-full transition-transform duration-300 hover:shadow-2xl hover:scale-105">
      <input
        className="border rounded px-3 py-2 text-black"
        type="text"
        placeholder="Enter your topic or keywords..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      
      {/* This is the generate button */}
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-bold"
        onClick={handleGenerate}
      >
        Generate
      </button>
    </div>
  );
}