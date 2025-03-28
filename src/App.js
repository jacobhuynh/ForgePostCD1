import { useState } from "react";
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[0]} />
      </div>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[0]} />
        <Square value={squares[0]} />
      </div>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[0]} />
        <Square value={squares[0]} />
      </div>
    </>
  );

  function Square({ value }) {
    return <button className="square">{value}</button>;
  }
}
