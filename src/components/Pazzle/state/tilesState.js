import { solutionString } from "./solutionState";
import shuffle from "lodash/shuffle";
import { atom }  from "recoil";


export const TILE_STATE_KEY = 'tileState';

const tileState = atom({
  key: TILE_STATE_KEY,
  default: shuffle(solutionString.split(''))
});

export default tileState;
