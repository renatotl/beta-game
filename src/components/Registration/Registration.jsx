import "../Registration/Registration.css";

export function Registration() {
  return (
    <section className='Registration'>
    <form className="form" onSubmit= "login">
        <fieldset className="fieldset">
          <input className="input" type="name" name="name" placeholder="name" />
            <input className="input" type="usernName" name="userName" placeholder="user name"  />
            <input className="input" type="email" name="email" placeholder="email"  />
            <input className="input" type="password" name="password" placeholder="password"/>
            <button className="B" type="button" >Send</button  >
        </fieldset>
    </form>
</section >
//
  );
}
