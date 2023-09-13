import React from 'react'

const LoginPage = () => {
  return (
    <div className='login-wrap'>
      <form action='' method='get'>
        <div className='d-flex label-wrap'>
          <label for="email">Email Address</label>
          <input type='email' name='email' id='email' placeholder='Enter email' />
        </div>
        <div className='d-flex label-wrap'>
          <label for="password">Password</label>
          <input type='password' name='password' id='password' placeholder='Password'/>
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
