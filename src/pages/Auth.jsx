import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from '../asyncAction/user';
import Form from '../components/Form';
import UserAlert from '../components/ui/UserAlert';

const Auth = () => {
  const dispatch = useDispatch();
  let [code, setCode] = useState();
  const { isAuth } = useSelector((state) => state.user);
  const { type, message } = useSelector((state) => state.alert);

  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    dispatch(
      fetchLogin(code, (token) => {
        document.cookie = `token=${token}`;
      })
    );
  };

  useEffect(() => {
    isAuth && navigate('/panel');
  }, [isAuth]);

  return (
    <div>
      <UserAlert type={type} message={message} />

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
