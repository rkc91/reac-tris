import { defaultCell } from "./Cell";

// build board as a 2d array of empty default cells that are unoccupied.
export const buildBoard = ({ rows, columns }) => {
    const builtRows = Array.from({ length: rows }, () =>
        Array.from({ length: columns }, () => ({ ...defaultCell }))
    );

    return {
        rows: builtRows,
        size: { rows, columns }
    };
}