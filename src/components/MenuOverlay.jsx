"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function MenuOverlay({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="
            fixed inset-y-0 left-32 right-32 
            bg-white z-100
            flex items-center justify-center
            border-x border-neutral-200
          "
        >
          {/* GRID WRAPPER */}
          <div className="w-full h-full grid grid-cols-3 grid-rows-2">

            {/* TILE */}
            <div className="flex items-center justify-center border border-neutral-200 text-4xl font-semibold">
              Home
            </div>

            <div className="flex items-center justify-center border border-neutral-200 text-4xl font-semibold">
              About
            </div>

            <div className="flex items-center justify-center border border-neutral-200 text-4xl font-semibold">
              Services
            </div>

            <div className="flex items-center justify-center border border-neutral-200 text-4xl font-semibold">
              Industries
            </div>

            <div className="flex items-center justify-center border border-neutral-200 text-4xl font-semibold">
              Resources
            </div>

            <div className="flex items-center justify-center border border-neutral-200 text-4xl font-semibold">
              Contact
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
