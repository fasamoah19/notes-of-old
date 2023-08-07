"use client";

import { configureArtistNameFromLink, getSlug } from "@/lib/helperFunctions";
import Image from "next/image";
import Link from "next/link";

/** Props necessary for the component */
type ImageGridItemProps = {
  link: string;
};

/**
 * Component displays the Grid Item for the home page
 * 
 * @param param0 ImageGridItemProps
 * @returns ImageGridItem component
 */
export default function ImageGridItem({ link }: ImageGridItemProps) {
  const artistName = configureArtistNameFromLink(link);
  const imageNumberStr = link.split("artist-images/")[1].match(/\d+/)?.[0] ?? ""
  const imageNumber = parseInt(imageNumberStr) - 1

  return (
    <div className="image-grid-item group" key={link}>
      <Image
        src={link}
        alt={`${link.split("artist-images/")[1]}`}
        width={416}
        height={590}
      />
      <div className="hover-image-grid-item"></div>
      <div className="hover-image-grid-text">
        {/** Artist Name and Blue Line */}
        <div className="space-y-2">
          <div className="flex flex-row justify-center">{artistName}</div>
          <div className="blue-line-long -translate-x-10 group-hover:translate-x-0 absolute right-0 justify-end duration-500"></div>
        </div>
        {/** Links and Blue Line */}
        <div className="flex flex-row gap-x-2 my-4 items-center translate-x-8 group-hover:translate-x-0 duration-700">
          <div className="blue-line-short"></div>
          {/** Links */}
          <div className="flex flex-row space-x-6 items-center">
            <Link href={`/artist/${getSlug(artistName)}`} className="underline text-xs">
              View Artist
            </Link>
            <Link href={`/artist/${getSlug(artistName)}/image/${imageNumberStr}`} className="underline text-xs">
              View Image
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


