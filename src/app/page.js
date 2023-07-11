'use client'

import './styles.css'
import React, { useState, useEffect } from 'react'
import Board from './components/Board'
import ScoreBoard from './components/scoroboard'
import calculateWinner from './util'

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xTurn, setXTurn] = useState(true)
  const [status, setStatus] = useState('Next player: X')
  const [showModal, setShowModal] = useState(false)
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 })

  useEffect(() => {
    checkWinner()
  }, [board, xTurn])

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setXTurn(true)
    setStatus('Next player: X')
    setShowModal(false)
  }

  const winner = calculateWinner(board)

  const checkWinner = () => {
    const isFilled = board.every((value) => {
      return value !== undefined && value !== null
    })

    if (winner) {
      setShowModal(true)
      if (winner === 'X') {
        let { xScore } = scores
        xScore += 1
        setScores({ ...scores, xScore })
      } else {
        let { oScore } = scores
        oScore += 1
        setScores({ ...scores, oScore })
      }
    } else if (isFilled && winner === null) {
      setStatus('Draw')
      setShowModal(true)
    } else {
      setStatus('Next player: ' + (xTurn ? 'X' : 'O'))
    }
  }

  const handleBoxClick = (index) => {
    if (board[index] || calculateWinner(board)) {
      return
    }

    const newBoard = board.map((value, currentIndex) => {
      if (index === currentIndex) {
        return xTurn ? 'X' : 'O'
      } else {
        return value
      }
    })

    setBoard(newBoard)
    setXTurn(!xTurn)
  }

  return (
  <div>
    <div className='all'>
      <ScoreBoard scores={scores} xTurn={xTurn}/>
      <h5 className='status'>{status}</h5>
      <Board handleBoxClick={handleBoxClick} board={board} />
      {showModal && (
        <div className="modal">
           <div className={`modal-content ${showModal ? 'show' : ''}`}>
            <h2>{winner ? `Winner: ${winner}` : 'Draw'}</h2>
            <button className="replay-button" onClick={resetGame}>
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
    <div>
      <button className='reset-button' onClick={resetGame}>Reset Board</button>
    </div>
  </div>
  )
}

export default TicTacToe
