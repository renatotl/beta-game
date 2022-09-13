import { useState } from "react";
import "../Registration/Registration.css";
import { jogoRDJ } from "../utils/api/api";

export function Registration() {
  const [newUser, setNewUser] = useState();

  async function registerUser(event) {
    event.preventDefault();

    setNewUser({ ...newUser });

    const apiConfirmation = await jogoRDJ.registerUser(newUser);

    try {
      if (apiConfirmation.message.includes("Error")) {
        alert("Email or username already registered, try a different one.");
      }
    } catch (err) {
      alert("Successfully registered!");
    }
  }

  return (
    <section className="Registration">
      <form className="form" onSubmit={registerUser}>
        <fieldset className="fieldset">
          <input
            className="input"
            type="name"
            name="name"
            placeholder="name"
            required={true}
            onChange={(event) => {
              setNewUser({ ...newUser, name: event.target.value });
            }}
          />
          <input
            className="input"
            type="usernName"
            name="userName"
            placeholder="user name"
            required={true}
            onChange={(event) => {
              setNewUser({ ...newUser, username: event.target.value });
            }}
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="email"
            required={true}
            onChange={(event) => {
              setNewUser({ ...newUser, email: event.target.value });
            }}
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="password"
            required={true}
            onChange={(event) => {
              setNewUser({ ...newUser, password: event.target.value });
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
