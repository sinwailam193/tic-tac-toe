"use client";
import Box from './Box';
import './Board.css'

function Board({handleBoxClick, board}) {

    

    return (
    <div>
        <div className='row'>
            <Box value={board[0]} handleClick={() => handleBoxClick(0)}/>
            <Box value={board[1]} handleClick={() => handleBoxClick(1)}/>
            <Box value={board[2]} handleClick={() => handleBoxClick(2)}/>
        </div>
        <div className='row'>
            <Box value={board[3]} handleClick={() => handleBoxClick(3)}/>
            <Box value={board[4]} handleClick={() => handleBoxClick(4)}/>
            <Box value={board[5]} handleClick={() => handleBoxClick(5)}/>
        </div>
        <div className='row'>
            <Box value={board[6]} handleClick={() => handleBoxClick(6)}/>
            <Box value={board[7]} handleClick={() => handleBoxClick(7)}/>
            <Box value={board[8]} handleClick={() => handleBoxClick(8)}/>
        </div>
    </div>
    );  
}

export default Board;