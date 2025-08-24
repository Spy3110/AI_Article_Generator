"use client";  /* it tells Next.js to render this component on the client side */

{/* We import things here */}
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import { useState } from "react";
import GenerateCard from "./components/GenerateCard";
import OutputCard from "./components/OutputCard";
import { Orbitron } from "next/font/google";
const orbitron = Orbitron({ subsets: ["latin"], weight: "700" });

export default function Home() {
  const [article, setArticle] = useState("");
  {/* This is the main content area */}
  return (
    <div className="font-sans min-h-screen flex flex-col p-8 pb-20 sm:p-20">
        <ToastContainer position="top-center" />  {/* This is the toast container for notifications */}
      <main className="flex flex-col sm:flex-row gap-[10px] items-start">
        <Image
          className="dark:invert rounded-lg"
          src="https://www.shutterstock.com/image-vector/generate-ai-artificial-intelligence-logo-600nw-2492648973.jpg"
          alt="AI logo"
          width={100}
          height={100}
          priority
        />
        <div className="flex gap-4 items-center flex-col sm:items-center sm:justify-center sm:h-[100px] sm:flex-row">
          <h1 className={`text-4xl font-bold ${orbitron.className} mt-4 sm:mt-0`}> {/* This is the main title */}
            AI Article Generator
          </h1>
        </div>
      </main>
      {/* We added generate and output cards */}
      <div className="flex flex-col items-center flex-1 w-full">
        <GenerateCard onGenerate={setArticle} />
        <OutputCard article={article} />
      </div>
    </div>
  );
}