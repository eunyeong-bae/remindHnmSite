import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';

const LoginPage = () => {

  const [id, setID] = useState('');
  const [pw, setPW] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* original version 
  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate('/')
  }
  */
  const loginUser = (e) => {
    e.preventDefault();
    dispatch(authenticateAction.login(id,pw));
    navigate('/')
  }
  return (
    <div className='login-wrap'>
      <form onSubmit={(event) => loginUser(event)}>
        <div className='d-flex label-wrap'>
          <label for="email">Email Address</label>
          <input type='email' name='email' id='email' placeholder='Enter email' onChange={(e)=>setID(e.target.value)} />
        </div>
        <div className='d-flex label-wrap'>
          <label for="password">Password</label>
          <input type='password' name='password' id='password' placeholder='Password'onChange={(e)=>setPW(e.target.value)}/>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
