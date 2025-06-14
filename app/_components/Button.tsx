"use client";

import { motion } from "motion/react";

function Button({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      transition={{ type: "tween", duration: 0.2 }}
      whileTap={{ scale: 0.85 }}
      className={`bg-gray hover:bg-orange rounded cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

export default Button;
