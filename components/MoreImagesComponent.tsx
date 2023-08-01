"use client";

import { getSlug } from "@/lib/helperFunctions";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/** Props necessary for the component */
type MoreImagesComponentProps = {
  imageLinks: string[];
  firstName: string;
  restOfName: string;
};

/**
 * The More Images section component
 *
 * @param param0 MoreImagesComponentProps
 * @returns MoreImagesComponent
 */
export default function MoreImagesComponent({
  imageLinks,
  firstName,
  restOfName,
}: MoreImagesComponentProps) {
  return (
    <div className="flex flex-row overflow-x-scroll space-x-2 mx-8 py-8">
      {imageLinks!.map((link, index) => (
        <MoreImageComponentItem
          link={link}
          index={index}
          firstName={firstName}
          restOfName={restOfName}
          key={link}
        />
      ))}
    </div>
  );
}

type MoreImageComponentItemProps = {
  link: string;
  firstName: string;
  restOfName: string;
  index: number;
};

/**
 * Single Item displayed in the MoreImagesComponent
 * section
 *
 * @param param0 MoreImageComponentItemProps
 * @returns MoreImageComponentItem
 */
function MoreImageComponentItem({
  link,
  firstName,
  restOfName,
  index,
}: MoreImageComponentItemProps) {
  return (
    <motion.div
      className="image-grid-item group"
      key={link}
      whileHover={{
        y: -20,
        transition: { type: "tween" },
      }}
    >
      <Image
        src={link}
        key={link}
        height={424}
        width={180}
        alt={`${firstName} ${restOfName} Image ${index}`}
        className="min-h-[300px] object-cover"
      />
      <div className="hover-image-grid-item"></div>
      <div className="hover-image-grid-text">
        <div className="space-y-2">
          {/** TODO: Update the  */}
          <Link
            href={`/artist/${getSlug(`${firstName} ${restOfName}`)}/image/${
              index
            }`}
            className="hover:underline text-[10px] pl-1 md:pl-0 md:text-xs flex flex-row justify-center"
          >
            View Image
          </Link>
          <div className="blue-line-long"></div>
        </div>
      </div>
    </motion.div>
  );
}
