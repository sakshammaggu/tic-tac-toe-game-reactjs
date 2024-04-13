import './App.css';
import SquareBoard from './components/Square Board/SquareBoard.js';
import { useState } from 'react';

function App() {
  const [squares, setSquares]=useState(Array(9).fill(null));

  const handleClick=(i)=>{
    const nextSquares=squares.slice();
    nextSquares[i]="X";
    setSquares(nextSquares);
  }

  return (
    <div className="App">

      <div className="board-row">
        <SquareBoard value={squares[0]} onClick={()=>handleClick(0)}/>
        <SquareBoard value={squares[1]} onClick={()=>handleClick(1)}/>
        <SquareBoard value={squares[2]} onClick={()=>handleClick(2)}/>
      </div>

      <div className="board-row">
        <SquareBoard value={squares[3]} onClick={()=>handleClick(3)}/>
        <SquareBoard value={squares[4]} onClick={()=>handleClick(4)}/>
        <SquareBoard value={squares[5]} onClick={()=>handleClick(5)}/>
      </div>

      <div className="board-row">
        <SquareBoard value={squares[6]} onClick={()=>handleClick(6)}/>
        <SquareBoard value={squares[7]} onClick={()=>handleClick(7)}/>
        <SquareBoard value={squares[8]} onClick={()=>handleClick(8)}/>
      </div>
      
    </div>
  );
}

export default App;
