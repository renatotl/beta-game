import "../Login/Login.css";

export function Login() {
  return (
    <section className="page login">
      <form className="form" onSubmit="login">
        <fieldset className="fieldset">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="email"
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="password"
          />
          <button className="B" type="button">
            Send
          </button>
        </fieldset>
      </form>
    </section>
    //
  );
}
