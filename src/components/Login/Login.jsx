import { useState } from "react";
import "../Login/Login.css";
import { jogoRDJ } from "../utils/api/api";

export function Login() {
  const [user, setUser] = useState();

  async function loginUser(event) {
    event.preventDefault();

    setUser({ ...user });

    console.log(user);

    const apiConfirmation = await jogoRDJ.login(user);

    try {
      if (apiConfirmation.message.includes("not found")) {
        alert("Email not registered.");
      } else if (apiConfirmation.message.includes("Invalid password")) {
        alert("Invalid password.");
      }
    } catch (err) {
      alert("Successfully logged in!");
    }
  }

  return (
    <section className="page login">
      <form className="form" onSubmit={loginUser}>
        <fieldset className="fieldset">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="email"
            required={true}
            onChange={(event) => {
              setUser({ ...user, email: event.target.value });
            }}
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="password"
            required={true}
            onChange={(event) => {
              setUser({ ...user, password: event.target.value });
            }}
          />
          <button className="B" type="submit">
            Send
          </button>
        </fieldset>
      </form>
    </section>
    //
  );
}
