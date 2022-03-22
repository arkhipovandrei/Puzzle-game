import { selector } from "recoil";
import solutionState from "./solutionState";
import tileState  from "./tilesState";
import isEqual from "lodash/isEqual"

const IS_SOLVED_STATE_KEY = 'isSolutionState';


export const isSolvedState = selector({
  key: IS_SOLVED_STATE_KEY,
  get: ({get}) => {
    
    const solution = get(solutionState);
    const tiles = get(tileState)
    
    return isEqual(tiles, solution);
  }
});
