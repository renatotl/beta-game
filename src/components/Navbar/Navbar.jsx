import "../Navbar/Navbar.css";

export function Navbar(props) {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          {" "}
          <a onClick={() => props.setPage("gameBoard")}>
            <div class="itemNavegacao">Game</div>
          </a>
        </li>
        <li>
          {" "}
          <a onClick={() => props.setPage("login")}>
            <div class="itemNavegacao">Login</div>
          </a>
        </li>
        <li>
          {" "}
          <a id="click" onClick={() => props.setPage("score")}>
            <div class="itemNavegacao">Scores</div>
          </a>
        </li>
      </ul>
    </nav>
  );
}
