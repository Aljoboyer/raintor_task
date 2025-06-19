"use client"
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import ThemeToggle from "../ModeToggle/ModeToggle";


export default function Navbar() {
  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm  fixed top-0 left-0 z-50 sticky">
      <div className=" mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex flex-row items-center">
          <div className="text-lg_title font-bold mr-">
            <span className="font-bold">DEV</span>
          <span className="font-extrabold">LOP.ME</span>
          </div>

          <ThemeToggle/>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center text-sm font-medium">
          <a href="#" className="text-p transition">Home</a>
          <a href="#" className="text-p transition">About</a>
          <a href="#" className="text-p transition">Portfolio</a>
          <a href="#" className="text-p transition">Blog</a>

          {/* Start Project Button */}
          <a
            href="#"
            className="ml-4 inline-flex items-center border-2 border-green-500 px-4 py-2 rounded-full text-sm font-medium  hover:bg-green-50 transition"
          >
            <span className="mr-2 w-6 h-6 flex items-center justify-center border border-black rounded-full">
              <FaArrowRight size={14} />
            </span>
            Start Project
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 ">
          <a href="#" className="block text-p">Home</a>
          <a href="#" className="block text-p">About</a>
          <a href="#" className="block text-p">Portfolio</a>
          <a href="#" className="block text-p">Blog</a>
          <a
            href="#"
            className="inline-flex items-center mt-2 border-2 border-green-500 px-4 py-2 rounded-full text-sm font-medium  hover:bg-green-50 transition"
          >
            <span className="mr-2 w-6 h-6 flex items-center justify-center border border-black rounded-full">
              <FaArrowRight size={14} />
            </span>
            Start Project
          </a>
        </div>
      )}
    </header>
  );
}
