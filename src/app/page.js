"use client";

import './styles.css'
import React, { useState, useEffect } from 'react';
import Board from './components/Board';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [status, setStatus] = useState("Next player: " + (xTurn ? "X" : "O"));
  const [showModal, setShowModal ] = useState(false);

  useEffect(() => {
    checkWinner();
  }, [board, xTurn]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXTurn(true);
    setStatus("Next player: X");
    setShowModal(false);
  }

  const handleBoxClick = (index) => {
    if (board[index] || calculateWinner()) {
      return;
    }

    const newBoard = board.map((value, currentIndex) => {
      if (index === currentIndex) {
        return xTurn ? 'X' : 'O';
      } else {
        return value;
      }
    });

    setBoard(newBoard);
    setXTurn(!xTurn);
  };

  let winner = calculateWinner();

  const checkWinner = () => {
    const isFilled = board.every((value) => {
      return value !== undefined && value !== null;
    });

    if (winner) {
      setStatus("Winner: " + winner);
      setShowModal(true);
    } else if (isFilled && winner === null) {
      setStatus('Draw');
      setShowModal(true);
    } else {
      setStatus("Next player: " + (xTurn ? "X" : "O"));
    }
  };

  function calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  return (
    <div className='all'>
      <h3 className='title'>Tic-Tac-Toe</h3>
      <h5 className='status'>Status: {status}</h5>
      <Board handleBoxClick={handleBoxClick} board={board} />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{winner ? `Winner: ${winner}` : "Draw"}</h2>
            <button className="replay-button" onClick={resetGame}>
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;