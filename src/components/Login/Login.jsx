import "../Login/Login.css";

export function Login() {
  return (
    <section className='page login'>
    <form onSubmit= "">
        <fieldset>
          <input type="name" name="name" />
            <input type="email" name={"inputEmail"} description={"Email"} />
            <input type="password" name={"inputPassword"} description={"Password"}/>
            <button description={"Quero Me Logar"} />
          
        </fieldset>
    </form>
</section >
  );
}
