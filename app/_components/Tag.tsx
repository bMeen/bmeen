"use client";
import { motion } from "motion/react";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      className="px-4 py-1 uppercase text-white bg-gray-secondary  rounded inline-block text-sm md:text-base cursor-pointer"
    >
      {children}
    </motion.div>
  );
}

export default Tag;
