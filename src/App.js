import './App.css';
import SquareBoard from './components/Square Board/SquareBoard';
import { useState } from 'react';

function App() {
  const [squares, setSquares]=useState(Array(9).fill(null));

  return (
    <div className="App">

      <div className="board-row">
        <SquareBoard value={squares[0]} />
        <SquareBoard value={squares[1]} />
        <SquareBoard value={squares[2]} />
      </div>

      <div className="board-row">
        <SquareBoard value={squares[3]} />
        <SquareBoard value={squares[4]} />
        <SquareBoard value={squares[5]} />
      </div>

      <div className="board-row">
        <SquareBoard value={squares[6]} />
        <SquareBoard value={squares[7]} />
        <SquareBoard value={squares[8]} />
      </div>
      
    </div>
  );
}

export default App;
