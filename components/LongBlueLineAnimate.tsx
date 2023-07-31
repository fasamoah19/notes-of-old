"use client";

import { motion } from "framer-motion";

/** Props necessary for the component */
type LongBlueLineAnimateProps = {
  placement: "justify-end" | "justify-start";
  lineType: "blue-line-long" | "blue-line-full";
};

/**
 * Custom component for the Blue line to display
 *
 * @param param0 LongBlueLineAnimateProps
 * @returns LongBlueLineAnimate component
 */
export default function LongBlueLineAnimate({
  placement,
  lineType,
}: LongBlueLineAnimateProps) {
  return (
    <div className={`flex flex-row w-full ${placement}`}>
      <motion.div
        layout
        initial={{ x: placement == "justify-end" ? "75vw" : "-75vw" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 1.0 }}
        className={`${lineType} hidden md:flex`}
      ></motion.div>
      <motion.div
        layout
        initial={{ x: placement == "justify-end" ? "45vw" : "-45vw" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 1.0 }}
        className={`${lineType} md:hidden`}
      ></motion.div>
    </div>
  );
}
