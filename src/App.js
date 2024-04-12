import './App.css';
import SquareBoard from './components/Square Board/SquareBoard';

function App() {
  

  return (
    <div className="App">

      <div className="board-row">
        <SquareBoard />
        <SquareBoard />
        <SquareBoard />
      </div>

      <div className="board-row">
        <SquareBoard />
        <SquareBoard />
        <SquareBoard />
      </div>

      <div className="board-row">
        <SquareBoard />
        <SquareBoard />
        <SquareBoard />
      </div>
      
    </div>
  );
}

export default App;
