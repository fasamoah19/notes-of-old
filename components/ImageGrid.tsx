"use client";

import { useEffect, useReducer, useRef } from "react";
import ImageGridColumn from "./ImageGridColumn";
import { imageGridInitialValues, imageGridReducer } from "@/lib/reducers/grid-column-reducer";

/** Props necessary for the component */
type ImageGridProps = {
  singleColumn: string[];
  twoColumns: {
    "1": string[];
    "2": string[];
  };
  threeColumns: {
    "1": string[];
    "2": string[];
    "3": string[];
  };
};

/**
 * Grid that displays the images
 * 
 * @param param0
 * @returns
 */
export default function ImageGrid({
  singleColumn,
  twoColumns,
  threeColumns,
}: ImageGridProps) {
  /** Establishing references for the grid columns */
  const threeColumnsOne = useRef<HTMLDivElement>(null);
  const threeColumnsTwo = useRef<HTMLDivElement>(null);
  const threeColumnsThree = useRef<HTMLDivElement>(null);
  const twoColumnsOne = useRef<HTMLDivElement>(null);
  const twoColumnsTwo = useRef<HTMLDivElement>(null);
  const oneColumn = useRef<HTMLDivElement>(null);
  /** State to manage column length on initial load */
  const [state, dispatch] = useReducer(imageGridReducer, imageGridInitialValues)
  
  /**
   * This useEffect function attempts to lock each column under 3300px in length to make
   * sure they are all near the same height as much as possbile
   */
  useEffect(() => {
    let firstColumnOfThreeSize = state.firstColumnOfThreeSize
    let secondColumnOfThreeSize = state.secondColumnOfThreeSize
    let thirdColumnOfThreeSize = state.thirdColumnOfThreeSize
    let firstColumnOfTwoSize = state.firstColumnOfTwoSize
    let secondColumnOfTwoSize = state.secondColumnOfTwoSize

    if (threeColumnsOne.current && threeColumnsTwo.current && threeColumnsThree.current && threeColumnsOne.current.checkVisibility()) {
      if (threeColumnsOne.current.offsetHeight > 3300) {
        firstColumnOfThreeSize = firstColumnOfThreeSize - 1
        firstColumnOfTwoSize = firstColumnOfThreeSize
      }
      if (threeColumnsTwo.current.offsetHeight > 3300) {
        secondColumnOfThreeSize = secondColumnOfThreeSize - 1
        secondColumnOfTwoSize = secondColumnOfThreeSize
      }
      if (threeColumnsThree.current.offsetHeight > 3300) {
        thirdColumnOfThreeSize = thirdColumnOfThreeSize - 1
      }
    }

    if (twoColumnsOne.current && twoColumnsTwo.current && twoColumnsOne.current.checkVisibility()) {
      if (twoColumnsOne.current.offsetHeight > 3300) {
        firstColumnOfTwoSize = firstColumnOfTwoSize - 1
        firstColumnOfThreeSize = firstColumnOfTwoSize
      }
      if (twoColumnsTwo.current.offsetHeight > 3300) {
        secondColumnOfTwoSize = secondColumnOfTwoSize - 1
        secondColumnOfThreeSize = secondColumnOfTwoSize
      }
    }

    dispatch({
      type: 'update',
      payload: {
        ...state,
        firstColumnOfThreeSize: firstColumnOfThreeSize,
        secondColumnOfThreeSize: secondColumnOfThreeSize,
        thirdColumnOfThreeSize: thirdColumnOfThreeSize,
        firstColumnOfTwoSize: firstColumnOfTwoSize, 
        secondColumnOfTwoSize: secondColumnOfTwoSize,
      }
    })

  }, [state.firstColumnOfThreeSize, state.secondColumnOfThreeSize, state.thirdColumnOfThreeSize, state.firstColumnOfTwoSize, state.secondColumnOfTwoSize])

  return (
    <div>
      <div className="hidden lg:grid lg:grid-cols-3 gap-4">
        <ImageGridColumn size={state.firstColumnOfThreeSize} ref={threeColumnsOne} links={threeColumns[1]} />
        <ImageGridColumn size={state.secondColumnOfThreeSize} ref={threeColumnsTwo} links={threeColumns[2]} />
        <ImageGridColumn size={state.thirdColumnOfThreeSize} ref={threeColumnsThree} links={threeColumns[3]} />
      </div>
      <div className="hidden md:max-lg:grid md:max-lg:grid-cols-2 gap-4">
        <ImageGridColumn size={state.firstColumnOfTwoSize} ref={twoColumnsOne} links={twoColumns[1]} />
        <ImageGridColumn size={state.secondColumnOfTwoSize} ref={twoColumnsTwo} links={twoColumns[2]} />
      </div>
      <div className="flex flex-col w-full md:hidden mx-auto">
        <ImageGridColumn size={state.firstColumnOfOneSize} ref={oneColumn} links={singleColumn} />
      </div>
    </div>
  );
}
