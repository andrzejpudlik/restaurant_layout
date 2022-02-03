import React from 'react';
import { Link } from 'react-router-dom';

import { SubHeading } from '../../components';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className='app__login flex__center'>

      <div className='app__login-comeback_home'>
        <Link to='/'>
          <button 
            className='custom__button' 
            fontSize={27}
            color='white'
          >
            Home
          </button>
        </Link>
      </div>

      <div className='app__login-heading'>
        <SubHeading title='Login' />
        <h1 className='headtext__cormorant'>Log in to our restaurant</h1>
      </div>

      <div className='app__login-input flex__center'>

        <div className='app__login-input_provider'>
          <label className='p__opensans'>Email</label>
          <input type='email' placeholder='Enter your email address' />
        </div>

        <div className='app__login-input_provider'>
          <label className='p__opensans'>Password</label>
          <input type='password' placeholder='Enter your password' />
        </div>

        <div className='app__login-submit_provider'>
          <button type='button' className='custom__button'>Log In</button>
          <div>
            <p className='p__opensans' style={{ fontSize: 14 }}>Don't have an account yet?</p> 
            <p className='p__opensans'><Link to='/register'>Register here</Link></p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;