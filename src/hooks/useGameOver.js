import { useState, useCallback } from "react";

// stateful hook to track/set/reset the gameover condition of the game.

export const useGameOver = () => {

    const [gameOver, setGameOver] = useState(true);

    const resetGameOver = useCallback(() => {
        setGameOver(false);
    }, [])

    return [gameOver, setGameOver, resetGameOver];
}