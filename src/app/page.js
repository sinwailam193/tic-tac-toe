"use client";
import React, { useState } from 'react';
import Board from './components/Box';

const TicTacToe = () => {
  const length = 9;
  const filledArray = Array(length).fill('null');

  const [board, setBoard] = useState(filledArray);

  return (
    <div>
      <h3>Tic-Tac-Toe</h3>
      <Board data={board} />
    </div>
  );
};

export default TicTacToe;
