"use client";

import { useState } from "react";
import LeftBar from "@/components/LeftBar";
import RightNav from "@/components/RightNav";
import MenuOverlay from "@/components/MenuOverlay";
import GridBackground from "@/components/Grid";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative">

      {/* Fixed left + right */}
      <div className="relative z-30">
      <LeftBar />
      <RightNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>

      {/* CENTER OVERLAY */}
      <MenuOverlay open={menuOpen} />

      {/* HERO SECTION */}
      <div className={`ml-32 mr-32 relative z-10 transition-all duration-300 ${menuOpen ? "opacity-10" : "opacity-100"}`}>
        <GridBackground>
          <section className="min-h-screen flex flex-col justify-center px-20">

            <h1 className="text-[5rem] font-bold leading-none">
              Smile and wave.<br />
              Let’s start talking!
            </h1>

            <p className="mt-10 text-xl max-w-xl text-neutral-700">
              Vyanta Global delivers enterprise-grade data integration,
              engineering support, and scalable digital transformation
              solutions across industries worldwide.
            </p>

          </section>
        </GridBackground>
      </div>

    </main>
  );
}
