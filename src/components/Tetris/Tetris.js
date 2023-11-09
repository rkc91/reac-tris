import "./Tetris.css";
import Board from "./Board";

import GameStats from "./GameStats";
import { useBoard } from "../../hooks/useBoard";
import { useGameStats } from "../../hooks/useGameStats";

// Tetris container component will house our game board and other
// rendered components.
// Props: Rows, columns, and a gameOver state setter.
const Tetris = ({ rows, columns, setGameOver }) => {
  // get useBoard hook to track board state.
  // pass in rows & columns as params for initial board array setup.
  const [board, setBoard] = useBoard({ rows, columns });

  // get gameStats hook. used for getting game stats object and
  // adding lines to score.
  const [gameStats, addLinesCleared] = useGameStats();

  // return the gameboard and stats components.
  return (
    <div className="Tetris">
      <Board board={board} />
      <GameStats gameStats={gameStats} />
    </div>
  );
};

export default Tetris;
