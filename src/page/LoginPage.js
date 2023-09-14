import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({setAuthenticate}) => {
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate('/')
  }
  return (
    <div className='login-wrap'>
      <form onSubmit={(event) => loginUser(event)}>
        <div className='d-flex label-wrap'>
          <label for="email">Email Address</label>
          <input type='email' name='email' id='email' placeholder='Enter email' />
        </div>
        <div className='d-flex label-wrap'>
          <label for="password">Password</label>
          <input type='password' name='password' id='password' placeholder='Password'/>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
