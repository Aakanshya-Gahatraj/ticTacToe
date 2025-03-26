import { useState } from "react";

function Square({ value, onSquareClick }) {
  // const [value, setValue] = useState(null); // setting initialnull

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsPlayer, setXIsPlayer] = useState(true);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const myArr = squares.slice(); //copying the array
    if (xIsPlayer) {
      myArr[i] = "X";
    } else {
      myArr[i] = "O";
    }
    setSquares(myArr);
    setXIsPlayer(!xIsPlayer);
  }

  const winner = calculateWinner(squares);
  let gameStatus = "";
  if (winner) {
    gameStatus = "Winner: " + winner;
  } else {
    gameStatus = "Next Player:" + (xIsPlayer ? "X" : "O");
  }

  return (
    <>
      <div className="status">{gameStatus}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningPattern.length; i++) {
    const [a, b, c] = winningPattern[i];
    if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
