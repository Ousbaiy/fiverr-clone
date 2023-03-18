import { useState } from 'react';
import './login.scss'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <form>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="John Deo"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export default Login