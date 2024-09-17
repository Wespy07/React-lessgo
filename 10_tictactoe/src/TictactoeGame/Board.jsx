import React, { useState, useEffect } from 'react';
import Square from './Square';
import { start, stop } from '../../public/confetti/show-confetti';

function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');

  function clickHandler(index) {
    if (state[index] !== null || isWinner) return;

    const stateCopy = [...state];
    stateCopy[index] = (turn === 'X') ? 'X' : 'O';
    setState(stateCopy);
    setTurn((turn === 'X' ? 'O' : 'X'));
  }

  function checkWinner() {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const winPattern of winPatterns) {
      const [a, b, c] = winPattern;

      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  }

  const isWinner = checkWinner();

  useEffect(() => {
    if (isWinner) {
      start();
      const confettiTimer = setTimeout(() => {
        stop();
      }, 2000);

      return () => clearTimeout(confettiTimer);
    }
  }, [isWinner]);

  const isDraw = state.every(cell => cell !== null) && !isWinner;

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className={`board-container ${isWinner ? 'disabled' : ''}`}>
      <div className='board-row'>
        <Square value={state[0]} onClick={() => clickHandler(0)} />
        <Square value={state[1]} onClick={() => clickHandler(1)} />
        <Square value={state[2]} onClick={() => clickHandler(2)} />
      </div>
      <div className='board-row'>
        <Square value={state[3]} onClick={() => clickHandler(3)} />
        <Square value={state[4]} onClick={() => clickHandler(4)} />
        <Square value={state[5]} onClick={() => clickHandler(5)} />
      </div>
      <div className='board-row'>
        <Square value={state[6]} onClick={() => clickHandler(6)} />
        <Square value={state[7]} onClick={() => clickHandler(7)} />
        <Square value={state[8]} onClick={() => clickHandler(8)} />
      </div>
      {isWinner && (
        <>
          <h5 className='winner-box'>Player {isWinner} won the game</h5>
          <button className='reset-btn' onClick={handleReset}>Reset</button>
        </>
      )}
      {isDraw && (
        <>
          <h5 className='draw-box'>It's a draw!</h5>
          <button className='reset-btn' onClick={handleReset}>Reset</button>
        </>
      )}
      {!isWinner && !isDraw && (
        <h5 className='turn-box'>Player {turn}'s turn</h5>
      )}
    </div>
  );
}

export default Board;
