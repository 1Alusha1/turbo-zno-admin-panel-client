import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from '../asyncAction/user';
import Form from '../components/Form';
import { useCookies } from 'react-cookie';

const Auth = () => {
  const dispatch = useDispatch();
  let [code, setCode] = useState();
  const { isAuth } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [, setCookie] = useCookies();
  const login = (e) => {
    e.preventDefault();
    dispatch(
      fetchLogin(code, (token) => {
        setCookie('token', token);
      })
    );
  };

  useEffect(() => {
    isAuth && navigate('/panel');
  }, [isAuth]);

  return (
    <div>
      <h2 className='center mt-1'>Вхід</h2>
      <Form event={(e) => login(e)}>
        <input
          type='text'
          onChange={(e) => setCode(e.target.value)}
          placeholder='Код з телеграму'
        />
        <input type='submit' value='Уівйти' />
      </Form>
    </div>
  );
};

export default Auth;
