import "../GameBoard/GameBoard.css";
import React, { useEffect } from "react";
import useScript from "../../hooks/useScript";

export function GameBoard(props) {
  useScript("./assets/script.js");

  return (
    <div className="GameBoard">
      <header>
        <h1 id="title">Your score: 0</h1>
      </header>

      <main>
        <div id="gameBoard"></div>
      </main>
    </div>
  );
}
