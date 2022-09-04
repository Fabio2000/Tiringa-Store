export default function Home() {
  return (
    <div>
      <div>
        <h1>Registre-se</h1>
        <form action="/api/register" method="post">
          <label> Endereço de e-mail</label><br />
          <input type='email' name='email' placeholder='Escreva seu e-mail'></input><br /><br />

          <label>Nome de usuário</label><br />
          <input type='text' name='text' placeholder='Digite seu nome'></input><br /><br />

          <label>Senha</label><br />
          <input type='password' name='password' placeholder='Digite sua senha'></input><br /><br />

          <input type='submit' value='Registrar-se'></input>
        </form>
      </div>

      <div>
        <h1>Login</h1>
        <form action="/api/login" method="post">
          <label>Endereço de e-mail</label><br />
          <input type='email' name='email' placeholder='Digite seu e-mail'></input><br /><br />

          <label>Senha</label><br />
          <input type='password' name='password' placeholder='Digite sua senha'></input><br /><br />

          <input type='submit' value='Login'></input>

        </form>
      </div>
    </div>
  )
}