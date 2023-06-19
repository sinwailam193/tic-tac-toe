"use client";
import React, { useState } from 'react';
import Board from './components/Board';

const TicTacToe = () => {
  
  const [board,setBoard] = useState(Array(9).fill('  '));
  const [xTurn,setXTurn] = useState(true);

  const handleBoxClick = (index) => {
    const newBoard = board.map((value,currentIndex) => {
      if(index === currentIndex){
        return (xTurn ? 'X' : 'O')
      }else{
        return value;
      }
    })
    setBoard(newBoard)
    console.log(newBoard)
    setXTurn(!xTurn)
  }

  const WINNING_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return <Board handleBoxClick={handleBoxClick} board={board}/>
};

export default TicTacToe;
