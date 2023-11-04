import './Menu.css';

// Component displays Start button.
// Props: an onClick event callback function.
const Menu = ({ onClick }) => 
    <div className="Menu">
        <button className="Button" onClick = {onClick}>
            Play Reactris
        </button>
    </div>

export default Menu;