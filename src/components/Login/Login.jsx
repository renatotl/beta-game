import "../Login/Login.css";

export function Login() {
  return (
    <section className='page login'>
    <form className="form" onSubmit= "login">
        <fieldset className="fieldset">
          <input className="input" type="name" name="name" placeholder="name" />
            <input className="input" type="usernName" name="userName" placeholder="user name"  />
            <input className="input" type="email" name="email" placeholder="email"  />
            <input className="input" type="password" name="password" placeholder="password"/>
            <button className="B" type="button"  description={"Quero Me Logar"} />
        </fieldset>
    </form>
</section >
//
  );
}
