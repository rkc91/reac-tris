import './BoardCell.css';

// Component representing a rendered cell on the game board.
// Prop: cell obj.
const BoardCell = ({cell}) => (

    // Render style of cell on screen based on className within cell obj.
    // Also add a sparkle style on top of cell.
    <div className={`BoardCell ${cell.className}`}>
        <div className='Sparkle'></div>
    </div>
)

export default BoardCell;