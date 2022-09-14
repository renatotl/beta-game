import "../App/App.css";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { GameBoard } from "../GameBoard/GameBoard";
import { Score } from "../Score/Score";
import { Login } from "../Login/Login";
import { Registration } from "../Registration/Registration";
import React, { useState } from "react";

function App() {
  const [gameBoardPage, showGameBoard] = useState(true);
  const [scorePage, showScore] = useState(false);
  const [loginPage, showLogin] = useState(false);
  const [registrationPage, showRegistration] = useState(false);

  const setPage = (pageName) => {
    if (pageName === "gameBoard") {
      showGameBoard(true);
      showLogin(false);
      showScore(false);
      showRegistration(false);
    } else if (pageName === "login") {
      showGameBoard(false);
      showLogin(true);
      showScore(false);
      showRegistration(false);
    } else if (pageName === "score") {
      showGameBoard(false);
      showLogin(false);
      showScore(true);
      showRegistration(false);
    } else if (pageName === "registration") {
      showGameBoard(false);
      showLogin(false);
      showScore(false);
      showRegistration(true);
    }
  };

  return (
    <div className="App">
      <Navbar setPage={setPage} />

      {gameBoardPage === true ? <GameBoard /> : <></>}
      {scorePage === true ? <Score /> : <></>}
      {loginPage === true ? <Login /> : <></>}
      {registrationPage === true ? <Registration /> : <></>}

      <Footer />
    </div>
  );
}

export default App;
