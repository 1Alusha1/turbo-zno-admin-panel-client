import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from '../async/user';
import Form from '../components/Form';

const Auth = () => {
  const dispatch = useDispatch();
  let [code, setCode] = useState();
  const { isAuth } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    dispatch(fetchLogin(code));
  };

  useEffect(() => {
    isAuth && navigate('/panel');
  }, [isAuth]);

  return (
    <div>
      <h2>Вхід</h2>
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
