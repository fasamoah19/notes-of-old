/**
 * Image Grid State used for Image Grid Reducer
 */
export type ImageGridState = {
  firstColumnOfThreeSize: number,
  secondColumnOfThreeSize: number,
  thirdColumnOfThreeSize: number,
  firstColumnOfTwoSize: number,
  secondColumnOfTwoSize: number,
  firstColumnOfOneSize: number
}

/**
 * Image Grid Action used for Image Grid Reducer
 */
export type ImageGridAction = | {
  type: 'reset'
} | {
  type: 'update',
  payload: {
    firstColumnOfThreeSize: number,
    secondColumnOfThreeSize: number,
    thirdColumnOfThreeSize: number,
    firstColumnOfTwoSize: number,
    secondColumnOfTwoSize: number,
    firstColumnOfOneSize: number
  }
}

/**
 * Default values for the Image Grid Reducer values
 */
export const imageGridInitialValues = {
  firstColumnOfThreeSize: 10,
  secondColumnOfThreeSize: 10,
  thirdColumnOfThreeSize: 10,
  firstColumnOfTwoSize: 10,
  secondColumnOfTwoSize: 10,
  firstColumnOfOneSize: 10
}

/**
 * Image Grid Reducer
 * 
 * @param state ImageGridState
 * @param action ImageGridAction
 * @returns Map of values used to determine the size of the 
 * Image Grid columns to keep their sizes consistent
 */
export const imageGridReducer = (state: ImageGridState, action: ImageGridAction) => {
  switch (action.type) {
    case "reset":
      return imageGridInitialValues

    case "update": {
      return {
        ...state,
        firstColumnOfThreeSize: action.payload.firstColumnOfThreeSize,
        secondColumnOfThreeSize: action.payload.secondColumnOfThreeSize,
        thirdColumnOfThreeSize: action.payload.thirdColumnOfThreeSize,
        firstColumnOfTwoSize: action.payload.firstColumnOfTwoSize,
        secondColumnOfTwoSize: action.payload.secondColumnOfTwoSize,
        firstColumnOfOneSize: action.payload.firstColumnOfOneSize
      }
    }

    default:
      throw new Error(`Unknown action type: ${action}`);

  }
}