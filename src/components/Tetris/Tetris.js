import './Tetris.css';
import Board from './Board';

import { useBoard } from '../../hooks/useBoard';

// Tetris container component will house our game board and other components.
// Props: Rows, columns, and a gameOver state setter.
const Tetris = ({ rows, columns, setGameOver }) => {

    // get useBoard hook to track board state.
    // pass in rows & columns as params for initial board array setup.
    const [board, setBoard] = useBoard({ rows, columns });
    
    return (
        <Board board={board} />
    );
}

export default Tetris;