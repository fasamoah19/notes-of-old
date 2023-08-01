"use client"

import { motion } from "framer-motion";

/**
 * Custom blue button
 * 
 * @returns CustomButton component
 */
export default function CustomButton() {
  return (
    <motion.button
      className="bg-sideBar text-white font-bold w-36 h-14"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Download
    </motion.button>
  );
}
