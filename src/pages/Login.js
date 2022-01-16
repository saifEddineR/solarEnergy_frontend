import './login.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../slices/userSlice';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errors, isAuth, userInfo } = useSelector((state) => state.user);
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    if (isAuth && userInfo.role === 'user') navigate('/profile');
    else if (isAuth && userInfo.role === 'admin') navigate('/dashboard');
  }, [isAuth, navigate, userInfo.role]);
  const loginInput = (info) => {
    dispatch(login({ info, navigate }));
  };
  return (
    <div className='main'>
      <div className='login-box'>
        <div className='text-login'>
          <p>Login</p>
          <span>Use your credentials to log in.</span>
        </div>
        <div className='login-form'>
          <form>
            <input
              className='form-control'
              {...register('email')}
              type='email'
              placeholder='Email'
              required
            />
            <input
              className='form-control'
              {...register('password')}
              type='password'
              placeholder='Password'
              required
            />
            {errors && <p>{errors.msg} </p>}
            <input
              className='form-enter submit-btn'
              onClick={handleSubmit(loginInput)}
              type='submit'
              value='Login'
            />
            <Link to='/signup'>Don't have an account yet ?</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
