
export const Login = () => {
  return (
    <div className='login-form'>
        <form>
          <h1>Login</h1>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="name" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <div className="buttons">
            <button type="submit">Login</button>
            <button type="reset">Clear</button>
            </div>
        </form>
    </div>
  )
}
