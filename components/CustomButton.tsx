"use client"

import { motion } from "framer-motion";

/** Props necessary for component */
type CustomButtonProps = {
  text: string
}

/**
 * Custom blue button
 * 
 * @returns CustomButton component
 */
export default function CustomButton({ text } : CustomButtonProps) {
  return (
    <motion.button
      className="bg-sideBar text-white font-bold w-36 h-14"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {text}
    </motion.button>
  );
}
