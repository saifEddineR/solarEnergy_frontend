import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { register as registerAction } from '../slices/userSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, userInfo } = useSelector((state) => state.user);
  useEffect(() => {
    if (isAuth && userInfo.role === 'user') navigate('/home');
    else if (isAuth && userInfo.role === 'admin') navigate('/dashboard');
  }, [isAuth, navigate, userInfo.role]);
  const inputInfo = (info) => {
    console.log(info);
    dispatch(registerAction({ info, navigate }));
  };
  return (
    <div>
      <div className='main'>
        <div className='login-box'>
          <div className='text-login'>
            <p>Register</p>
            <span>Use your credentials to Register.</span>
          </div>
          <div className='login-form'>
            <form onSubmit={handleSubmit(inputInfo)}>
              <input
                className='form-control'
                type='text'
                {...register('name', { required: true })}
                placeholder='name'
              />
              <input
                className='form-control'
                type='email'
                {...register('email', {
                  required: 'email is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'you should input a valid email',
                  },
                })}
                placeholder='email'
              />
              {errors.email && <p style={{ color: 'red' }}>errors.email.message</p>}
              <input
                className='form-control'
                type='text'
                {...register('username', { required: true })}
                placeholder='Username'
              />
              <input
                className='form-control'
                type='password'
                {...register('password', {
                  required: 'password is required',
                  minLength: {
                    value: 8,
                    message: 'password should be 8 characters length',
                  },
                })}
                placeholder='Password'
              />
              <input className='form-enter submit-btn' type='submit' value='Register' />
              {errors.password && errors.password.message}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
