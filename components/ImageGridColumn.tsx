"use client";

import { forwardRef } from "react";
import ImageGridItem from "./ImageGridItem";

/** Props necessary for component */
type ImageGridColumnProps = {
  links: string[];
  size: number
};

/**
 * Image Grid Column component
 */
const ImageGridColumn = forwardRef<HTMLDivElement, ImageGridColumnProps>(function ImageGridColumn(props, ref) {
  const { links, size } = props
  return (
    <div ref={ref} className="mx-auto h-max">
      {links.slice(0, size).map((link) => (
        <ImageGridItem link={link} key={link} />
      ))}
    </div>
  );
});

export default ImageGridColumn;