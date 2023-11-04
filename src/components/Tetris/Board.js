import './Board.css';

import BoardCell from './BoardCell';

// Game board component to render to screen.
// Props: a board object.
const Board = ({ board }) =>{

    // setup dynamic styles for board.
    const boardStyles = {
        gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`
    };

    // render a BoardCell on screen for each cell board object array.
    return(
        <div className="Board" style={boardStyles}>
            {board.rows.map( (row, y) =>
                row.map( (cell, x) => (
                    <BoardCell key={x * board.size.columns + x} cell={cell}/>
                ))
            )}
        </div>

    );

}

export default Board;