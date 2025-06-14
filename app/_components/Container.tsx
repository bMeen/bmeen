"use client";

import { motion } from "motion/react";
import { useMediaQuery } from "../_lib/useMediaQuery";

function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const isMobile = useMediaQuery("(max-width: 1023px)");

  const initial = {
    [isMobile ? "y" : "x"]: 30,
  };

  const animate = {
    [isMobile ? "y" : "x"]: 0,
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...initial }}
      animate={{ opacity: 1, ...animate }}
      transition={{ duration: 0.3 }}
      className={`max-w-6xl mx-auto ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default Container;
