import { useState } from "react";
import { buildBoard } from "../business/buildBoard";

// stateful hook to get the game board object.
// Props: rows and columns to be used for building gameboard.
export const useBoard = ({ rows, columns })=> {
    
    // declare board state. init using return from buildBoard() as default state.
    const [board, setBoard] = useState(buildBoard({ rows, columns }));

    return [board];
}