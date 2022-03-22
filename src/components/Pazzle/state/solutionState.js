import { atom } from "recoil";

const SOLUTION_STATE_KEY = 'solutionState';
export const solutionString = "123456789";

const solutionState = atom({
  key: SOLUTION_STATE_KEY,
  default: solutionString.split('')
});

export default solutionState;
