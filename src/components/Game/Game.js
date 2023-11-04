import Menu from './Menu';
import Tetris from '../Tetris/Tetris';

import { useGameOver } from '../../hooks/useGameOver';

// High level container housing all components needed to run the game.
// Props: The size of the gameboard in rows and columns.
const Game = ({ rows, columns }) => {

    // set gameOver state w/ useGameOver hook.
    const [gameOver, setGameOver, resetGameOver] = useGameOver();

    // callback function used for start button. resets game over state.
    const start = () => resetGameOver();

    return (
    <div className="Game">
        {gameOver ? (
            // game is over, show start button and welcome message.
            <div>
                <h1>Welcome to Reactris</h1>
                <Menu onClick={start}/>
            </div>
            
        ):(
            // game is not over, render the Tetris component.
            // pass rows, columns, gameOver setter to Tetris component.
            <Tetris rows={rows} columns={columns} setGameOver={setGameOver}/>
        )}
        
    </div>
    );
}
export default Game;