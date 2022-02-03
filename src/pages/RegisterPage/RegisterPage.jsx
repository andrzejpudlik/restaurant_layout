import React from 'react';
import { Link } from 'react-router-dom';

import { SubHeading } from '../../components';
import './RegisterPage.css';

const RegisterPage = () => {
  return (
    <div className='app__register flex__center slide-bottom'>
      <div className='app__register-comeback_home'>
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
      <div className='app__register-heading'>
        <SubHeading title='Registration' />
        <h1 className='headtext__cormorant'>Register in our restaurant</h1>
      </div>
      <div className='app__register-input flex__center'>

        <div className='app__register-input_provider'>
          <label className='p__opensans'>Email</label>
          <input type='email' placeholder='Enter your email address' />
        </div>

        <div className='app__register-input_provider'>
          <label className='p__opensans'>Password</label>
          <input type='password' placeholder='Enter your password' />
        </div>

        <div className='app__register-input_provider'>
          <label className='p__opensans'>Repeat Password</label>
          <input type='password' placeholder='Repeat password' />
        </div>

        <div className='app__register-submit_provider'>
          <button type='button' className='custom__button'>Sign In</button>
          <div>
            <p className='p__opensans' style={{ fontSize: 14 }}>Already have an account?</p> 
            <p className='p__opensans'><Link to='/login'>Login here</Link></p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;
