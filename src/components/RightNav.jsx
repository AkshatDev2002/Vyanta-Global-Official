"use client";

import { Menu, X } from "lucide-react";

export default function RightNav({ menuOpen, setMenuOpen }) {
  return (
    <div className="fixed right-0 top-0 h-full w-32 border-l bg-white z-60 flex flex-col items-center justify-between py-6">
      
      {/* Top Navigation Icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex flex-col items-center gap-2 group"
      >
        {/* Icon */}
        <div className="p-3 rounded-full border border-black/20 group-hover:bg-black group-hover:text-white transition-all">
          {menuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </div>

        {/* Label */}
        <span className="text-xs tracking-widest uppercase font-medium mt-1">
          {menuOpen ? "Close" : "Menu"}
        </span>
      </button>

    </div>
  );
}
