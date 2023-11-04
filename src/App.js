import './App.css';
import Game from './components/Game/Game';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Reactris</h1>
      <Game rows={20} columns={10}/>
    </div>
  );
}

export default App;
