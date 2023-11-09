import { useState, useCallback } from "react";

/* utility function that returns an object
   representing the initial state of the game statistics.*/
const buildGameStats = () => ({
  level: 1,
  linesCompleted: 0,
  linesPerLevel: 10,
  points: 0,
});

/* custom stateful hook that manages the game statistics state
   and provides a function to add lines cleared. */
export const useGameStats = () => {
  // init gameStats state. Use build function for default state.
  const [gameStats, setGameStats] = useState(buildGameStats());

  // memoized function that will update number of lines cleared.
  const addLinesCleared = useCallback(() => {}, []);

  // return an array with our gameStats and add lines function for destructuring.
  return [gameStats, addLinesCleared];
};
